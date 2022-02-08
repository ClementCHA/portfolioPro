import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import style from "./style.module.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("xknyobgw");

  if (state.succeeded) {
    toast(" Thanks for your message, I'll replay as soon as possible!", {
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      toastId: "customId",
      theme: "dark",
      position: "top-right",
    });
  }

  return (
    <div className={style.formPage}>
      <div className={style.title}>Let's work together !</div>
      <form onSubmit={handleSubmit} className={style.form}>
        <div className={style.form__group}>
          <input
            type="input"
            className={style.form__field}
            placeholder="Email"
            name="Email"
            id="Email"
          />
          <label htmlFor="email" className={style.form__label}>
            Email
          </label>
        </div>
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <div>
          <textarea
            id="message"
            name="message"
            className={style.formTextContent}
            style={{ resize: "none" }}
          />
        </div>
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <div className={style.formSubmit}>
          <button
            type="submit"
            disabled={state.submitting}
            className={style.formSubmitButton}
          >
            Send
          </button>
        </div>
        <div>
          <ToastContainer />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
