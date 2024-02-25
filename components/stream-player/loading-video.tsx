import { Loader } from "lucide-react";

interface LoadingVideoProps {
  label: string;
}

export const LoadingVideo = ({ label }: LoadingVideoProps) => {
  return (
    <div className=" flex flex-col items-center justify-center h-full space-y-4">
      <Loader className=" animate-spin to-muted-foreground w-10 h-10"></Loader>
      <p className=" to-muted-foreground capitalize">{label}</p>
    </div>
  );
};
