import React from "react";
import { TopHeader } from "./TopHeader/TopHeader";
import { BottomHeader } from "./BottomHeader/BottomHeader";
const Header = () => {
  return (
    <header className="header">
      <TopHeader />
      <BottomHeader></BottomHeader>
    </header>
  );
};

export { Header };
