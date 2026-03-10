import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";
import MagicButton from "./ui/MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10 relative overflow-hidden" id="contact">
      {/* Background grid — contained, no bleed below */}
      <div className="w-full absolute left-0 bottom-0 h-full pointer-events-none">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      <div className="flex flex-col items-center relative z-10">
        <h1 className="heading lg:max-w-[45vw]">
          Got something to build?{" "}
          <span className="text-purple">Let&apos;s talk.</span>
        </h1>
        <p className="text-white/40 md:mt-10 my-5 text-center max-w-md text-sm leading-relaxed">
          Whether it&apos;s a project you want to ship, a role you think I&apos;d fit,
          or just a conversation — I&apos;m reachable.
        </p>

        {/* ⚠️ Replace with your actual email */}
        <a href="mailto:YOUR_EMAIL@gmail.com">
          <MagicButton
            title="Send me a message"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      <div className="flex mt-16 md:flex-row flex-col justify-between items-center gap-4 relative z-10">
        <p className="text-white/20 text-sm font-mono">
          © 2026 Ramesh · Built with Next.js &amp; Tailwind
        </p>

        <div className="flex items-center gap-3">
          {socialMedia.map((info) => (
            <a
              key={info.id}
              href={info.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-blur-lg bg-white/4 rounded-lg border border-white/8 hover:border-purple-500/30 hover:bg-purple-500/5 transition-all duration-200"
              title={info.label}
            >
              <img src={info.img} alt={info.label} width={18} height={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
