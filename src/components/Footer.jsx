import { FaGithub, FaFacebook, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const socialLinks = [
  { href: "https://github.com/MostafaMahmoud79", icon: <FaGithub /> },
  { href: "https://www.facebook.com/profile.php?id=100009375766104", icon: <FaFacebook /> },
  { href: "https://www.linkedin.com/in/mostafa-mahmoud-aa8547207/", icon: <FaLinkedin /> },
  { href: "https://wa.me/+201225161426", icon: <FaWhatsapp /> },
];

const Footer = () => {
  return (
    <footer className="w-screen bg-[#5542ff] py-4 text-black">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-center text-sm font-light md:text-left">
          ©Mostafa 2024. All rights reserved
        </p>

        <div className="flex justify-center gap-4 md:justify-start">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black transition-colors duration-500 ease-in-out hover:text-white"
            >
              {link.icon}
            </a>
          ))}
        </div>

        <a
          href="#privacy-policy"
          className="text-center text-sm font-light hover:underline md:text-right"
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;