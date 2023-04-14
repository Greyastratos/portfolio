
import { styles } from "../styles";
import ComputersCanvas from "./canvas/Computers";

const Hero = () => {
  return (
    <section className="relative  w-full h-screen mx-auto"> 
    <div className={`${styles.paddingX} absolute inset-0 top-[140px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
      <div className="flex flex-col justify-center items-center mt-5">
        <div className="w-9 h-9 animate-bounce rounded-full bg-[#2c6f9a]" >
        </div>
      </div>
      <div>
        <h1 className={`${styles.heroHeadText} text-[#2c6f9a]`}
        >Hola, soy <span className="text-[#2c6f9a] rotate-45  "> Martín</span></h1>
        <p className={`${styles.heroSubText} mt-2 text-black-100`}> 
        Me especializo en <span className="text-[#9a2c70]">Desarrollo WEB</span>,  tanto <span className="text-[#2c6f9a]">Front-end</span> como <span className="text-[#2c6f9a]" > Back-end</span>
        </p>
      </div>
    </div>
    <ComputersCanvas/>
    </section>
  )
}

export default Hero