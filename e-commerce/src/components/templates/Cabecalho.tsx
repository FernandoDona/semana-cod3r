import { IconShoppingCart } from '@tabler/icons-react'
import Logo from './Logo'

export default function Cabecalho() {
    return (
        <header className="flex items-center h-16 px-4 bg-zinc-800">
            <Logo />
            <div className='flex-grow'></div>
            <div className='py-2 px-4'>
                <IconShoppingCart stroke={2} />
            </div>
        </header>
    )
}