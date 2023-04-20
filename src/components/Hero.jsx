
import { motion } from "framer-motion";
import { styles } from "../styles";
import ComputersCanvas from "./canvas/Computers";

const Hero = () => {
  return (
    <section className="relative  w-full h-screen mx-auto"> 
    <div className={`${styles.paddingX} absolute inset-0 top-[140px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
      <div>
        <h1 className={`${styles.heroHeadText}`}
        ><span className="text-[#2c6f9a]"> Hola, soy Martín</span></h1>
        <p className={`${styles.heroSubText} mt-2 text-black-100`}> 
        Me especializo en <span className="text-[#9a2c70]">Desarrollo WEB</span>,  tanto <span className="text-[#2c6f9a]">Front-end</span> como <span className="text-[#2c6f9a]" > Back-end</span>
        </p>
      </div>
    </div>
    <ComputersCanvas/>
    <div className='absolute opacity-70 bottom-10 xl:invisible w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
          <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-4 h-4 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero


