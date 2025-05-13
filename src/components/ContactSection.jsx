import { useState } from "react";
import toast from "react-hot-toast";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

export default function ContactSection({ contactRef }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [myEmail, setMyEmail] = useState("coryfishburnjr@gmail.com");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      toast.error("Please fill out all fields.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    const mailtoLink = `mailto:${myEmail}?subject=Inquiry from ${encodeURIComponent(
      name
    )} @ cfishburn.dev&body=${encodeURIComponent(
      message
    )}%0A%0ABest Regards,%0A${encodeURIComponent(name)}`;

    window.location.href = mailtoLink;
    toast.success("Opening email client...");
  };

  const getLabelClasses = (value) =>
    `absolute left-3 ${
      value ? "-top-3 text-sm text-teal-600" : "top-3 text-base text-gray-400"
    } transition-all bg-white dark:bg-darkNavSecondary px-1`;
  return (
    <div
      ref={contactRef}
      className="w-full h-screen flex items-center justify-center text-center overflow-x-hidden px-4"
    >
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Form */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            <div className="relative">
              <input
                type="text"
                id="name"
                className="peer p-3 border rounded-md w-full dark:bg-darkNavSecondary dark:border-border focus:outline-none focus:ring-2 focus:ring-blue-600"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <label htmlFor="name" className={getLabelClasses(name)}>
                Your Name
              </label>
            </div>

            <div className="relative">
              <input
                type="email"
                id="email"
                className="peer p-3 border rounded-md w-full dark:bg-darkNavSecondary dark:border-border focus:outline-none focus:ring-2 focus:ring-blue-600"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="email" className={getLabelClasses(email)}>
                Your Email
              </label>
            </div>

            <div className="relative">
              <textarea
                id="message"
                rows="5"
                className="peer p-3 border rounded-md w-full dark:bg-darkNavSecondary dark:border-border focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <label htmlFor="message" className={getLabelClasses(message)}>
                Your Message
              </label>
            </div>

            <button
              type="submit"
              className="p-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Socials & Thank You Section */}
        <div className="flex flex-col items-center justify-center text-left">
          <h2 className="text-3xl font-bold mb-4">Thanks for Visiting!</h2>
          <p className="mb-6">
            You can also reach out to me on my socials below. Feel free to
            connect, follow, or send a DM!
          </p>
          <div className="flex gap-6 text-3xl">
            <a
              href="https://github.com/coryfishi"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/CoryFishburn"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:coryfishburnjr@gmail.com"
              className="hover:text-blue-600"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
