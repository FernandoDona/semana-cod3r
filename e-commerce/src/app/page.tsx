import Pagina from "@/components/templates/Pagina";
import Image from "next/image";

export default function Home() {
  return (
    <Pagina>
      <div>
        <div className="flex flex-col w-min bg-slate-400 rounded-md">
          <Image src="next.svg" width={200} height={200} alt="imagem do produto x"/>
          <div className="p-4">
            <div className="flex flex-col items-center">
              <span className="text-2xl">Smartphone ZYX</span>
              <div className="text-center">
                Texto de descrição aleatório aaaah,m enche linguiça xxxxxxxxxxxxxxxxxxxxxxxxxx
              </div>
            </div>
            <div className="flex justify-between px-4">
              <span>R$ 19999</span>
              <button className="bg-zinc-500 rounded-md px-2">
                Adicionar
              </button>
            </div>
          </div>
        </div>
      </div>
    </Pagina>
  );
}
