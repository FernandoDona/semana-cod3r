import { Produto } from "@/data/model/Produto";
import Image from "next/image";

export interface ProdutoCardPros {
    produto: Produto
}

export default function ProdutoCard({ produto }: ProdutoCardPros) {
    return (
        <div className="flex flex-col h-96 w-64 bg-zinc-900 rounded-md">
            <div className="relative h-2/4">
                <Image src={produto.imagem} fill className="object-cover" alt="imagem do produto x" />
            </div>
            <div className="flex flex-col flex-grow p-4 justify-between">
                <div className="flex flex-col flex-grow items-start gap-2">
                    <p className="text-xl">{produto.nome}</p>
                    <p className="text-xs text-zinc-400">
                        {produto.descricao}
                    </p>
                </div>
                <div className="flex justify-between items-center">
                    <span className="font-bold">R$ {produto.preco}</span>
                    <button className="border rounded-full px-4 py-1 text-xs">
                        Adicionar
                    </button>
                </div>
            </div>
        </div>
    )
}