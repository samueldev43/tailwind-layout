import { Play } from "lucide-react"
import Image from "next/image"

export function Album() {
    return (
        <a href='#' className='bg-white/5 group rounded flex flex-row items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
            <Image width={120} height={120} className="sm:h-full" src='/album.jpg' alt='Album de musica' />
            <strong>Music album</strong>

            <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-8 md:ml-auto mr-8 invisible group-hover:visible'>
                <Play />
            </button>
        </a>
    )
}