import React from 'react'
import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/solid';

function Contact() {
    const phoneNumber = '+34625646270';
    const emailAddress = 'eliasosorio.r11@gmail..com';

    return (
        <section className="flex flex-col gap-5 items-start rounded-2xl" id='contact'>
            <h2 className="text-3xl font-bold">Contacto</h2>
            <p>
                ¿Tienes alguna duda o quieres trabajar conmigo?
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full">
                <a
                    href={`tel:${phoneNumber}`}
                    className="w-full sm:w-full md:w-auto flex items-center justify-center gap-2 bg-primary-gray hover:bg-primary-dark text-white font-semibold py-3 px-6 rounded-2xl transition-colors"
                >
                    <PhoneIcon className="w-5 h-5" />
                    Llamar
                </a>

                <a
                    href={`mailto:${emailAddress}`}
                    className="w-full sm:w-full md:w-auto flex items-center justify-center gap-2 bg-primary-dark hover:bg-primary-gray text-white font-semibold py-3 px-6 rounded-2xl transition-colors"
                >
                    <EnvelopeIcon className="w-5 h-5" />
                    Email
                </a>
            </div>

            <img src="https://r11.es/assets/contact.png" alt="Imagen decorativa de contacto" className='rounded-3xl md:max-w-72' />
        </section>
    )
}

export default Contact
