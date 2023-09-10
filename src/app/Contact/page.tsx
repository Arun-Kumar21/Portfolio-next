
export default function Contact() {
  
  return (
    <>
      <div className="selection:bg-[#F81CE5] selection:text-white">
        <div className="">
          <div className="p-3">
            <h1 className="text-blue-500 font-bold">CONTACT</h1>
          </div>

          <div className="px-4 py-1">
            <h1 className="font-bold">Don&apos;t be shy! Hit me up!👇</h1>
          </div>

          <div className="p-5">
            <form
              className="w-[90%] m-auto">
              <div className="flex flex-col w-[90%] md:w-[70%]">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name.."
                  className="mb-2 border-2 heroTxt border-black p-2 rounded-lg focus:border-[#F81CE5] outline-none"
                  required
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Your Email.."
                  className="mb-2 border-2 heroTxt border-black p-2 rounded-lg focus:border-[#F81CE5] outline-none"
                  required
                />

                <textarea
                  name="message"
                  placeholder="Your Message.."
                  className="mb-2 border-2 heroTxt border-black p-2 rounded-lg focus:border-[#F81CE5] outline-none"
                  required
                  rows={5}
                ></textarea>
              </div>

              <input
                type="submit"
                value="Send 😁"
                className="bg-violet-600 p-2 text-white rounded-lg hover:bg-[#F81CE5] my-3"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
