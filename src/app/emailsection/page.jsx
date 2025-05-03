"use client";
import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import NavBar from "../components/NavBar";

function ContactSection() {
  const form = useRef();
  const [success, setSuccess] = useState(false);

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3asuwrn",       
        "template_c1gor0n",      
        form.current,           
        "d389WB5oaQKMQmrRF"       
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);  
        },
        (error) => {
          console.log(error.text);
          setSuccess(false); 
        }
      );
  }

  return (
    <section id="contact" className=" w-full min-h-screen  bg-[#134611]"
    >
      <NavBar />
      <div className="flex flex-col items-center justify-center  ">
   
      <div className="flex flex-col items-center justify-center w-150 h-150 bg-[#FAFAEF]  rounded-[10px] mt-20">
         <h2 className="text-3xl text-bold text-center text-[#051116] pb-10 ">Contato</h2>
         <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4  w-full max-w-md sm:max-w-lg text-[#051116]">
        <input
          type="text"
          name="user_name"
          placeholder="Seu nome"
          required
          className="p-2 rounded bg-[#FCF6E4] border border-gray-600"
        />
        <input
          type="email"
          name="user_email"
          placeholder="Seu e-mail"
          required
          className="p-2 rounded bg-[#FCF6E4] border border-gray-600"
        />
        <textarea
          name="message"
          placeholder="Sua mensagem"
          rows="5"
          required
          className="p-2 rounded bg-[#FCF6E4] border border-gray-600"
        />
        <button
          type="submit"
          className="bg-[#87CE83] hover:bg-[#67B063] border-1 rounded p-2 text-[#051116] font-semibold shadow-[0px_0.5px_0.5px_rgba(16,86,82,0.75),0px_1px_0.5px_rgba(16,86,82,0.75)]"
        >
          Enviar
        </button>
        {success && (
          <p className="text-green-400 text-sm mt-2  ">Mensagem enviada com sucesso!</p>
        )}
      </form>
      </div>
      </div>
    </section>
  );
}

export default ContactSection;
