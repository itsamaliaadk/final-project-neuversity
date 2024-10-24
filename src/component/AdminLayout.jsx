import React from "react";
import NavDash from "./blocks/NavDash";

export default function AdminLayout({ children }) {
  return (
    <div>
      <NavDash />
      <main>{children}</main>
    </div>
  );
}
