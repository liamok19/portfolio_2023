import React, { useRef } from "react";
import "../style/Contact.css";
import NavBar from "./NavBar";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  function submitForm() {
    document.getElementById("nameSubmit").value = "";
    document.getElementById("emailSubmit").value = "";
    document.getElementById("messageSubmit").value = "";
  }

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
          submitForm();
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
        <label tabIndex={0}>Name</label>
        <input id="nameSubmit" type="text" name="user_name" />
        <label tabIndex={0}>Email</label>
        <input id="emailSubmit" type="email" name="user_email" />
        <label tabIndex={0}>Message</label>
        <textarea id="messageSubmit" name="message" />
        <input className="inputSubmit" type="submit" value="Send" />
      </form>
    </>
  );
}
