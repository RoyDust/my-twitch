import { Suspense } from "react";
import { Container } from "./_components/container";
import Navbar from "./_components/navbar";
import { Sidebar, SidebarSkeleton } from "./_components/sidebar";

const BrowseLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <div className=" flex h-full pt-20">
        {/* 如果使用Suspense 会导致客户端和服务端不一致水合失败，所以我们在app\(browse)\(home)\_components\sidebar\wrapper.tsx 做了解决方法 */}
        <Suspense fallback={<SidebarSkeleton />}>
          <Sidebar />
        </Suspense>

        <Container>{children}</Container>
      </div>
    </>
  );
};

export default BrowseLayout;
