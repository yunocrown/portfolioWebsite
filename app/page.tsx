import Link from "next/link";

<style>
  @import url('https://fonts.googleapis.com/css2?family=Comforter&display=swap');
</style>

export default function Home() {
  return (
    <main className="flex min-h-screen h-full flex-col items-center justify-between px-24 pt-9 bg-[#CFF4D2]">
      <div className="w-11/12 h-fit flex flex-wrap justify-center">
        <div className="w-full h-11 flex flex-wrap text-base items-center place-content-between text-black">
          <img 
            src="/logo.svg"
            alt="logo Image"
            width={50}
            height={50}
          />
          <div className="w-[17rem] flex gap-16">
            <Link
              href="/"
              className="border rounded-[5px] border-[#329D9C] p-2 w-20 h-8 flex flex-wrap items-center justify-center"
            >
              Work
            </Link>
            <Link
              href="/about"
             className="hover:border hover:border-[#7BE495] p-2 w-20 rounded-[5px] h-8 flex flex-wrap items-center justify-center"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="hover:border hover:border-[#7BE495] p-2 w-20 rounded-[5px] h-8 flex flex-wrap items-center justify-center"
            >
              Contact
            </Link>
          </div>
        </div>
        <div className="w-full h-40 relative top-20 flex flex-wrap place-content-between">
          <div
            className="flex flex-wrap w-96 h-full"
          >
            <div 
              className="w-full h-18 text-4xl"
            >
              Hey there!
            </div>
            <div>
              My name is JATIN SAINI and I'm a desinger with background in UI/UX designing and web development. I'm enthusiast who wants to helps businesses to succeed by creating user-centric experinces 
            </div>
          </div>
          <img 
            src="/Top Abstract Design.svg"
            alt="topAbstractDesign"
            width={350}
            height={200}
            
          />
        </div>
        <div
          className="w-11/12 h-full grid grid-col-3 gap-10 relative z-10 mt-40"
        >
          <div className="w-full h-[35rem]  bg-[#205072] rounded-[2px] flex flex-wrap items-center justify-center">
              <div  className="absolute lg:top-60 left-0 lg:origin-center lg:rotate-90 lg:text-5xl sm:text-sm sm:rotate-0 sm:top-4 sm:left-4 text-white">
                INTERNSHIP
              </div>
              <div className="w-11/12 h-[29rem] border-[3px] border-[#329D9C] rounded-[2px] flex flex-wrap items-center justify-center">
                <div className="max-w-full mx-auto overflow-hidden md:max-w-2xl">
                  <div className="md:flex">
                    <div className="md:shrink-0">
                      <img 
                        src="/Internship Preview.svg" 
                        alt="Livinnovate Internship" 
                        width={350}
                        height={300}
                        className="lg:w-96 z-0"
                      />
                    </div>
                    <div className="p-8 text-white font-normal z-10">
                      <li>Designed a mobile app with Figma and Flutter to deliver services to over 100+ clients.</li>
                      <li>Evaluated existing website design and improved it into an intuitive mobile based design resulting in increased customer satisfaction by 70%.</li>
                      <li>Successfully launched a portal design solution, elevating project success</li>
                    </div>
                  </div>
                </div>
              </div>
          </div>
          <div className="w-full h-[34rem]  bg-[#205072] rounded-[2px] flex flex-wrap items-center justify-center">
              <div className="w-11/12 h-[28rem] border-[3px] border-[#329D9C] rounded-[2px]">
                  hello
              </div>
          </div>
          <div className="w-full h-[34rem]  bg-[#205072] rounded-[2px] flex flex-wrap items-center justify-center">
              <div className="w-11/12 h-[28rem] border-[3px] border-[#329D9C] rounded-[2px]">
                  hello
              </div>
          </div>
          <div className="w-full h-[34rem]  bg-[#205072] rounded-[2px] flex flex-wrap items-center justify-center">
              <div className="w-11/12 h-[28rem] border-[3px] border-[#329D9C] rounded-[2px]">
                  hello
              </div>
          </div>
        </div>
        <div className="w-full">
          <img 
            src="/Bottom Abstract Design.svg"
            alt="bottom abstract design"
            width={350}
            height={200}
            className="z-0 relative top-[-14rem]"
          />
          <div className="w-full relative top-[-3rem] flex place-content-between flex-wrap ">
            <div>
              Follow Me
            </div>
            <div className="left-10 relative w-fit flex flex-wrap gap-28 ">
              <img 
                src="/pinterest.svg"
                alt="pinterest"
              />
              <img 
                src="/dribbble.svg"
                alt="dribbble"
              />
              <img 
                src="/linkedIn.svg"
                alt="linkedIn"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
