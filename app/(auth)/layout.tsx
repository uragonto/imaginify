import React from "react";

// 16:55
function layout({ children }: { children: React.ReactNode }) {
  return <main className="auth">{children}</main>;
}

export default layout;
