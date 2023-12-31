import React from "react";

const Footer = () => {
  return (
    <footer className="px-4 mb-10 text-center text-gray-300">
      <small className="block mb-2 text-xs">
        &copy; 2023 Jephthah Mbah. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">I built this website:</span> with React
        & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS,
        Framer Motion, React Email & Resend, Vercel hosting.
      </p>
    </footer>
  );
};

export default Footer;
