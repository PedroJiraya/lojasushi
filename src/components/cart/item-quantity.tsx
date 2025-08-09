import { useCartStore } from "@/store/cart-store";
import { Cart } from "@/types/cart";
import { Button } from "@/components/ui/button";
import { MinusIcon, PlusIcon } from "lucide-react";

type Props = {
  CartItem: Cart;
};

export const CartItemQuantity = ({ CartItem }: Props) => {
  const { upSetCartItem } = useCartStore((state) => state);

  const handdlePlusIcon = () => {
    upSetCartItem(CartItem.product, 1);
  };
  const handdleMinusIcon = () => {
    upSetCartItem(CartItem.product, -1);
  };

  return (
    <div className="flex items-center gap-2">
      <Button
        onClick={handdlePlusIcon}
        variant={"outline"}
        className="size-5 cursor-pointer"
        size={"icon"}
      >
        <PlusIcon className="size-3" />
      </Button>
      <div className="text-xs">{CartItem.quantity}</div>
      <Button
        onClick={handdleMinusIcon}
        variant={"outline"}
        className="size-5 cursor-pointer"
        size={"icon"}
      >
        <MinusIcon className="size-3" />
      </Button>
    </div>
  );
};
