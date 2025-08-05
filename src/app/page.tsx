import { Footer } from "@/components/pages/Footer";
import { Header } from "@/components/pages/Header";
import { ProductsTab } from "@/components/products/ProductsTab";
import { SkeletonTab } from "@/components/products/Skeleton";
import { Suspense } from "react";

export default function Home() {
	return (
		<div className="w-full max-w-4xl mx-auto">
			<Header />
			<div className="mx-3">
				<Suspense fallback={<SkeletonTab />}>
					<ProductsTab />
				</Suspense>
			</div>
			<Footer />
		</div>
	);
}
