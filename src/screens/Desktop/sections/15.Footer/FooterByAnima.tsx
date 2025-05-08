import React from "react";

export const FooterByAnima = (): JSX.Element => {
  const footerLinks = [
    { id: 1, text: "Terms" },
    { id: 2, text: "Privacy Policy" },
    { id: 3, text: "Contact" },
  ];

  return (
    <footer className="flex flex-col w-full items-start bg-[#050310] py-7 px-[72px]">
      <div className="flex w-full items-center justify-between">
        <div className="font-['Jost',Helvetica] font-semibold text-white text-[25px]">
          Logo
        </div>

        <nav className="flex items-center gap-[60px]">
          {footerLinks.map((link) => (
            <a
              key={link.id}
              href="#"
              className="font-['Jost',Helvetica] font-medium text-white text-base hover:underline"
            >
              {link.text}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
};
