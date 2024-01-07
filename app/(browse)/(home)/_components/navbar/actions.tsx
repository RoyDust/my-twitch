import { Button } from "@/components/ui/button";
import {
  SignInButton,
  currentUser,
  ClerkProvider,
  UserButton,
} from "@clerk/nextjs";
import { Clapperboard } from "lucide-react";
import Link from "next/link";

const Actions = async () => {
  const user = await currentUser();

  return (
    <div className=" gap-x-2 lg:ml-0 flex items-center justify-end ml-4">
      {user ? (
        <div className=" gap-x-4 flex items-center">
          <Button
            size="sm"
            variant="ghost"
            className=" text-muted-foreground hover:text-primary"
            asChild
          >
            <Link href={`/u/${user.username}`}>
              <Clapperboard className=" lg:mr-2 w-5 h-5" />
              <span className=" lg:block hidden">Dashboard</span>
            </Link>
          </Button>
          <UserButton afterSignOutUrl="/" />
        </div>
      ) : (
        <SignInButton>
          <Button size="sm" variant="primary">
            Login
          </Button>
        </SignInButton>
      )}
    </div>
  );
};

export default Actions;
