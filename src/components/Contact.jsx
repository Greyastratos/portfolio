import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";


const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_xbgvqcn',
        'template_yr4vikt',
        {
          from_name: form.name,
          to_name: "Martin ",
          from_email: form.email,
          to_email: "marticarrizo@gmail.com",
          message: form.message,
        },
        'r0Rnm5qzIL-SGgBj_',
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };
  return (
    <div className={` flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`} >
      <motion.div 
              variants={slideIn("left", "tween", 0.2, 1)}
              className='flex-[1] violet-blue-gradient p-8 rounded-3xl'
      >
        <h3 className={styles.sectionHeadText} >Contacto</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col gap-8"        
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4" >Tu nombre</span>
            <input
             type='text'
             name='name'
             value={form.name}
             onChange={handleChange}
             placeholder="¿Cual es tu nombre?"
             className="bg-tertiary py-4 px-6 
             placeholder:text-secondary
             text-white rounded-lg outlined-none
             border-none font-medium"
             />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4" >Tu email</span>
            <input
             type='email'
             name='email'
             value={form.email}
             onChange={handleChange}
             placeholder="¿Cual es tu email?"
             className="bg-tertiary py-4 px-6 
             placeholder:text-secondary
             text-white rounded-lg outlined-none
             border-none font-medium"
             />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-5" >Tu mensaje</span>
            <textarea
             rows="7"
             name='message'
             value={form.message}
             onChange={handleChange}
             placeholder="¿Como podria ayudarte?"
             className="bg-tertiary py-4 px-6 
             placeholder:text-secondary
             text-white rounded-lg outlined-none
             border-none font-medium"
             />
          </label>
          <button
          type="submit"
          className="bg-tertiary py-3 px-8 outline-none w-fit
          text-white font-bold shadow-md
          "
          >
          {loading ? "Sending..." : "Send"}
          </button>
        </form>
    </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact")

