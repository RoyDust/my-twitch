import { isFollowingUser } from "@/lib/follow-service";
import { getUserByUsername } from "@/lib/user-service";
import { notFound } from "next/navigation";

interface UserPageProps {
  params: {
    username: string;
  };
}

const UserPage = async ({ params }: UserPageProps) => {
  const user = await getUserByUsername(params.username);

  if (!user) {
    notFound();
  }

  const isFollowing = await isFollowingUser(user.id);

  return (
    <div className=" gap-y-4 flex flex-col">
      <p>User :{user.username}</p>
      <p>user ID:{user.id}</p>
      <p> is following :{`${isFollowing}`}</p>
    </div>
  );
};

export default UserPage;
