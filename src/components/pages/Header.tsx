"use client";

import { Logo } from "@/components/pages/logo";
import { ModeToggle } from "@/components/theme/ToggleTheme";
import { CartSideBar } from "@/components/cart/CartSideBar";

export const Header = () => {
  return (
    <header className="flex justify-between items-center my-5 mx-3 ">
      <ModeToggle />
      <div>
        <Logo />
      </div>
      <div>
        <CartSideBar />
      </div>
    </header>
  );
};
