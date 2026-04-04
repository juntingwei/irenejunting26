import './styles.css';
import Hero from "./components/Hero.tsx";
import Music from "./components/Music.tsx";
import '@fontsource/ephesis';
import '@fontsource/playfair-display/400.css';
import FloatingNav from './components/FloatingNav.tsx';
import Photos from './components/Photos.tsx';
import {Background, Parallax} from "react-parallax";
import backgroundImage from "./assets/background.jpg";

function App() {
    return (
        <>
            <Hero/>
            <FloatingNav/>
            <Photos/>
            
            {/* Parallax Divider */}
            <Parallax strength={400} className='bg-olive-400 text-white h-[30lvh] flex flex-col justify-center items-center text-center'>
                <Background className='h-lvh w-lvw sepia-30 saturate-40 contrast-50 animate-zoom-in'>
                    <img src={backgroundImage} alt='' className='object-cover w-lvw h-lvh pointer-events-none'/>
                </Background>
                <div className="">
                </div>
            </Parallax>
                
            <Music/>
            </>
    )
}

export default App
