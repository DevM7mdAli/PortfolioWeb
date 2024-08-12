import { useForm, ValidationError } from "@formspree/react"
import { motion } from "framer-motion";


export default function ContactForm() {
  const [state, handleSubmit] = useForm('mnnavlzy')

  if (state.succeeded) {
    return <motion.p className="text-lg sm:text-4xl font-bold text-center"
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.1, type: "spring", stiffness: 80 }}
    >Your email has been received</motion.p>;
  }

  return (
    <motion.div
      id="contact"
      className="flex flex-col items-center gap-y-8"
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.1, type: "spring", stiffness: 80 }}
    >

      <h2 className="text-5xl font-bold">Contact me</h2>
      <form onSubmit={handleSubmit} className="flex flex-col justify-center gap-8">
        <div>
          <label htmlFor="email" className="text-xl">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className="text-black w-full rounded-sm text-lg"
          />
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
            className="text-red-500"
          />
        </div>

        <div>
          <label htmlFor="message" className="text-xl">
            Your message
          </label>
          <textarea
            id="message"
            name="message"
            className="text-black w-full rounded-sm text-lg"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
            className="text-red-600"
          />
        </div>

        <button type="submit" disabled={state.submitting} className="flex items-center justify-center rounded-lg bg-btnBgColor px-2 py-1 text-xl font-bold">
          Submit
        </button>
      </form>
    </motion.div>
  )
}