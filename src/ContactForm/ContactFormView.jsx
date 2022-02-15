import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import style from "./style.module.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("xknyobgw");

  if (state.succeeded) {
    toast(" Thanks for your message, I'll reply as soon as possible! 🤓", {
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

  const today = new Date();
  const month =
    today.getMonth() + 1 > 9
      ? today.getMonth() + 1
      : `0${today.getMonth() + 1}`;
  const date = today.getDate() + "-" + month + "-" + today.getFullYear();

  return (
    <>
      <div className={style.formPage}>
        <div className={style.title}>Let's work together !</div>
        {state.succeeded && (
          <div className={style.form}>
            <div className={style.dialog_container}>
              <div className={style.dialog_box}>
                <div className={style.background_blur}></div>
                <div className={style.header}>
                  <div className={style.background_blur}></div>
                  <div className={style.contents}>
                    <div className={style.left}>
                      <i className={style.comment}></i> 💬 Notification
                    </div>
                    <div className={style.right}>{date}</div>
                  </div>
                </div>
                <div className={style.main_content}>
                  <strong>Clement CH 🤓</strong>
                  <br />
                  Hi there ! <br />I received your mail. If we ever get to meet,
                  coffee's on me ☕️
                </div>
              </div>
            </div>
          </div>
        )}
        {!state.succeeded && (
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
            <ValidationError
              prefix="Field"
              field="email"
              errors={state.errors}
              style={{ color: "white", marginBottom: "20px" }}
            />
            <div>
              <textarea
                id="message"
                name="message"
                className={style.formTextContent}
                style={{ resize: "none" }}
              />
            </div>
            <div className={style.formSubmit}>
              <button
                type="submit"
                disabled={state.submitting}
                className={style.formSubmitButton}
              >
                Send
              </button>
            </div>
          </form>
        )}
        <ToastContainer />
      </div>
    </>
  );
};

export default ContactForm;
