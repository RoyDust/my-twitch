"use client";

import qs from "query-string";
import React, { useState } from "react";
import { SearchIcon, X } from "lucide-react";
import { useRouter } from "next/navigation";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Search = () => {
  const router = useRouter();
  const [value, setValue] = useState("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!value) return;

    // localhost:3000/search?term={value}
    const url = qs.stringifyUrl(
      {
        url: "/search",
        query: {
          term: value,
        },
      },
      {
        skipEmptyString: true,
      },
    );

    router.push(url);
  };

  const onClear = () => {
    setValue("");
  };

  return (
    <form
      onSubmit={onSubmit}
      className=" relative flex w-full items-center lg:w-[400px]"
    >
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Search"
        className=" focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0 rounded-r-none"
      />
      {value && (
        <X
          className=" absolute right-14 top-2.5 h-5 w-5 cursor-pointer to-muted-foreground transition hover:opacity-75"
          onClick={onClear}
        />
      )}
      <Button
        type="submit"
        size="sm"
        variant="secondary"
        className=" rounded-l-none"
      >
        <SearchIcon className=" text-muted-foreground w-5 h-5" />
      </Button>
    </form>
  );
};
export default Search;
