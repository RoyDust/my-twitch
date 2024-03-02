"use client";

import React, { ElementRef, useRef, useState, useTransition } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { updateStream } from "@/actions/stream";
import { toast } from "sonner";

interface InfoModalProps {
  initialThumbnailUrl: string | null;
  initialName: string;
}

const InfoModal = ({ initialThumbnailUrl, initialName }: InfoModalProps) => {
  const closeRef = useRef<ElementRef<"button">>(null);
  const [name, setName] = useState(initialName);
  const [isPending, startTransition] = useTransition();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    startTransition(() => {
      updateStream({ name: name })
        .then(() => {
          toast.success("Stream updated successfully");
          closeRef.current?.click();
        })
        .catch(() => toast.error("Something went wrong"));
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className=" ml-auto" variant="link" size="sm">
          Edit
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit stream info</DialogTitle>
        </DialogHeader>
        <form onSubmit={onSubmit} className=" space-y-14">
          <div className=" space-y-2">
            <Label>Name</Label>
            <Input
              placeholder="Stream name"
              onChange={onChange}
              value={name}
              disabled={isPending}
            ></Input>
          </div>
          <div className=" flex justify-between">
            <DialogClose ref={closeRef} asChild>
              <Button type="button" variant="ghost">
                Cancel
              </Button>
            </DialogClose>
            <Button disabled={isPending} variant="primary" type="submit">
              Save
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default InfoModal;
