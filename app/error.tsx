"use client";
import { Button } from "@/components/ui/button";
import React, { memo } from "react";
import Link from "next/link";

const ErrorPage = () => {
  return (
    <div className=" text-muted-foreground flex flex-col items-center justify-center h-full space-y-4">
      <h1 className=" text-4xl">Something went wrong</h1>
      <Button variant="secondary" asChild>
        <Link href="/">Go back Home</Link>
      </Button>
    </div>
  );
};
export default ErrorPage;
