import React from "react";
import "./styles/tailwind.css";
import logo from "./images/foto.jpg";
import port1 from "./images/port1.png";
import port2 from "./images/port2.jpg";
import port3 from "./images/port3.png";

function App() {
  return (
    <>
      <nav className="flex h-[70px] w-full items-center justify-center bg-gray-800">
        <div className="container mx-auto px-5">
          <ul className="flex items-center justify-center gap-x-10 text-lg font-bold text-white">
            <div className="ml-2 h-[3px] w-20 bg-white"></div>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#project">Project</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <div className="ml-2 h-[3px] w-20 bg-white"></div>
          </ul>
        </div>
      </nav>

      <section id="home" className="flex h-[500px] items-center justify-center bg-gray-100">
        <div className="container mx-auto flex items-center justify-center px-5">
          <div className="w-[600px] text-end">
            <h3 className="mb-2 text-3xl font-bold">Hi There!</h3>
            <p>
              My name is Priski Putra Maulana and I am a Front-End Developer. I specialize in creating visually stunning and user-friendly websites using various technologies such as HTML, CSS, and
              JavaScript. I have a passion for staying up-to-date with the latest design trends and creating responsive and mobile-friendly designs that provide the best user experience. In my spare
              time, I enjoy exploring new frameworks and libraries to enhance my skills and contribute to the development community.
            </p>
          </div>
          <img className="mx-6 h-auto w-80 rounded-full" src={logo} alt="" />
          <div className="flex w-[600px] flex-col justify-center">
            <div className="flex items-center">
              <h3 className="text-2xl font-semibold">PORTFOLIO</h3>
              <div className="ml-2 h-[3px] w-48 bg-gray-800"></div>
            </div>
            <h1 className="text-3xl">PRISKI PUTRA MAULANA</h1>
          </div>
        </div>
      </section>

      <section id="about" className="bg-gray-200">
        <div className="container mx-auto flex h-[500px] items-center justify-center px-5">
          <div>
            <div className="mb-10 ml-10 flex items-center">
              <div className="ml-2 mr-3 h-[3px] w-14 bg-gray-800"></div>
              <h1 className="text-3xl font-bold">ABOUT ME</h1>
              <div className="ml-2 mr-3 h-[3px] w-14 bg-gray-800"></div>
            </div>
            <p>
              I am a Front-End Developer with 2015 years of experience in creating high-quality websites and web applications. My expertise lies in utilizing the latest technologies such as HTML, CSS,
              and JavaScript to create engaging and responsive user interfaces. I am passionate about designing and developing websites that not only look great but also provide an optimal user
              experience. My skills include creating responsive designs that work seamlessly across different devices, implementing dynamic functionality using JavaScript, and optimizing website
              performance for faster loading times. I have experience working with a variety of front-end frameworks and libraries, such as React, Angular, and Vue.js, as well as integrating with
              back-end technologies like Node.js and PHP. I am committed to staying up-to-date with the latest trends and best practices in web development, and I am always eager to learn new
              technologies and expand my skillset. I am a team player who enjoys collaborating with designers, developers, and other stakeholders to deliver high-quality projects on time and within
              budget. If you're looking for a Front-End Developer who is passionate about creating amazing user experiences and is dedicated to delivering high-quality work, then look no further!
              Please feel free to reach out to me to discuss your project requirements
            </p>
          </div>
          <div className="flex w-[2500px] justify-center">
            <div className="ml-2 h-80 w-[8px] bg-gray-800"></div>
            <div className="ml-2 h-80 w-[2px] bg-gray-800"></div>
          </div>
        </div>
      </section>

      <section id="project" className="flex h-[600px] flex-col items-center justify-center bg-gray-100">
        <div className="container mx-auto flex flex-col items-center px-5">
          <h2 className="text-3xl font-bold">THE PROJECT</h2>
          <div className="mb-5 ml-2 h-[5px] w-[400px] bg-gray-800"></div>
          <div className="ml-2 h-[8px] w-[500px] bg-gray-800"></div>
          <div className="my-5 flex items-center gap-x-10">
            <img className="h-auto w-[450px]" src={port1} alt="" />
            <img className="h-auto w-[450px]" src={port2} alt="" />
            <img className="h-auto w-[450px]" src={port3} alt="" />
          </div>
          <div className="ml-2 h-[8px] w-[500px] bg-gray-800"></div>
          <div className="ml-2 mt-5 h-[5px] w-[400px] bg-gray-800"></div>
        </div>
      </section>

      <section id="contact" className="bg-gray-800">
        <div className="container mx-auto flex h-[70px] items-center justify-center px-5">
          <ul className="flex items-center justify-center gap-x-10 text-lg font-bold text-white">
            <li className="h-[8px] w-[8px] bg-white"></li>
            <li>
              <a href="https://web.whatsapp.com/" target="_blank" rel="noreferrer">
                Whatsapp
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/?hl=id" target="_blank" rel="noreferrer">
                Instagram
              </a>
            </li>
            <li>
              <a href="https://id-id.facebook.com/" target="_blank" rel="noreferrer">
                Facebook
              </a>
            </li>
            <li>
              <a href="https://twitter.com/?lang=id" target="_blank" rel="noreferrer">
                Twitter
              </a>
            </li>
            <li className="h-[8px] w-[8px] bg-white"></li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default App;
