import React from "react";

const About = () => {
  return (
    <div
      name="About"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white   p-4 mx-auto  md:px-[80px]  flex flex-col justify-center"
    >
      <p className="text-4xl font-bold">
        <u> About</u>
      </p>

      <p className=" my-4 text-lg md:text-xl">
        Hello! I'm Gopikannan , a passionate and creative Full Stack Developer with
        a solid two years of experience in crafting immersive and user-friendly
        web experiences.
      </p>
      {/* <p className=" my-4 text-lg md:text-xl">
        I thrive on transforming design concepts into elegant and responsive
        websites, ensuring seamless functionality across various devices and
        browsers.
      </p> */}
      <p className=" my-4 text-lg md:text-xl">
        As a Full Stack Developer, I enjoy tackling new challenges and
        continuously expanding my skillset.
      </p>
      <p className=" my-4 text-lg md:text-xl">
      I have a passion for working with Html , Css , 
      Javascript and frameworks like React.js and backend php and Frameworks like Laravel I am also
        interested in building New Web Technologies and Software.
      </p>
      <p className=" my-4 text-lg md:text-xl">I hereby declare that the above details are true. I would discharge my duties to the entire satisfaction of my superiors by giving 
        enough interest towards challenging jobs, hard work, developing team spirit, balance of confidence and update of latest technologies.</p>
    </div>
  );
};

export default About;
