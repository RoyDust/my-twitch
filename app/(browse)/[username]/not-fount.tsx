import { Button } from "@/components/ui/button";
import React, { memo } from "react";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className=" text-muted-foreground flex flex-col items-center justify-center h-full space-y-4">
      <h1 className=" text-4xl">404</h1>
      <p>We couldn&apos;t find the page you were looking for.</p>
      <Button variant="secondary" asChild>
        <Link href="/">Go back Home</Link>
      </Button>
    </div>
  );
};
export default NotFoundPage;
