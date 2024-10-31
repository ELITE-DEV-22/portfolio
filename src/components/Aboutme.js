import React from "react";
import img from "/Users/elita/Desktop/elita-portfolio/src/img.png";
import "./Landingpage.css";
import Timeline from "./timeline";
const AboutMe = () => {
  return (
    <section
      id="about-me"
      className="bg-gradient-to-r from-purple-500 to-pink-500 text-black py-16"
    >
      {/* Heading Centered Above */}
      <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center mt-8">
        About Me
      </h2>

      {/* Flex Container for Image and Text */}
      <div className="flex flex-col md:flex-row items-center">
        {/* Left Column - Image */}
        <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
          <img
            src={img}
            alt="Your Name"
            className="rounded-full w-64 h-64 object-cover shadow-lg animate-fade-in"
          />
        </div>

        {/* Right Column - Text */}
        <div className="w-full md:w-1/2 px-16">
          <p className="text-lg leading-relaxed">
            Hi, I’m Elita, currently pursuing my BE in Electronics and Computer
            Science. I’m passionate about web development as it bridges my
            technical expertise with my creative flair. Outside of tech, I love
            cycling, trekking, playing badminton, and the keyboard. Let’s create
            something amazing together!
          </p>
        </div>
      </div>
      <Timeline/>
    </section>
  );
};

export default AboutMe;
