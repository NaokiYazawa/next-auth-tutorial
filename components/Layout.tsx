import React from "react";

type LayoutProps = Required<{
  readonly children: React.ReactNode;
}>;

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center text-3xl">
      {children}
    </div>
  );
};

export default Layout;
