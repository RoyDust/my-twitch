import { Results, ResultsSkeleton } from "./_components/results";
import { Suspense } from "react";
export default function Home() {
  return (
    <main className=" max-w-screen-2xl h-full p-8 mx-auto">
      <Suspense fallback={<ResultsSkeleton />}>
        <Results />
      </Suspense>
    </main>
  );
}
