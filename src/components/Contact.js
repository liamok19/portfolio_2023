import React, { useRef } from "react";
import "../style/Contact.css";
import NavBar from "./NavBar";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_okzh98r",
        "template_r0q94mh",
        form.current,
        "deLSH2AXBRidmQvkU"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <NavBar />
      <form className="formContainer" ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input className="inputSubmit" type="submit" value="Send" />
      </form>
    </>
  );
}
