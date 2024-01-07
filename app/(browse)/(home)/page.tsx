import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <main className=" gap-y-4 flex flex-col">
      <UserButton />
    </main>
  );
}
