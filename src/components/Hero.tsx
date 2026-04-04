import {Background, Parallax} from "react-parallax";
import redbarnImage from "../assets/redbarn.jpg";

function Hero() {
    return (
        <Parallax strength={400} className='bg-olive-400 text-white h-screen flex flex-col justify-center items-center text-center
        '>
            <Background className='h-lvh w-screen saturate-70 contrast-60 animate-zoom-in'>
                <img src={redbarnImage} alt='' className='object-cover w-full h-full pointer-events-none'/>
            </Background>
            <div className="animate-slide-fade-in flex flex-col items-center">
                <h1 className='text-7xl font-thin uppercase mb-2'>
                    Irene 
                    <br/>
                    <span className='font-cursive lowercase leading-[0.4] block'>and</span>
                    Junting
                </h1>
                <button 
                    className="font-cursive text- border rounded-4xl py-2 px-6 w-fit hover:bg-white hover:text-olive-700 transition-colors cursor-pointer"
                    onClick={() => {
                        window.scrollTo({
                            top: window.innerHeight,
                            behavior: 'smooth'
                        });
                    }}
                >
                    view our memories
                </button>
            </div>
        </Parallax>
    )
}

export default Hero