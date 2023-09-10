import Image from "next/image";
import Link from "next/link";

import ChristmasWebPc from "../../../public/ChristmasPc.png";
import AnimixClone from '../../../public/AnimixClone.png'
import eLYans from '../../../public/eLYans.png'

export default function About() {
  return (
    <>
      <div className="selection:bg-[#F81CE5] selection:text-white">
        <div className="h-[15vh]">
          <div className="p-3">
            <h1 className="text-blue-500 font-bold">PORTFOLIO</h1>
          </div>

          <div className="px-2">
            <p className="font-extrabold">
              My portfolio: <span className="font-bold"> A glimpse into the solutions I&apos;ve crafted for
              clients and beyond </span>
            </p>
          </div>
        </div>

        {/* First Project */}

        <div className="my-10">
          <div className="flex justify-center items-center ">
            <h1 className="heroTxt bg-blue-500 text-white p-2 rounded-lg ">
              Marry-Christmas
            </h1>
          </div>

          <div className="p-5 lg:flex flex-wrap justify-between ">
            <div className="lg:w-[50%]">
              <p>
                A website on Christmas event. To share the joy of Christmas with
                everyone.
              </p>

              <p className="pt-3">
                <span className="font-bold bg-blue-700 text-white p-1 rounded-lg">
                  Tech Stack
                </span>{" "}
                : <span className="text-orange-400">HTML</span>,{" "}
                <span className="text-blue-400">CSS</span>,{" "}
                <span className="text-yellow-400">JavaScript</span>
              </p>

             <div className="flex gap-5 p-5 mb-3">
                <Link href="https://github.com/Arun-Kumar21/responsive_Christmas_website">
                    <i className="ri-github-fill text-3xl shadow-lg rounded-lg p-2"></i>
                </Link>

                <Link href="https://arun-kumar21.github.io/responsive_Christmas_website/">
                    <i className="ri-link text-3xl shadow-lg rounded-lg p-2 hover:bg-blue-400"></i>
                </Link>
             </div>

             <div className="mb-4">
                    <h1 className="font-bold">Features</h1>
                    <ul className="list-disc list-inside">
                        <li>Responsive</li>
                        <li>Interactive</li>
                        <li>Easy to use</li>
                    </ul>
             </div>
            </div>

            <div className="lg:w-[50%]">
              <Image
                src={ChristmasWebPc}
                alt=""
                className="md: rounded-lg"
              ></Image>
            </div>

            <div className="flex gap-3 ">
              
            </div>
          </div>
        </div>



        {/* Second Project */}
        <div className="my-10">
            <div className="flex justify-center items-center ">
                <h1 className="heroTxt bg-purple-800 text-white p-2 rounded-lg ">
                    AnimixPlay Clone
                </h1>
            </div>

            <div className="p-5 lg:flex flex-wrap justify-between ">
                <div className="lg:w-[50%]">
                    <p>
                        AnimixPlay is a website which is a clone of the original website AnimixPlay.to 
                    </p>

                    <p className="pt-3">
                        <span className="font-bold bg-blue-700 text-white p-1 rounded-lg">
                            Tech Stack
                        </span>{" "}
                        : <span className="text-orange-400">HTML</span>,{" "}
                        <span className="text-blue-400">CSS</span>,{" "}
                        <span className="text-yellow-400">JavaScript</span>
                    </p>

                    <div className="flex gap-5 p-5 mb-3">
                        <Link href="https://github.com/Arun-Kumar21/Animix-Clone">
                            <i className="ri-github-fill text-3xl shadow-lg rounded-lg p-2"></i>
                        </Link>

                        <Link href="https://arun-kumar21.github.io/Animix-Clone/">
                            <i className="ri-link text-3xl shadow-lg rounded-lg p-2 hover:bg-blue-400"></i>
                        </Link>
                    </div>

                    <div className="mb-4">
                        <h1 className="font-bold">Features</h1>
                        <ul className="list-disc list-inside">
                            <li>Responsive</li>
                            <li>Interactive</li>
                            <li>Easy to use</li>
                            <li>Clone</li>
                        </ul>
                    </div>
                </div>

                <div className="lg:w-[50%]">
                    <Image
                        src={AnimixClone}
                        alt=""
                        className="md: rounded-lg">
                    </Image>
            </div>
        </div>
        </div>

        {/* Third Project */}
        <div className="my-10">
            <div className="flex justify-center items-center ">
                <h1 className="heroTxt bg-red-700 text-white p-2 rounded-lg ">
                    eLYans-ECommerce
                </h1>
            </div>

            <div className="p-5 lg:flex flex-wrap justify-between ">
                <div className="lg:w-[50%]">
                    <p>
                        eLYans is a website which is a clone of the original website Amazon.in
                    </p>
                    
                    <p className="pt-3">
                        <span className="font-bold bg-blue-700 text-white p-1 rounded-lg">
                            Tech Stack
                        </span>{" "}
                        : <span className="bg-black text-white p-1 rounded-lg">NextJs</span>,{" "}
                        <span className="text-blue-400">CSS</span>,{" "}
                        <span className="text-green-400">Tailwind</span>,{" "}
                        <span className="text-yellow-400">TypeScript</span>
                    </p>

                    <div className="flex gap-5 p-5 mb-3">
                        <Link href="https://github.com/Arun-Kumar21/eLYans-ECommerce">
                            <i className="ri-github-fill text-3xl shadow-lg rounded-lg p-2"></i>
                        </Link>

                        <Link href="https://elyans-ecommerce.vercel.app/">
                            <i className="ri-link text-3xl shadow-lg rounded-lg p-2 hover:bg-blue-400"></i>
                        </Link>
                    </div>

                    <div className="mb-4">
                        <h1 className="font-bold">Features</h1>
                        <ul className="list-disc list-inside">
                            <li>Responsive</li>
                            <li>Interactive</li>
                            <li>Easy to use</li>
                        </ul>
                    </div>
                </div>

                <div className="lg:w-[50%]">
                    <Image
                        src={eLYans}
                        alt=""
                        className="md: rounded-lg">
                    </Image>
                </div>
            </div>
        </div>

      </div>
    </>
  );
}
