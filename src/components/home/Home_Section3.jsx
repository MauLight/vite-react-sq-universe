import { Text } from "@nextui-org/react"
import Tilt from 'react-parallax-tilt';
import { useContext } from "react"
import { Context } from '../../context/appContext';
import ReactPlayer from 'react-player'

import frames from '../../img/frames.mp4'
import arrow_up from '../../img/arrow up.svg'

function Home_Section3() {

    const { store, actions } = useContext(Context)

    const ImageHolder = ({ title, example, img }) => {
        return (
            <div className='w-[500px] h-[100%] group relative overflow-hidden flex items-center'>
                {/* overlay */}
                <div className='group-hover:bg-black/60 w-full h-full absolute z-40 transition-all duration-300'></div>
                {/* img */}
                <ReactPlayer
                    url={frames}
                    playing
                    loop
                    muted
                    width="500px"
                    height="100%"
                    className='group-hover:scale-125 transition-all duration-500'
                />
                {/* pretitle */}
                <div className='absolute -bottom-full left-12 text-white font-secondary group-hover:bottom-6 transition-all duration-500 z-50'>{title}</div>
                {/* title */}
                <div className='absolute -bottom-full font-tertiary left-2 px-10 group-hover:bottom-14 transition-all duration-700 z-50'><span className='text-3xl text-white'>{store.Home_Section3_Text1}</span></div>
            </div>
        )
    }

    return (
        <section className='rounded-[30px] w-[100%] h-[750px] my-20 py-10 px-20 flex max-w-[1920px]'>
            <div className="flex w-[67%]">
                <Tilt tiltMaxAngleX={1.5} tiltMaxAngleY={1.5} glareEnable={true} glareMaxOpacity={0.15} glareColor={"black"} glareBorderRadius='30px' >

                    <div className="rounded-[40px] border border-solid border-4 border-black h-full w-[500px] overflow-hidden">

                        <ImageHolder />

                    </div>
                </Tilt>
            </div>
            <div className="mx-auto w-[100%]">
                <Tilt tiltMaxAngleX={0.5} tiltMaxAngleY={0.5} glareEnable={true} glareMaxOpacity={0.15} glareColor={"#f205E2"} glareBorderRadius='30px' glarePosition="all" >
                <div className="flex flex-col justify-center rounded-[40px] border border-solid border-4 border-black w-[100%] py-[58px]">
                        <Text className="font-secondary px-10" size={30} weight="bold">{"The Quest will suit you if you have:"}</Text>
                        <div className="flex gap-x-48 mt-5">

                            <ul>
                                <li className="flex">
                                    <img className="pr-5 pl-10" src={arrow_up} />
                                    <Text className="font-secondary pr-10" size={15} >{"A deep imagination"}</Text>
                                </li>
                                <li className="flex">
                                    <img className="pr-5 pl-10" src={arrow_up} />
                                    <Text className="font-secondary pr-10" size={15} >{"Capacity for observation"}</Text>
                                </li>
                                <li className="flex">
                                    <img className="pr-5 pl-10" src={arrow_up} />
                                    <Text className="font-secondary pr-10" size={15} >{"Interest in human behavior"}</Text>
                                </li>
                            </ul>
                            <ul>
                            <li className="flex">
                                    <img className="pr-5 pl-10" src={arrow_up} />
                                    <Text className="font-secondary pr-10" size={15} >{"A desire to inspire others"}</Text>
                                </li>
                                <li className="flex">
                                    <img className="pr-5 pl-10" src={arrow_up} />
                                    <Text className="font-secondary pr-10" size={15} >{"Been searching for meaning in life"}</Text>
                                </li>
                                <li className="flex">
                                    <img className="pr-5 pl-10" src={arrow_up} />
                                    <Text className="font-secondary pr-10" size={15} >{"Creativity and self-expression"}</Text>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Tilt>

                <Tilt tiltMaxAngleX={0.5} tiltMaxAngleY={0.5} glareEnable={true} glareMaxOpacity={0.15} glareColor={"#f205E2"} glareBorderRadius='30px' glarePosition="all" >
                    <div className="flex flex-col justify-center rounded-[40px] border border-solid border-4 border-black w-[100%] mt-[58px] py-[58px]">
                        <Text className="font-secondary px-10" size={30} weight="bold">{"But you also struggle with:"}</Text>
                        <div className="flex gap-x-48 mt-5">
                            <ul>
                            <li className="flex">
                                    <img className="pr-5 pl-10" src={arrow_up} />
                                    <Text className="font-secondary pr-10" size={15} >{"Loneliness"}</Text>
                                </li>
                                <li className="flex">
                                    <img className="pr-5 pl-10" src={arrow_up} />
                                    <Text className="font-secondary pr-10" size={15} >{"Shyness"}</Text>
                                </li>
                                <li className="flex">
                                    <img className="pr-5 pl-10" src={arrow_up} />
                                    <Text className="font-secondary pr-10" size={15} >{"A self-defeating attitude"}</Text>
                                </li>
                            </ul>
                            <ul>
                            <li className="flex">
                                    <img className="pr-5 pl-10" src={arrow_up} />
                                    <Text className="font-secondary pr-10" size={15} >{"Procrastination"}</Text>
                                </li>
                                <li className="flex">
                                    <img className="pr-5 pl-10" src={arrow_up} />
                                    <Text className="font-secondary pr-10" size={15} >{"Poor organizational skills"}</Text>
                                </li>
                                <li className="flex">
                                    <img className="pr-5 pl-10" src={arrow_up} />
                                    <Text className="font-secondary pr-10" size={15} >{"Lack of writing skills"}</Text>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Tilt>
            </div>
        </section>
    )
}

export default Home_Section3
