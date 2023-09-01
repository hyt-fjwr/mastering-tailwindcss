'use client';
import Image from 'next/image'

function toggleDarkTheme(){
  document.body.classList.toggle('dark');
}

export default function Home() {
  return (
    <>
    <main className='p-5'>
      <h1 className='text-center text-lg text-blue-400'>HELLO WORLD</h1>
      
      <div className='w-full h-10 bg-violet-200 border-violet-500 rounded-md my-4 p-2'>
        <p className='text-center font-mono font-extrabold text-[10px]'>
          A Div
        </p>
      </div>
    
      <div className='fixed w-10 h-10 bg-red-500 top-0'></div>
        <div className='flex justify-center space-x-3'>
          <div className='h-16 w-16 rounded-full bg-slate-400'></div>
          <div className='h-16 w-16 rounded-full bg-slate-400'></div>
          <div className='h-16 w-16 rounded-full bg-slate-400'></div>
      </div>

      <div className='grid grid-cols-3 gap-2 mt-3'>
        <div className='bg-violet-500 h-12'></div>
        <div className='bg-violet-500 h-12'></div>
        <div className='bg-violet-500 h-12'></div>
      </div>
    
      <button className='card'>Click me</button>

      <ul className='my-2 space-y-2'>
        <li className='bg-white p2 first:bg-blue-200'>Item 1</li>
        <li className='bg-white p2 odd:bg-blue-300 even:bg-blue-400'>Item 1</li>
        <li className='bg-white p2 odd:bg-blue-300 even:bg-blue-400'>Item 1</li>
        <li className='bg-white p2 odd:bg-blue-300 even:bg-blue-400'>Item 1</li>
        <li className='bg-white p2 odd:bg-blue-300 even:bg-blue-400'>Item 1</li>
      </ul>

      {/* dark theme */}

      <div className='m-10 rounded-lg bg-white px-6 py-8 shadow-xl ring-1 ring-slate-900/5 dark:bg-slate-800 duration-100'>
        <h3 className='text-base font-medium tracking-tight text-slate-900 dark:text-white duration-100'>This is a text element</h3>
        <p className='mt-2 text-sm text-slate-500 dark:text-blue-100 duration-100'>This is an even longer p tag element</p>

        <button id='toggleDark' className='text-white px-4 py-2 text-sm font-medium mt-8 bg-slate-500 dark:bg-slate-200 dark:text-slate-600 rounded-md duration-100'
        onClick={toggleDarkTheme}>Toggle Dark Mode</button>
      </div>

      <p className='text-2xl text-chestnut bg-stone-100 p-[16px]'>Chestnut Color</p>

    </main>
    </>
    )
}
