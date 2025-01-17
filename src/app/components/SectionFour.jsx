import React from 'react'

function SectionFour() {
  return (
    <section className='bg-quaternary w-full h-auto pt-10 pb-20 px-2 md:px-0 flex flex-col items-center justify-center'>
        <h1 className='text-6xl text-center font-serif pb-10'>Contacto</h1>

        <div className='font-serif text-lg md:text-xl text-center flex flex-col items-center justify-center p-8  border-x border-y border-white'>
            <div className='flex gap-4 items-center pb-10'>
                <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-phone"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" /></svg>
                <h4>955 79 10 13</h4>
            </div>

            <div className='flex gap-4 items-center'>
                <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-clock"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M12 7v5l3 3" /></svg>
                <h4>Lunes a Domingo → 11:45 - 0:30</h4>
            </div>
        </div>
    </section>
  )
}

export default SectionFour