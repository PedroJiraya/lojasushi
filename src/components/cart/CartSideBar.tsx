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
import { useCartStore } from "@/store/cart-store";
import { CartItem } from "./item";
import { useState } from "react";
import { CheckoutDialog } from "../checkout/dialog";

export const CartSideBar = () => {
  const { cart } = useCartStore((state) => state);

  let subtotal = 0;
  for (let item of cart) {
    subtotal += item.quantity * item.product.price;
  }

  const [checkoutOpen, setCheckoutOpen] = useState(false);

  return (
    <Sheet modal={false}>
      <SheetTrigger asChild>
        <Button className="relative">
          <ShoppingCart className="mr-2" />
          <p>Carrinho</p>
          {cart.length > 0 && (
            <div className="absolute size-3 bg-red-600 rounded-full -right-1 -top-1"></div>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle></SheetTitle>
        </SheetHeader>

        <div className="mx-3">
          <div className="flex flex-col gap-5 my-3">
            {cart.map((item) => (
              <CartItem key={item.product.id} item={item} />
            ))}
          </div>

          <Separator className="my-4" />

          <div className="flex justify-between items-center text-xm">
            <div>Subtotal:</div>
            <div>
              {subtotal.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </div>
          </div>
          <Separator />
          <div className="text-center mt-4">
            <Button
              onClick={() => setCheckoutOpen(true)}
              disabled={cart.length <= 0}
            >
              Finalizar Compra
            </Button>
          </div>
          <CheckoutDialog open={checkoutOpen} onOpenChange={setCheckoutOpen} />
        </div>
      </SheetContent>
    </Sheet>
  );
};
