import { db } from "@/lib/db";
import { create } from "zustand";

export const getRecommended = async () => {
  const users = await db.user.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return users;
};
