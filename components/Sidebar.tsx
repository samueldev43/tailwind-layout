import { HomeIcon, Library, Search } from "lucide-react";

export function Sidebar() {

    return (
        <aside className="w-72 bg-zinc-950 p-6">
        <div className='flex items-center gap-2'>
          <div className='w-3 h-3 bg-red-500 rounded-full'></div>
          <div className='w-3 h-3 bg-yellow-500 rounded-full'></div>
          <div className='w-3 h-3 bg-green-500 rounded-full'></div>
        </div>
        <nav className='space-y-5 mt-10'>
          <a href="" className='flex items-center gap-3 font-semibold text-zinc-100'>
            <HomeIcon />
            Home
          </a>
          <a href="" className='flex items-center gap-3 font-semibold text-zinc-100'>
            <Search />
            Search</a>
          <a href="" className='flex items-center gap-3 font-semibold text-zinc-100'>
            <Library />
            Your library</a>
        </nav>
            
        <nav className='mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-2'>
          <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Playlist</a>
        </nav>
      </aside>
    )
}
