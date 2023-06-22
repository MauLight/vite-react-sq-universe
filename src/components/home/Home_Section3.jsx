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
        <section className='rounded-[30px] w-[100%] h-full xl:h-[600px] my-20 px-20 flex overflow-hidden'>
            <div className="hidden lg:flex mr-[20px]">
                <Tilt tiltMaxAngleX={1.5} tiltMaxAngleY={1.5} glareEnable={true} glareMaxOpacity={0.15} glareColor={"black"} glareBorderRadius='30px' >

                    <div className="rounded-[40px] border border-solid border-4 border-black h-[722px] xl:h-[100%] overflow-hidden">

                        <ImageHolder />

                    </div>
                </Tilt>
            </div>
            <div className="mx-auto w-[100%] h-full">
                <Tilt tiltMaxAngleX={0.5} tiltMaxAngleY={0.5} glareEnable={true} glareMaxOpacity={0.15} glareColor={"#f205E2"} glareBorderRadius='30px' glarePosition="all" >
                    <div className="flex flex-col justify-center items-center content-between h-[100%] rounded-[40px] border border-solid border-4 border-black p-10 xl:py-[55px]">
                        <div className="mr-auto">
                            <Text className="font-secondary text-base md:text-xl lg:text-3xl" weight="bold">{"The Quest will suit you if you have:"}</Text>
                        </div>
                        <div className="flex flex-col sm:flex-row justify-evenly w-full mt-5">
                            <div>
                                <ul>
                                    <li className="flex">
                                        <img className="pr-1 md:pr-5" src={arrow_up} />
                                        <Text className="font-secondary text-xs md:text-lg" >{"A deep imagination"}</Text>
                                    </li>
                                    <li className="flex">
                                        <img className="pr-1 md:pr-5" src={arrow_up} />
                                        <Text className="font-secondary text-xs md:text-lg" >{"Capacity for observation"}</Text>
                                    </li>
                                    <li className="flex">
                                        <img className="pr-1 md:pr-5" src={arrow_up} />
                                        <Text className="font-secondary text-xs md:text-lg" >{"Interest in human behavior"}</Text>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <ul>
                                    <li className="flex">
                                        <img className="pr-1 md:pr-5" src={arrow_up} />
                                        <Text className="font-secondary pr-10 text-xs md:text-lg" >{"A desire to inspire others"}</Text>
                                    </li>
                                    <li className="flex">
                                        <img className="pr-1 md:pr-5" src={arrow_up} />
                                        <Text className="font-secondary pr-10 text-xs md:text-lg" >{"Been searching for meaning"}</Text>
                                    </li>
                                    <li className="flex">
                                        <img className="pr-1 md:pr-5" src={arrow_up} />
                                        <Text className="font-secondary pr-10 text-xs md:text-lg" >{"Creativity and self-expression"}</Text>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Tilt>

                <Tilt tiltMaxAngleX={0.5} tiltMaxAngleY={0.5} glareEnable={true} glareMaxOpacity={0.15} glareColor={"#f205E2"} glareBorderRadius='30px' glarePosition="all" >
                    <div className="flex flex-col justify-center items-center rounded-[40px] border border-solid border-4 border-black p-10 xl:py-[55px] mt-[20px]">
                        <div className="mr-auto">
                            <Text className="font-secondary text-base md:text-xl lg:text-3xl" weight="bold">{"But you also struggle with:"}</Text>
                        </div>
                        <div className="flex flex-col sm:flex-row justify-evenly w-full mt-5">
                            <div>
                                <ul>
                                    <li className="flex">
                                        <img className="pr-1 md:pr-5" src={arrow_up} />
                                        <Text className="font-secondary pr-10 text-xs md:text-lg" >{"Loneliness"}</Text>
                                    </li>
                                    <li className="flex">
                                        <img className="pr-1 md:pr-5" src={arrow_up} />
                                        <Text className="font-secondary pr-10 text-xs md:text-lg" >{"Shyness"}</Text>
                                    </li>
                                    <li className="flex">
                                        <img className="pr-1 md:pr-5" src={arrow_up} />
                                        <Text className="font-secondary pr-10 text-xs md:text-lg" >{"A self-defeating attitude"}</Text>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <ul>
                                    <li className="flex">
                                        <img className="pr-1 md:pr-5" src={arrow_up} />
                                        <Text className="font-secondary pr-10 text-xs md:text-lg" >{"Procrastination"}</Text>
                                    </li>
                                    <li className="flex">
                                        <img className="pr-1 md:pr-5" src={arrow_up} />
                                        <Text className="font-secondary pr-10 text-xs md:text-lg" >{"Organizational skills"}</Text>
                                    </li>
                                    <li className="flex">
                                        <img className="pr-1 md:pr-5" src={arrow_up} />
                                        <Text className="font-secondary pr-10 text-xs md:text-lg" >{"Lack of writing skills"}</Text>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Tilt>
            </div>
        </section>
    )
}

export default Home_Section3
