"use client";
import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons";

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
    <section id="contact" className=" w-full min-h-screen  bg-none overflow-hidden">

      <div className="flex flex-col items-center justify-center  ">

        <div className="flex flex-col items-center justify-center w-200 h-180 bg-lime-200 dark:bg-lime-900 border-2 border-black shadow-[4px_4px_0_black]  dark:shadow-[4px_4px_0_white] rounded-[10px] mt-10">
          <h2 className="text-3xl text-bold text-center text-gray-900 dark:text-amber-50 pb-10 ">Fique a vontade para me mandar um mensagem!</h2>
          <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4  w-full max-w-md sm:max-w-lg text-[#051116]">
            <input
              type="text"
              name="user_name"
              placeholder="Seu nome"
              required
              className="p-2 rounded bg-neutral-50 border border-gray-600 shadow-[4px_4px_0_black]"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Seu e-mail"
              required
              className="p-2 rounded bg-neutral-50 border border-gray-600 shadow-[4px_4px_0_black]"
            />
            <textarea
              name="message"
              placeholder="Sua mensagem"
              rows="5"
              required
              className="p-2 rounded bg-neutral-50 border border-gray-600 shadow-[4px_4px_0_black]"
            />
            <button
              type="submit"
              className="bg-[#87CE83] hover:bg-[#67B063] border rounded p-2 text-[#051116] font-semibold shadow-[4px_4px_0_black]"
            >
              Enviar
            </button>
            {success && (
              <p className="text-green-400 text-sm mt-2  ">Mensagem enviada com sucesso!</p>
            )}
          </form>
          <div className="flex flex-col mt-10 justify-start items-start">
            <h2 className="text-2xl text-bold">Minhas redes </h2>
            <div className="flex items-center space-x-2">
              <FontAwesomeIcon icon={faLinkedin} size="5x" style={{ color: "#637fb0", }} />
              <a
                href="https://www.linkedin.com/in/beatriz-nascimento-2142751b6/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-blue-600 dark:text-amber-50"
              >
                linkedin
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <FontAwesomeIcon icon={faGithubAlt} size="5x" style={{ color: "#637fb0", }} />
              <a
                href="https://github.com/BEATRIZBUAVA"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-blue-600 dark:text-amber-50"
              >
                github
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
