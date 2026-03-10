import { useState } from "react";
import { motion } from "framer-motion";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";

// Yup schema
const ContactSchema = Yup.object().shape({
  name: Yup.string().min(2, "Too short").max(50, "Too long").required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  message: Yup.string().min(5, "Too short").required("Required"),
});

export default function ContactForm({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const sID = import.meta.env.VITE_serviceId;
  const tID = import.meta.env.VITE_templateId;
  const pKey = import.meta.env.VITE_publicKey;

  const handleSubmit = async (values, { resetForm }) => {
    try {
      const serviceId = sID;
      const templateId = tID;
      const publicKey = pKey;

      await emailjs.send(serviceId, templateId, values, publicKey);
      setSubmitted(true);
      resetForm();
      setError("");
    } catch (err) {
      console.error(err);
      setError("Something went wrong, please try again.");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 50 }}
      transition={{ duration: 0.3 }}
      className={`fixed inset-0 z-50 flex items-center justify-center ${
        isOpen ? "pointer-events-auto" : "pointer-events-none"
      }`}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Form Card */}
      <motion.div
        className="relative z-10 w-full max-w-md p-8 bg-stone-900/70 backdrop-blur-md rounded-3xl shadow-2xl border border-neutral-700 text-white"
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <h3 className="text-2xl font-semibold text-white text-center mb-4">
          Contact Me
        </h3>

        {submitted && (
          <p className="text-green-400 text-center mb-4">
            Thanks! Your message was sent.
          </p>
        )}

        {error && (
          <p className="text-red-400 text-center mb-4">{error}</p>
        )}

        <Formik
          initialValues={{ name: "", email: "", message: "" }}
          validationSchema={ContactSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="flex flex-col gap-4">
              <div>
                <Field
                  name="name"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-xl bg-neutral-800/50 border border-neutral-600 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-400 text-sm mt-1"
                />
              </div>

              <div>
                <Field
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-xl bg-neutral-800/50 border border-neutral-600 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-400 text-sm mt-1"
                />
              </div>

              <div>
                <Field
                  as="textarea"
                  name="message"
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-neutral-800/50 border border-neutral-600 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-red-500 transition resize-none"
                />
                <ErrorMessage
                  name="message"
                  component="div"
                  className="text-red-400 text-sm mt-1"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-2 w-full py-3 bg-red-700/25 hover:bg-red-600/40 rounded-xl font-bold transition"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </Form>
          )}
        </Formik>

        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 text-neutral-400 hover:text-red-400 transition"
        >
          ✕
        </button>
      </motion.div>
    </motion.div>
  );
}