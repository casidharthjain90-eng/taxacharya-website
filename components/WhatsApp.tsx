"use client";

export default function WhatsApp() {
  return (
    <a
      href="https://wa.me/917488211785"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition hover:scale-110 hover:bg-green-600"
      aria-label="Chat on WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        fill="currentColor"
        className="h-8 w-8"
      >
        <path d="M16.04 3C8.84 3 3 8.75 3 15.84c0 2.53.75 4.99 2.16 7.1L3 29l6.3-2.06a13.2 13.2 0 0 0 6.74 1.84h.01c7.2 0 13.05-5.75 13.05-12.84C29.1 8.75 23.24 3 16.04 3zm7.58 18.14c-.32.89-1.86 1.69-2.57 1.8-.66.1-1.5.14-2.42-.16-.56-.18-1.28-.42-2.21-.82-3.89-1.68-6.42-5.59-6.62-5.85-.2-.26-1.58-2.08-1.58-3.97 0-1.89.99-2.82 1.34-3.21.35-.39.76-.49 1.02-.49.26 0 .51 0 .73.01.24.01.56-.09.88.67.32.76 1.08 2.63 1.18 2.82.1.19.16.42.03.68-.13.26-.19.42-.38.65-.19.23-.4.51-.57.68-.19.19-.39.39-.17.76.22.37.97 1.6 2.09 2.59 1.44 1.28 2.66 1.68 3.03 1.87.37.19.58.16.8-.1.22-.26.93-1.08 1.18-1.45.26-.37.51-.31.86-.19.35.13 2.22 1.04 2.6 1.23.39.19.64.29.73.45.1.16.1.94-.22 1.83z" />
      </svg>
    </a>
  );
}