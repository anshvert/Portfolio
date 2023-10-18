import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import { useState } from 'react';

export const Menu = (props) => {
    const { onSectionChange, menuOpened, setMenuOpened, section } = props;
  
    return (
      <>
        <button
          onClick={() => setMenuOpened(!menuOpened)}
          className="z-20 fixed top-12 right-12 p-3 bg-indigo-600 w-11 h-11 rounded-md"
        >
          <div
            className={`bg-white h-0.5 rounded-md w-full transition-all ${
              menuOpened ? "rotate-45  translate-y-0.5" : ""
            }`}
          />
          <div
            className={`bg-white h-0.5 rounded-md w-full my-1 ${
              menuOpened ? "hidden" : ""
            }`}
          />
          <div
            className={`bg-white h-0.5 rounded-md w-full transition-all ${
              menuOpened ? "-rotate-45" : ""
            }`}
          />
        </button>
        <div
          className={`z-10 fixed top-0 right-0 bottom-0 bg-white transition-all overflow-hidden flex flex-col
        ${menuOpened ? "w-full md:w-80" : "w-0"}`}
        >
          <div className="flex-1 flex items-center justify-center flex-col gap-6 p-8">
            <MenuButton label="About" onClick={() => onSectionChange(0)} section={section}/>
            <MenuButton label="Skills" onClick={() => onSectionChange(1)} section={section}/>
            <MenuButton label="Projects" onClick={() => onSectionChange(2)} section={section} />
            <MenuButton label="Contact" onClick={() => onSectionChange(3)}  section={section}/>
          </div>
          <SocialIcons/>
        </div>
      </>
    );
  };
  
  const MenuButton = (props) => {
    const { label, onClick, section } = props;
    return (
      <button
        onClick={onClick}
        className={`text-2xl font-bold cursor-pointer hover:text-indigo-600 transition-colors ${label == sectionLabelMap[section] ? "text-3xl text-green-500": "text-2xl"}`}
      >
        {label}
      </button>
    );
  };
  
  const SocialIcons = () => {
    return (
      <div className="flex justify-evenly mb-10 opacity-50">
        <a href="https://www.linkedin.com/in/ansh00000000/" target='_blank'>
          <LinkedInIcon sx={{ "&:hover": { color: "blue", opacity: 100 }}} fontSize='large'/>
        </a>
        <a href="https://github.com/anshvert/Portfolio" target='_blank'>
          <GitHubIcon sx={{ "&:hover": { color: "black", opacity: 100 }}} fontSize='large' />
        </a>
        <a href="https://twitter.com/an_shvert" target='_blank'>
          <TwitterIcon sx={{ "&:hover": { color: "blue", opacity: 100 }}} fontSize='large' />
        </a>
        <a href="mailto:your-email@example.com">
          <EmailIcon sx={{ "&:hover": { color: "red", opacity: 100 }}} fontSize='large' />
        </a>
      </div>
    );
  };

  const sectionLabelMap = {
    0: "About",
    1: "Skills",
    2: "Projects",
    3: "Contact"
  }