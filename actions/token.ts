"use server";

import { v4 } from "uuid";
import { AccessToken } from "livekit-server-sdk";
import { getUserById } from "@/lib/user-service";
import { getSelf } from "@/lib/auth-service";
import { isBlockedByUser } from "@/lib/block-service";

// 创建观众的token
export const createViewerToken = async (hostIdentity: string) => {
  let self;

  // 获取用户信息
  try {
    self = await getSelf();
  } catch (error) {
    const id = v4();
    const username = `guest#${Math.floor(Math.random() * 100)}`;
    self = { id, username };
  }

  // 获取主播信息
  const host = await getUserById(hostIdentity);

  if (!host) {
    throw new Error("Host user not found");
  }

  // 判断是否被屏蔽
  const isBlocked = await isBlockedByUser(host.id);
  if (isBlocked) {
    throw new Error("Host user is blocked");
  }

  // 判断是不是自己
  const isHost = self.id === host.id;

  const token = new AccessToken(
    process.env.LIVEKIT_API_KEY!,
    process.env.LIVEKIT_API_SECRET!,
    {
      identity: isHost ? `host-${self.id}` : self.id,
      name: self.username,
    },
  );

  token.addGrant({
    room: host.id,
    roomJoin: true,
    canPublish: false,
    canPublishData: true,
  });

  return await Promise.resolve(token.toJwt());
};
