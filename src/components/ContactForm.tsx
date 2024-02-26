import { useState, ChangeEvent } from "react";
import emailjs from "emailjs-com";

interface ErrorType {
  [key: string]: string;
}

const ContactForm: React.FC = () => {
  const [isSending, setIsSending] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [errors, setErrors] = useState<ErrorType>({});

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { target } = event;
   
    if (!(target instanceof HTMLFormElement)) return;

    const formData = new FormData(target);
    const fieldErrors: ErrorType = {};

    if (!formData.get("user_name")) {
      fieldErrors["user_name"] = "Proszę wprowadzić swoje imię";
    } else if (formData.get("user_name")!.toString().length < 2) {
      fieldErrors["user_name"] = "Imię musi mieć co najmniej 2 znaki";
    }

    if (!formData.get("user_email")) {
      fieldErrors["user_email"] = "Proszę podać swój adres e-mail";
    } else if (
      !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(
        formData.get("user_email")!.toString()
      )
    ) {
      fieldErrors["user_email"] = "Proszę podać prawidłowy adres e-mail";
    }

    if (!formData.get("message")) {
      fieldErrors["message"] = "Proszę wprowadzić wiadomość";
    }

    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors);
      return;
    }

    setIsSending(true);
    setIsSuccess(false);
    setIsError(false);

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "",
        target,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID ?? ""
      );

      setIsSending(false);
      setIsSuccess(true);
      target.reset();
      setErrors({});
    } catch (error) {
      setIsSending(false);
      setIsError(true);
      console.log("FAILED...", error);
    }
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name } = event.target;
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
    setIsSuccess(false);
  };

  return (
    <div className="contact-form rounded-sm backdrop-blur-xl xl:backdrop-blur-none bg-white/50 xl:bg-transparent py-10 xl:py-0 px-5 md:px-10 xl:px-0 w-[95%] md:w-2/3 xl:w-full mx-auto xl:mx-0" id="contact">
      <form
        id="contact-form"
        className="max-w-md mx-auto 2xl:max-w-2xl"
        onSubmit={handleSubmit}
        noValidate
      >
        <div className="mb-4 2xl:mb-6">
          <label htmlFor="user_name" className="block text-lg 2xl:text-2xl mb-1">
            Imię
          </label>
          <input
            type="text"
            name="user_name"
            id="user_name"
            className={`w-full border border-gray-300 rounded-sm p-2 text-lg 2xl:text-2xl focus:outline-none ${
              errors["user_name"] ? "border-red-500" : ""
            }`}
            onChange={handleInputChange}
          />
          {errors["user_name"] && (
            <p className="text-red-500 text-md">{errors["user_name"]}</p>
          )}
        </div>
        <div className="mb-4 2xl:mb-6">
          <label htmlFor="user_email" className="block text-lg 2xl:text-2xl mb-1">
            Mail
          </label>
          <input
            type="email"
            name="user_email"
            id="user_email"
            className={`w-full border border-gray-300 rounded-sm p-2 text-lg 2xl:text-2xl focus:outline-none ${
              errors["user_email"] ? "border-red-500" : ""
            }`}
            onChange={handleInputChange}
          />
          {errors["user_email"] && (
            <p className="text-red-500 text-md">{errors["user_email"]}</p>
          )}
        </div>
        <div className="mb-4 2xl:mb-6">
          <label htmlFor="message" className="block text-lg 2xl:text-2xl mb-1">
            Wiadomość
          </label>
          <textarea
            name="message"
            id="message"
            rows={4}
            className={`w-full border border-gray-300 rounded-sm p-2 text-lg 2xl:text-2xl focus:outline-none ${
              errors["message"] ? "border-red-500" : ""
            }`}
            onChange={handleInputChange}
          ></textarea>
          {errors["message"] && (
            <p className="text-red-500 text-md">{errors["message"]}</p>
          )}
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="px-10 py-1 rounded-sm bg-stone-400 text-lg 2xl:text-2xl"
            disabled={isSending}
          >
            {isSending ? "Wysyłam..." : "Wyślij"}
          </button>
        </div>

        <div className="text-right mt-2 text-lg 2xl:text-2xl">
          {isSuccess && <p>E-mail wysłany pomyślnie!</p>}
          {isError && (
            <p>
              Nie udało się wysłać e-maila. Spróbuj ponownie lub skontaktuj się ze mną pod adresem{" "}
              <a href="mailto:kdfotogrametria@gmail.com" className="underline">
              kdfotogrametria@gmail.com
              </a>
              .
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
