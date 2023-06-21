import { Input, Text, Button } from "@nextui-org/react";
import Tilt from 'react-parallax-tilt';


export default function Footer() {
  return (
    <div className="grid grid-cols-2 px-20 my-[200px]">
      <Tilt tiltMaxAngleX={0.5} tiltMaxAngleY={0.5} glareEnable={true} glareMaxOpacity={0.15} glareColor={"black"} glareBorderRadius='30px' >

        <div className="p-[50px]">
          <div className="w-[100%] pb-[50px] flex flex-col items-center">
            <Text h1 size={35} color="black" weight="bold" css={{ fontFamily: "Josefin Sans" }}>SCREENWRITERS' QUEST</Text>
            <Text p size={25} color="black" css={{ fontFamily: "Raleway" }} >Your next feature starts here.</Text>
          </div>
          <div className="flex justify-center">
            <div className="grid grid-cols-3 gap-x-48">
              <div className="flex flex-col gap-y-10 text-black">
                <a className="nav-item">ABOUT</a>
                <a className="nav-item">PORTFOLIOS</a>
                <a className="nav-item">REVIEWS</a>
              </div>
              <div className="flex flex-col gap-y-10">
                <a className="nav-item">TEAM</a>
                <a className="nav-item">PRICING</a>
                <a className="nav-item">BLOG</a>
              </div>
              <div className="flex flex-col gap-y-10">
                <a className="nav-item">
                  <i className="text-xl fa-solid fa-magnifying-glass"></i>
                </a>
                <a className="nav-item">
                  <i className="text-xl fa-brands fa-instagram"></i>
                </a>
                <a className="nav-item">
                  <i className="text-xl fa-regular fa-user"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Tilt>
      <Tilt tiltMaxAngleX={0.5} tiltMaxAngleY={0.5} glareEnable={true} glareMaxOpacity={0.15} glareColor={"black"} glareBorderRadius='30px' >

        <div className="p-[50px]">
          <div className="w-[100%] mb-5  flex flex-col items-center">
            <Text h1 size={35} color="black" css={{ fontFamily: "Josefin Sans" }}>DO YOU HAVE ANY QUESTIONS?</Text>
            <Text p size={25} color="black" css={{ fontFamily: "Raleway" }} >Feel free to write us below, we'll contact you soon!</Text>
          </div>
          <div className=" flex justify-center gap-x-5">
            <div className="w-[100%]">
              <label htmlFor="Name" className="mb-10 text-gray-400">Name</label>
              <Input id="Name" className="w-[100%] mt-2" type="text" fullWidth clearable bordered status="default" size="xl" rounded color="primary" />
            </div>
            <div className="w-[100%]">
              <label htmlFor="Email" className="mb-10 text-gray-400">E-mail</label>
              <Input id="Email" className="w-[100%] mt-2" type="text" fullWidth clearable bordered status="default" size="xl" rounded color="primary" />
            </div>
          </div>
          <div className="mt-5">
            <textarea id="Message" className="rounded-full h-[100px] w-[100%] border-solid border-2 border-gray-300 mt-2"></textarea>
          </div>
          <div className="mt-5 flex justify-center gap-x-5">
            <Button shadow color="gradient" className="mt-5 py-7 px-5" rounded bordered>
              <Text className="font-secondary" css={{ textGradient: "45deg, $blue600 -20%, $pink600 50%" }} size={20} weight="bold">{"SUBMIT"}</Text>
            </Button>
          </div>
        </div>
      </Tilt>
    </div>
  )
}
