import React, { memo } from "react";
import Logo from "./_compoents/logo";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" flex flex-col items-center justify-center h-full space-y-6">
      <Logo />
      {children}
    </div>
  );
};

export default AuthLayout;
