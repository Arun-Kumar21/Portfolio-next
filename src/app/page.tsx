import Image from "next/image";
import Link from "next/link";

import ProfilePhoto from "../../public/ProfilePhoto.jpg";
import HtmlIcon from "../../public/icons8-html-96.png";
import CssIcon from "../../public/icons8-css-96.png";
import JsIcon from "../../public/icons8-js-96.png";
import ReactIcon from "../../public/icons8-react-native-48.png";
import NextIcon from "../../public/icons8-nextjs-48.png";
import PythonIcon from "../../public/icons8-python-48.png";
import MongoIcon from "../../public/icons8-mongo.png";
import TailWindIcon from "../../public/icons8-tailwind-css-48.png";


import About from "./about/page";
import Footer from "./Component/Footer";
import Contact from "./Contact/page";

export default function Home() {
  return (
    <>
      <div className="block md:flex justify-between items-center min-h-[90vh] w-full selection:bg-[#F81CE5] selection:text-white">

      <div className="p-3 md:w-[45%] h-[50%] flex justify-center items-center ">
          <div draggable="false"> 
            <Image
              src={ProfilePhoto}
              alt="Profile Photo"
              className="profilePic rounded-full w-[200px] h-[200px] object-cover object-center"
            />
          </div>
        </div>

        <div className="p-3  md:w-[45%] h-[50%] md:flex justify-center items-center">
          <div>
            <div className="py-2">
              <h1 className="text-xl heroTxt">Hello 👋, I'm </h1>
              <h1 className="text-4xl heroTxt inline-block homeHeading">
                Arun Kumar
              </h1>
            </div>

            <div>
              <h1>
                An Undergraduate Student
                <br />
                at 
                <a
                  href="http://www.ipu.ac.in/"
                  target="_blank"
                  className="text-blue-500 hover:bg-[#F81CE5] px-2 py-1 rounded-md hover:text-white heroTxt mx-1"
                >
                  IPU Usar😎
                </a>
              </h1>
            </div>

            <div className="py-2">
              <p className="font-semibold">
                I'm a Full Stack Developer and a Competitive Programmer.
                <span className="heroTxt text-pink-500"> I love</span>
                <br />
                building things and learning new technologies.
              </p>
            </div>

            <div className="flex gap-5 p-3">
                <Link href="https://github.com/Arun-Kumar21">
                  <i className="ri-github-fill text-3xl"></i>
                </Link>

                <Link href="">
                  <i className="ri-linkedin-box-fill text-3xl hover:text-blue-600"></i>
                </Link>
            </div>

            <div className="flex gap-6 p-2 items-center">
              <div>
                <h1 className="font-[500] text-base">Tech Skills :</h1>
              </div>

              <div className="flex gap-2 flex-wrap p-2">
                <Image src={HtmlIcon}  alt="Html" className="w-[40px] "/>
                <Image src={CssIcon} alt="Css" className="w-[40px] "/>
                <Image src={JsIcon} alt="Js" className="w-[40px] "/>
                <Image src={ReactIcon} alt="Reactjs" className="w-[40px]"/>
                <Image src={NextIcon} alt="Nextjs" className="w-[40px]"/>
                <Image src={PythonIcon} alt="Python" className="w-[40px]"/>
                <Image src={MongoIcon} alt="MongoDb" className="w-[40px]"/>
                <Image src={TailWindIcon} alt="TailWind" className="w-[40px]"/>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className="w-full">
        <About />
      </div>

      <div className="mt-10">
        <Contact/>
      </div>

      <div className="mt-20">
        <Footer/>
      </div>
    </>
  );
}
