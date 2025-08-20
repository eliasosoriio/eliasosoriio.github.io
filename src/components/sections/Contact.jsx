import React from 'react'
import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/solid';

function Contact() {
    const phoneNumber = '+34625646270';
    const emailAddress = 'eliasosorio.r11@gmail..com';

    return (
        <section className="flex flex-col gap-5 items-start rounded-default md:flex-row-reverse" id='contact'>
            <h2 className="text-3xl font-bold">Contacto</h2>

            <div className='flex flex-col-reverse gap-5 md:flex-row'>
                <img src="https://r11.es/assets/contact.png" alt="Imagen decorativa de contacto" className='rounded-default md:max-w-72' />

                <div className='flex flex-col gap-5'>
                
                    <p>¿Tienes alguna duda o quieres trabajar conmigo?</p>

                    <p> Ponerse en marcha es muy fácil: primero hablamos contigo para entender tu negocio y lo que necesitas. Después, te presentamos la solución que mejor se adapta a tu marca. Finalmente, ponemos todo en marcha y te acompañamos en cada paso del camino.</p>

                    <div className="flex flex-col sm:flex-row gap-4 w-full">
                        <a
                            href={`tel:${phoneNumber}`}
                            className="w-full sm:w-full md:w-auto flex items-center justify-center gap-2 bg-primary-gray hover:bg-primary-dark text-white font-semibold py-3 px-6 rounded-default transition-colors"
                        >
                            <PhoneIcon className="w-5 h-5" />
                            Llamar
                        </a>

                        <a
                            href={`mailto:${emailAddress}`}
                            className="w-full sm:w-full md:w-auto flex items-center justify-center gap-2 bg-primary-dark hover:bg-primary-gray text-white font-semibold py-3 px-6 rounded-default transition-colors"
                        >
                            <EnvelopeIcon className="w-5 h-5" />
                            Email
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
