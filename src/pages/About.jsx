import React, {useState} from 'react'
import { Container } from "react-bootstrap";

const About = () => {

    const [StartPictureAleph, SetStartPictureAleph] = useState('AvatarTrueAleph.png');
    const [StartPictureHerni, SetStartPictureHerni] = useState('AvatarTrueJessHolograms.png');

    return (
        <Container className='mt-4 text-white'>
            <h1 className='text-center mb-3'>ABOUT</h1>

            <article className='my-3 w-100'>
                    <p className='col-md-12 col-sm-7 h5 text-justify'>
                        8BIts To Go nació del amor por los videojuegos retro, la libertad del software libre y
                        la necesidad urgente de revivir los clásicos sin dolores de cabeza. Ofrecemos pendrives listos
                        para jugar, cargados con títulos legendarios, configurados para funcionar en sistemas Linux,
                        Windows o lo que sea que corra en tu máquina del tiempo digital. Cada pendrive es armado
                        manualmente, testeado a conciencia y preparado con amor geek para que la experiencia sea tan
                        fluida como lanzar un Hadouken en la vieja arcade. Buscamos reconectar a las personas con esa
                        chispa que solo los fichines sabían provocar, sin emuladores complicados, sin tutoriales eternos.
                        Solo enchufar y jugar. Nuestro objetivo es simple: compartir la nostalgia, hacerla portátil y
                        demostrar que los clásicos nunca mueren, solo se actualizan a USB.
                    </p>
            </article>

            <article className='my-3 w-100'>
                <div className='row bg-dark py-4 rounded-4 opacity-75'>
                    <span className='col-md-2 col-sm-5 pt-4'>
                        <img
                            className='aboutPictures opacity-100 ms-4'
                            src= {StartPictureAleph}
                            alt="logo-primigenia"
                            onMouseEnter={() => SetStartPictureAleph('AvatarFalseAleph.png')}
                            onMouseLeave={() => SetStartPictureAleph('AvatarTrueAleph.png')}
                        />
                    </span>
                        <p className='col-md-8 col-sm-7 h5 text-justify opacity-100'>
                            Aleph es un gamer de alma, desarrollador de oficio y fanático empedernido de Linux, el sistema
                            operativo que eligió no solo por filosofía, sino porque le da superpoderes. Combina sus pasiones
                            en un proyecto que junta lo mejor de dos mundos: la nostalgia de los videojuegos retro y la comodidad
                            del hardware actual. En su web ofrece pendrives mágicos cargados con joyas del pasado, listos para
                            enchufar y jugar, sin instalaciones raras ni configuraciones eternas. Cada unidad es curada a mano,
                            probada en entornos Linux y pensada para revivir esos momentos gloriosos de fichines, controles
                            duros y música MIDI. Aleph desarrolla, diseña y debuguea con la misma energía con la que esquivaba
                            balas en Metal Slug. Su objetivo es simple: que más gente descubra (o reviva) la belleza de lo
                            retro con solo un click.
                        </p>
                    </div>
            </article>

            <article className='my-4 w-100'>
                <div className='row bg-dark py-4 rounded-4 opacity-75'>
                    <span className='col-md-2 col-sm-5 text-justify pt-5'>
                        <img
                            className='aboutPictures opacity-100 ms-4'
                            src= {StartPictureHerni}
                            alt="logo-primigenia"
                            onMouseEnter={() => SetStartPictureHerni('AvatarFalseJessHolograms.png')}
                            onMouseLeave={() => SetStartPictureHerni('AvatarTrueJessHolograms.png')}
                        />
                    </span>
                    <p className='col-md-8 col-sm-7 h5 opacity-100'>
                        Jess Holograms es una gamer nostálgica, desarrolladora autodidacta y amante declarada de Linux,
                        el sistema que considera no solo una herramienta, sino una forma de vida. Su pasión por los
                        videojuegos clásicos la llevó a crear una propuesta única: pendrives listos para conectar y jugar,
                        cargados con una selección curada de títulos retro que marcaron generaciones. Cada unidad es armada
                        con precisión quirúrgica, probada en entornos Linux y diseñada para ofrecer una experiencia sin
                        fricciones, como en los viejos tiempos. Jess combina estética vaporwave, código limpio y una obsesión
                        saludable por los detalles para dar vida a un proyecto que rinde homenaje a las consolas de tubo
                        y los cartuchos de leyenda. Su misión es clara: revivir la magia del pasado con estilo moderno,
                        acercando a nuevas generaciones a los píxeles que lo empezaron todo.
                    </p>
                </div>
                </article>
        </Container>
    )
}


export default About


// PENDIENTES
    // Completar con datos no fake