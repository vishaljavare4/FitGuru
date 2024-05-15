import bg from '../assets/hero_bg_img3.jpg'
import bg2 from '../assets/gymbg-1.avif'
import Exercise from './HomeExercise'
import Header from "./Header"

const Hero = () => {
    return (
        <div>
            {/* <Header /> */}
            <div className="relative w-full h-[500px] overflow-hidden">
                <img src={bg} className='h-[700px] w-[100%] bg-center' />
                <div className="absolute bg-[rgba(0,0,0,0.5)] top-0 left-0 w-full h-[100%] flex gap-8 justify-center items-center flex-col">
                
                    <h1 className="w-[391px] text-4xl font-extrabold leading-normal text-white tracking-wider -mt-[50px] ">FASTER, STRONGER <span className='text-red-500'>FIGHT</span> TO THE END</h1>
                    <button className='text-white text-shadow-lg font-bold shadow-md bg-red-500 px-6 py-2 rounded-3xl'>Get All Excersis</button>    

                </div>
            </div>
            <Exercise />
        </div>
    )
}

export default Hero