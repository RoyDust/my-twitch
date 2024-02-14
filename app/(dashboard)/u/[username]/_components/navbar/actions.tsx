import { Button } from "@/components/ui/button";
import {
  SignInButton,
  currentUser,
  ClerkProvider,
  UserButton,
} from "@clerk/nextjs";
import {  LogOut } from "lucide-react";
import Link from "next/link";

const Actions = () => {
  return (
    <div className=" gap-x-2 flex items-center justify-end">
      <Button asChild size="sm" variant="ghost" className=" text-muted-foreground hover:text-primary" >
        <Link href="/">
          <LogOut className=" w-5 h-5 mr-2" />
          Exit
        </Link>
      </Button>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default Actions;
