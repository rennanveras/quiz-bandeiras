const Footer = () => {
  return(
    <footer className="absolute bottom-0 left-0 bg-gray-700 w-screen py-2">
      <div className="flex justify-center gap-4 text-white">
        <a href="https://github.com/rennanveras" target="_blank" className="hover:opacity-80">
          <div className="flex items-center ">
            rennanveras
            <img className="w-10 ml-1 invert" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
          </div>
        </a>         
        <a href="https://www.linkedin.com/in/rennan-veras/" target="_blank" className="hover:opacity-80">
          <div className="flex items-center">
            Rennan Veras
            <img className="w-10 ml-1 invert" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg" />
          </div>
        </a>
      </div>
  </footer>
  );
}

export default Footer;