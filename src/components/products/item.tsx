"use client";

import { Product } from "@/types/Product";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useCartStore } from "@/store/cart-store";

type Props = {
  item: Product;
};

export const ProductItem = ({ item }: Props) => {
  const { upSetCartItem } = useCartStore((state) => state);

  const handdleAddButton = () => {
    upSetCartItem(item, 1);
    toast("Adicionado ao carrinho", {
      description: item.name,
      action: {
        label: "Fechar",
        onClick: () => console.log("Fechar"),
      },
    });
  };

  return (
    <div>
      <div className="rounded-md overflow-hidden border border-gray-700">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-32 object-cover"
        />
      </div>
      <div className="mt-3 flex flex-col gap-2">
        <p className="text-lg">{item.name}</p>
        <p className="text-sm opacity-50">{item.price.toFixed(2)}</p>
        <Button
          variant={"outline"}
          onClick={handdleAddButton}
          className="cursor-pointer"
        >
          Adicionar
        </Button>
      </div>
    </div>
  );
};
