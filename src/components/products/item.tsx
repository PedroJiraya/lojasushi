import { Product } from "@/types/Product";
import { Button } from "../ui/button";

type Props = {
	item: Product;
};

export const ProductItem = ({ item }: Props) => {
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
				<p>{item.name}</p>
				<p>{item.price.toFixed(2)}</p>
				<Button>Adicionar</Button>
			</div>
		</div>
	);
};
