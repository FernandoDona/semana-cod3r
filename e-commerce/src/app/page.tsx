import ProdutoCard from "@/components/ProdutoCard";
import Pagina from "@/components/templates/Pagina";
import produtos from "@/data/constants/produtos";

export default function Home() {
  return (
    <Pagina>
      <div className="flex flex-wrap gap-5 justify-center">
        {produtos.map((produto, i) => (
          <ProdutoCard key={i} produto={produto}></ProdutoCard>
        ))}
      </div>
    </Pagina>
  );
}
