import Cabecalho from "./Cabecalho"

export interface PaginaProps {
    children: React.ReactNode
}

export default function Pagina(props: PaginaProps) {
    return (
        <div className="flex flex-col min-h-max">
            <Cabecalho />
            <main className="bg-slate-900 flex-grow">
                { props.children }
            </main>
        </div>
    )
}