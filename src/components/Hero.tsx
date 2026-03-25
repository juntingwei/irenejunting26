import {Background, Parallax} from "react-parallax";
import backgroundImage from "../assets/background.jpg";

function Hero() {
    return (
        <Parallax strength={400} className='bg-olive-400 text-white h-dvh flex flex-col justify-center items-center text-center
        '>
            <Background className='h-dvh w-dvw sepia-30 saturate-40 contrast-50 animate-zoom-in'>
                <img src={backgroundImage} alt='' className='object-cover w-dvw h-dvh pointer-events-none'/>
            </Background>
            <div className="animate-slide-fade-in">
                <h1 className='text-9xl uppercase'>Irene <br/><span className='font-cursive lowercase leading-[0.4] block'>and</span> Junting</h1>
                <p className='uppercase text-3xl'>are getting married!</p>
            </div>
        </Parallax>
    )
}

export default Hero
