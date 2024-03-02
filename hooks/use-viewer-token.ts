"use client";
import { createViewerToken } from "@/actions/token";
import { useEffect, useState } from "react";
import { toast } from "sonner";

import { JwtPayload, jwtDecode } from "jwt-decode";
import { log } from "console";

export const useViewerToken = (hostIdentity: string) => {
  const [token, setToken] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [identity, setIdentity] = useState<string>("");

  // 获取观众信息
  useEffect(() => {
    const createToken = async () => {
      try {
        // 获取观众token
        const viewerToken = await createViewerToken(hostIdentity);
        setToken(viewerToken);

        const decodedToken = jwtDecode(viewerToken) as JwtPayload & {
          name?: string;
        };

        console.log(decodedToken);
        const name = decodedToken?.name;

        // ! 这里可能api发生变化了，没有jti字段
        // const identity = decodedToken?.jti;
        const identity = decodedToken?.sub;

        if (identity) {
          setIdentity(identity);
        }
        if (name) {
          setName(name);
        }
      } catch (error) {
        toast.error("Some error occured while creating the token");
      }
    };

    createToken();
  }, [hostIdentity]);

  return {
    token,
    name,
    identity,
  };
};
