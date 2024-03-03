"use server";
import { revalidatePath } from "next/cache";
import { blockUser, unblockUser } from "../lib/block-service";
import { getSelf } from "@/lib/auth-service";
import { RoomServiceClient } from "livekit-server-sdk";

const roomService = new RoomServiceClient(
  process.env.LIVEKIT_API_URL!,
  process.env.LIVEKIT_API_KEY!,
  process.env.LIVEKIT_API_SECRET!,
);

export const onBlock = async (id: string) => {
  const self = await getSelf();

  let blockedUser;
  // 如果用户已经存在，则正常运行，如果是游客
  try {
    blockedUser = await blockUser(id);
  } catch (error) {}

  try {
    // 移除房间中的用户
    await roomService.removeParticipant(self.id, id);
  } catch (error) {}

  revalidatePath(`/u/${self.username}/community`);

  return blockedUser;
};

export const onUnblock = async (id: string) => {
  const self = await getSelf();
  const unblockedUser = await unblockUser(id);

  revalidatePath(`/u/${self.username}/community`);
  return unblockedUser;
};
