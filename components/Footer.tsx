import { Shuffle, SkipBack, Play, SkipForward, Repeat, LayoutList, Mic2, Laptop2, Volume, Maximize2 } from 'lucide-react'
import Image from 'next/image'

export function Footer() {
    return (
        <footer className="bg-zinc-800 border-zinc-700 border-t px-4 py-2 md:flex md:flex-row items-center justify-between sm:flex-col">
            <div className='flex items-center gap-3'>
                <Image width={56} height={56} src='/album.jpg' alt='Album de musica' />
                <div className='flex flex-col'>
                    <strong className='font-normal'>Music name</strong>
                    <span className='text-xs text-zinc-400'>Artist</span>
                </div>
            </div>
            <div className='flex flex-col items-center gap-2 sm:mt-10 mb-10'>
                <div className='flex items-center gap-6'>
                    <Shuffle size={20} className='text-zinc-200' />
                    <SkipBack size={20} className='text-zinc-200' />
                    <button className='w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-white text-black'>
                        <Play />
                    </button>
                    <SkipForward size={20} className='text-zinc-200' />
                    <Repeat size={20} className='text-zinc-200' />
                </div>

                <div className='flex items-center gap-2'>
                    <span className='text-xs text-zinc-400 '>0:31</span>
                    <div className='h-1 rounded-full w-96 bg-zinc-600'>
                        <div className='bg-zinc-200 w-40 h-1 rounded-full'></div>
                    </div>
                    <span className='text-xs text-zinc-400 '>2:31</span>
                </div>
            </div>

            <div className='flex itmes-center gap-2 sm:mt-10'>
                <Mic2 size={20} />
                <LayoutList size={20} />
                <Laptop2 size={20} />
                <div className='flex items-center gap-2'>
                    <Volume size={20} />
                    <div className='h-1 rounded-full w-24 bg-zinc-600'>
                        <div className='bg-zinc-200 w-10 h-1 rounded-full'></div>
                    </div>
                </div>
                <Maximize2 size={20} />
            </div>
        </footer>
    )
}