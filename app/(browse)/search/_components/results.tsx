import { getSearch } from "@/lib/search-service";
import ResultCard, { ResultCardSkeleton } from "./resul-card";
import { Skeleton } from "@/components/ui/skeleton";

interface ResultsProps {
  term: string;
}

export const Results = async ({ term }: ResultsProps) => {
  const data = await getSearch(term);
  return (
    <div>
      <h2 className=" mb-4 text-lg font-semibold">
        Results for term &quot;{term}&quot;
      </h2>
      {data.length === 0 && (
        <div className=" text-muted-foreground text-sm">
          No results found. Try searching for something else.
        </div>
      )}
      <div className=" gap-y-4 flex flex-col">
        {data.map((result) => (
          <ResultCard data={result} key={result.id} />
        ))}
      </div>
    </div>
  );
};

export const ResultsSkeleton = () => {
  return (
    <div>
      <Skeleton className=" mb-4 h-8 w-[290px]" />
      <div className=" gap-y-4 flex flex-col">
        {[...Array(4)].map((_, i) => (
          <ResultCardSkeleton key={i} />
        ))}
      </div>
    </div>
  );
};
