import { useCheckoutStore } from "@/store/checkout-store";
import { Button } from "../ui/button";
import Link from "next/link";
import { generateMessage } from "@/lib/generate-message";

export const StepFinish = () => {
  const { name } = useCheckoutStore((state) => state);
  const message = generateMessage();
  const linkZap = `https://wa.me//${
    process.env.NEXT_PUBLIC_ZAP
  }?text=${encodeURI(message)}`;
  return (
    <div className="text-center flex flex-col gap-5">
      <p>
        Perfeito <strong>{name}</strong>!
      </p>
      <p>
        Agora envie seu pedido para o Whatsapp para concluir, nosso atentente
        ira te guiar para prosseguir o pedido
      </p>
      <Button>
        <Link target="blank" href={linkZap}>
          {" "}
          Enviar para o Whatsapp
        </Link>
      </Button>
    </div>
  );
};
