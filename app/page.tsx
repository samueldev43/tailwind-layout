import Image from 'next/image'
import { Home as HomeIcon, ChevronLeft, ChevronRight} from 'lucide-react'

import { Sidebar } from '@/components/Sidebar';
import { Footer } from '@/components/Footer';
import { Album } from '@/components/Album';

export default function Home() {
  return (
    <>
      <div className="h-screen flex flex-col">
        <div className="flex flex-1">
          <Sidebar />
          <main className="flex-1 p-6">
            <div className='flex items-center gap-4'>
              <button className='rounded-full bg-black/40 p-1'>
                <ChevronLeft />
              </button>

              <button className='rounded-full bg-black/40 p-1'>
                <ChevronRight />
              </button>
            </div>

            <h1 className='font-semibold text-3xl mt-10'>Good afternoon</h1>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4'>
             <Album />
             <Album />
             <Album />
             <Album />
             <Album />
             <Album />
            </div>

            <h2 className='font-semibold text-3xl mt-10'>Made for "username"</h2>

            <div className='grid sm:grid-cols-3 lg:grid-cols-5 gap-4 mt-4'>
              <a href='#' className='bg-white/5 p-4 flex flex-col gap-2 rounded-md hover:bg-white/10'>
                <Image className='w-full' width={120} height={120} src='/album.jpg' alt='Album de musica' />
                <strong className='font-semibold'>Music title</strong>
                <span className='text-sm text-zinc-400'>Artist's name</span>
              </a>
              <a href='#' className='bg-white/5 p-4 flex flex-col gap-2 rounded-md hover:bg-white/10'>
                <Image className='w-full' width={120} height={120} src='/album.jpg' alt='Album de musica' />
                <strong className='font-semibold'>Music title</strong>
                <span className='text-sm text-zinc-400'>Artist's name</span>
              </a>
              <a href='#' className='bg-white/5 p-4 flex flex-col gap-2 rounded-md hover:bg-white/10'>
                <Image className='w-full' width={120} height={120} src='/album.jpg' alt='Album de musica' />
                <strong className='font-semibold'>Music title</strong>
                <span className='text-sm text-zinc-400'>Artist's name</span>
              </a>
              <a href='#' className='bg-white/5 p-4 flex flex-col gap-2 rounded-md hover:bg-white/10'>
                <Image className='w-full' width={120} height={120} src='/album.jpg' alt='Album de musica' />
                <strong className='font-semibold'>Music title</strong>
                <span className='text-sm text-zinc-400'>Artist's name</span>
              </a>
              <a href='#' className='bg-white/5 p-4 flex flex-col gap-2 rounded-md hover:bg-white/10'>
                <Image className='w-full' width={120} height={120} src='/album.jpg' alt='Album de musica' />
                <strong className='font-semibold'>Music title</strong>
                <span className='text-sm text-zinc-400'>Artist's name</span>
              </a>
            </div>
          </main>
        </div>
       
       <Footer />
      </div>
    </>
  );
}
