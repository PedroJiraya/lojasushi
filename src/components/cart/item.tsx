import { Cart } from "@/types/cart";
import { CartItemQuantity } from "./item-quantity";

type Props = {
  item: Cart;
};

export const CartItem = ({ item }: Props) => {
  return (
    <div className="flex items-center gap-5">
      <div>
        <img
          src={item.product.image}
          alt={item.product.name}
          className="w-16 overflow-hidden object-cover"
        />
      </div>
      <div className="flex-1 ">
        <p className="text-md">{item.product.name}</p>
        <p className="text-xs opacity-50">
          {item.product.price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
      </div>
      <div>
        <CartItemQuantity CartItem={item} />
      </div>
    </div>
  );
};
