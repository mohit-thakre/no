import React from "react";
import Link from "next/link";

const Contact = () => {
  return (
    <div className="w-full">
      <div className="py-8 w-full max-w-3xl">
        <div className="font-sans mx-auto w-fit bg-white text-black/90 text-sm rounded-md px-4 font-semibold">
          Connect 🤝
        </div>
        <h1 className="font-bold text-5xl text-center py-3">Say Hello 👋</h1>
        <div className="mx-auto md:text-xl/relaxed lg:text-base/relaxed text-pretty font-sans text-sm text-white/60 text-justify">
          <p>
            I’m excited to connect with passionate individuals and explore
            meaningful opportunities! Feel free to reach out through{" "}
            <a
              href="https://x.com/your-twitter-handle"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-white underline hover:text-gray-300"
            >
              Twitter
            </a>
            , connect with me professionally on{" "}
            <a
              href="https://www.linkedin.com/in/your-linkedin-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-white underline hover:text-gray-300"
            >
              LinkedIn
            </a>
            , or simply drop me an email at{" "}
            <a
              href="mailto:your-email@example.com"
              className="font-bold text-white underline hover:text-gray-300"
            >
              mohitthakre1211@gmail.com
            </a>
            . Let’s collaborate, share ideas, and make an impact together!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
