import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

function Services() {
  const swiperRef = useRef(null); // referencia al Swiper
  const [activeTab, setActiveTab] = useState(0); // tab activo

  const tabs = ['Web Service', 'Club Service', 'Ride Service'];

  const handleTabClick = (index) => {
    setActiveTab(index);
    if (swiperRef.current) {
      swiperRef.current.slideTo(index); // cambiar slide
    }
  };

  return (
    <section id='services'>
        {/* Pestañas */}
        <div className='flex justify-around mb-5 bg-primary-gray font-bold text-gray-400 rounded-default text-sm'>
            {tabs.map((tab, index) => (
                <button
                    key={index}
                    onClick={() => handleTabClick(index)}
                    className={`
                        py-2.5 px-5
                        ${activeTab === index ? 'text-white' : 'border-transparent font-normal'}
                        bg-transparent
                        cursor-pointer
                        transition-all
                        hover:text-white
                    `}
                >
                    {tab}
                </button>
            ))}
        </div>

        {/* Swiper */}
        <Swiper
            spaceBetween={50}
            slidesPerView={1}
            onSwiper={(swiper) => (swiperRef.current = swiper)} // guardar referencia
            onSlideChange={(swiper) => setActiveTab(swiper.activeIndex)} // actualizar tab al deslizar
        >
            <SwiperSlide>
                <div className="px-6 rounded-default">
                    <h3 className="text-3xl font-bold mb-3 text-primary-dark">Web Service</h3>
                    <p className="text-primary-gray mb-4">
                        Una web pensada para tu marca, hecha para destacar y dejar huella en cada visita.
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-primary-dark">
                        <li>100% personalizada.</li>
                        <li>Refleja tu esencia.</li>
                        <li>Enfocada en el cliente.</li>
                        <li>Optimizada para resultados.</li>
                    </ul>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="px-6 rounded-default">
                    <h3 className="text-3xl font-bold mb-3 text-primary-dark">Club Service</h3>
                    <p className="text-primary-gray mb-4">
                        Premia la lealtad de tus clientes y aumenta tus ingresos con una plataforma fácil de usar, atractiva y diseñada para que vuelvan.
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-primary-dark">
                        <li>Recompensas atractivas.</li>
                        <li>Convierte clientes en fans.</li>
                        <li>Seguimiento en tiempo real.</li>
                        <li>Fácil de integrar y gestionar.</li>
                    </ul>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="px-6 rounded-default">
                    <h3 className="text-3xl font-bold mb-3 text-primary-dark">Ride Service</h3>
                    <p className="text-primary-gray mb-4">
                        Organiza las entregas de forma rápida, eficiente y sin depender de terceros. Más control, menos complicaciones.
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-primary-dark">
                        <li>Pedidos en tiempo real.</li>
                        <li>Control total del reparto.</li>
                        <li>Ruta optimizada.</li>
                        <li>Diseñado para tu negocio.</li>
                    </ul>
                </div>
            </SwiperSlide>
        </Swiper>
    </section>
  );
}

export default Services;
