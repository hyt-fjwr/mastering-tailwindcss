import Image from 'next/image'

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
    
      <button className='my-2 rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300 active:bg-blue-800 duration-200'>Click me</button>

      <ul>
        <li className='bg-white p2 first:bg-blue-200'>Item 1</li>
        <li className='bg-white p2 odd:bg-blue-300 even:bg-blue-400'>Item 1</li>
        <li className='bg-white p2 odd:bg-blue-300 even:bg-blue-400'>Item 1</li>
        <li className='bg-white p2 odd:bg-blue-300 even:bg-blue-400'>Item 1</li>
        <li className='bg-white p2 odd:bg-blue-300 even:bg-blue-400'>Item 1</li>
      </ul>
    </main>
    </>
    )
}
