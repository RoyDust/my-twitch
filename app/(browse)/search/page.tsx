import { redirect } from "next/navigation";
import React, { Suspense, memo } from "react";
import { Results, ResultsSkeleton } from "./_components/results";

interface SearchPageProps {
  searchParams: {
    term?: string;
  };
}

const SearchPage = ({ searchParams }: SearchPageProps) => {
  if (!searchParams.term) {
    redirect("/");
  }
  return (
    <div className=" max-w-screen-2xl h-full p-8 mx-auto">
      <Suspense fallback={<ResultsSkeleton />}>
        <Results term={searchParams.term} />
      </Suspense>
    </div>
  );
};
export default SearchPage;
