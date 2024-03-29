import { currentUser } from "@clerk/nextjs";
import { db } from "@/lib/db";

export const getSelf = async () => {
  const self = await currentUser();

  if (!self || !self.username) {
    throw new Error("Unauthorized");
  }

  const user = await db.user.findFirst({
    where: { externalUserId: self.id },
  });

  if (!user) {
    throw new Error("No user found");
  }
  return user;
};

export const getSelfByUsername = async (username: string) => {
  const self = await currentUser();
  if (!self || !self.username) {
    throw new Error("Unauthorized");
  }

  const user = await db.user.findUnique({
    where: { username },
  });
  if (!user) {
    throw new Error("No user found");
  }

  if (user.username !== self.username) {
    throw new Error("Unauthorized");
  }

  return user;
};
