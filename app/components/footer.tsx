import React from 'react'

function Footer() {
  return (
    <footer className="mb-10 mt-14 px-4 text-center text-gray-500 ">
      <small className="mb-2 block text-xs text-[14px]">
        &copy; 2025 alaa hajhouj. All rights reserved.
      </small>
      <p className="text-xs text-[14px]">
        <span className="font-semibold">About this website:</span> built with
        React & Next.js (App Router), TypeScript, Tailwind CSS,
        Framer Motion,Email Js, Vercel hosting.
      </p>
    </footer>
  );
}

export default Footer