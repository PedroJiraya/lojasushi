"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export const CartSideBar = () => {
  return (
    <Sheet modal={false}>
      <SheetTrigger asChild>
        <Button>
          <ShoppingCart className="mr-2" />
          <p>Carrinho</p>
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Carrinho</SheetTitle>
        </SheetHeader>

        <div className="mx-3">
          <div className="flex flex-col gap-5">...</div>

          <Separator className="my-4" />

          <div className="flex justify-between items-center text-xm">
            <div>Subtotal:</div>
            <div>..</div>
          </div>
          <Separator />
          <div className="text-center mt-4">
            <Button>Finalizar Compra</Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};
