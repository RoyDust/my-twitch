import { getStreams } from "@/lib/feed-service";
import React, { memo } from "react";
import ResultCard, { ResultsCardSkeleton } from "./result-card";
import { Skeleton } from "@/components/ui/skeleton";

export const Results = async () => {
  const data = await getStreams();

  return (
    <div>
      <h2 className=" mb-4 text-lg font-semibold">
        Streams we think you&apos;ll like
      </h2>
      {data.length === 0 && (
        <div className=" text-muted-foreground text-sm">No streams found.</div>
      )}
      <div className=" md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 grid grid-cols-1 gap-4">
        {data.map((result) => (
          <ResultCard key={result.id} data={result} />
        ))}
      </div>
    </div>
  );
};

export const ResultsSkeleton = () => {
  return (
    <div>
      <Skeleton className=" mb-4 h-8  w-[290px]" />
      <div className=" md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 grid grid-cols-1 gap-4">
        {[...Array(4)].map((_, i) => (
          <ResultsCardSkeleton key={i} />
        ))}
      </div>
    </div>
  );
};
