import React from 'react'

function SectionThree() {
  return (
    <section className='bg-terciary w-full h-auto pt-10 pb-20 px-2 md:px-0 flex flex-col items-center justify-center'>
        <h1 className='text-6xl text-center font-serif pb-10'>Ubicación</h1>
        
        <div className='pb-10'>
            <iframe className='w-72 h-72 md:w-[600px] md:h-[450px]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3166.0038731534614!2d-5.943635724476601!3d37.48423497206011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1269d3557ff097%3A0xfac6cb19dea0e43b!2sBar%20restaurante%20El%20Sitio!5e0!3m2!1ses!2ses!4v1737039643354!5m2!1ses!2ses" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>

        <div className='font-serif text-lg md:text-xl text-center'>
            <h4>Calle Córdoba, 4</h4>
            <h4>San José de la Rinconada, Sevilla</h4>
        </div>
    </section>
  )
}

export default SectionThree