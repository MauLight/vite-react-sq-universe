import { Button, Text } from "@nextui-org/react"
import Tilt from 'react-parallax-tilt';
import video_lesson1 from '../../img/video_lesson_1.mp4'
import video_lesson2 from '../../img/video_lesson_2.mp4'
import video_lesson3 from '../../img/video_lesson_3.mp4'
import video_lesson4 from '../../img/video_lesson_4.mp4'
import video_lesson5 from '../../img/video_lesson_5.mp4'
import ReactPlayer from 'react-player'
import { useContext, useState } from "react"
import { Context } from "../../context/appContext"


function Home_Section4() {

    const { store, actions } = useContext(Context)
    const [video, setVideo] = useState(video_lesson1)
    const [text1, setText1] = useState(store.Home_Section4_Text1)
    //const [text2, setText2] = useState(store.Home_Section1_Text3)

    const ImageHolder = ({ video }) => {
        return (
            <div className=' md:w-[60vh] 2xl:w-[80vh] h-[100%] rounded-[40px] group relative overflow-hidden mx-auto'>
                {/* overlay */}
                <div className='group-hover:bg-black/60 w-full h-full absolute z-40 transition-all duration-300'></div>
                {/* img */}
                <ReactPlayer
                    url={video}
                    playing
                    loop
                    muted
                    width="100%"
                    height="100%"
                    className='mx-auto w-[70vh] h-[100%] group-hover:scale-125 transition-all duration-500'
                />
            </div>
        )
    }


    return (
        <section className="px-20">
            <div>
                <Text className="font-secondary text-xl md:text-3xl xl:text-5xl" weight="bold">How does it work?</Text>
            </div>
            <div className="flex justify-center items-center md:w-full">
                <Button.Group color="gradient" bordered rounded>
                    <Button onClick={() => {
                        setVideo(video_lesson1)
                        setText1(store.Home_Section4_Text1)
                        {/*setText2(store.Home_Section1_Text3)*/ }
                    }}>
                        <Text className="font-secondary text-xs md:text-base xl:text-2xl" weight="bold">{"Video Lessons"}</Text>
                    </Button>
                    <Button className="v-btn" onClick={() => {
                        setVideo(video_lesson2)
                        setText1(store.Home_Section4_Text2)
                        {/*setText2(store.Home_Section1_Text2)*/ }
                    }}>
                        <Text className="font-secondary text-xs md:text-base xl:text-2xl" weight="bold">{"Online Meetings"}</Text>
                    </Button>
                    <Button className="v-btn" onClick={() => {
                        setVideo(video_lesson3)
                        setText1(store.Home_Section4_Text3)
                        {/*setText2(store.Home_Section1_Text2)*/ }
                    }}>
                        <Text className="font-secondary text-xs md:text-base xl:text-2xl" weight="bold">{"Homework"}</Text>
                    </Button>
                    <Button className="v-btn" onClick={() => {
                        setVideo(video_lesson4)
                        setText1(store.Home_Section4_Text4)
                        {/*setText2(store.Home_Section1_Text2)*/ }
                    }}>
                        <Text className="font-secondary text-xs md:text-base xl:text-2xl" weight="bold">{"Writing"}</Text>
                    </Button>
                    <Button className="v-btn" onClick={() => {
                        setVideo(video_lesson5)
                        setText1(store.Home_Section4_Text5)
                        {/*setText2(store.Home_Section1_Text2)*/ }
                    }}>
                        <Text className="font-secondary text-xs md:text-base xl:text-2xl" weight="bold">{"Additional Activities"}</Text>
                    </Button>
                </Button.Group>
            </div>
            <div className="xl:flex mt-10 justify-center mx-auto">
                <div className="pl-0 xl:pl-20">
                    <Tilt tiltMaxAngleX={1.5} tiltMaxAngleY={1.5} glareEnable={true} glareMaxOpacity={0.15} glareColor={"black"} glareBorderRadius='30px' >
                        <ImageHolder video={video} />
                    </Tilt>
                </div>
                <div className="flex items-center mt-10 xl:mt-0">
                    <div className="flex flex-col">
                        <div className="w-[100%] md:px-[150px]">
                            <Text className="font-tertiary text-xl xl:text-2xl">
                                {text1}
                            </Text>
                        </div>
                        <div className="flex justify-center mt-10">
                            <Button shadow color="gradient" className="mt-5 py-7 px-5" rounded bordered>
                                <Text className="font-secondary" css={{ textGradient: "45deg, $blue600 -20%, $pink600 50%" }} size={20} weight="bold">{"APPLY NOW"}</Text>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home_Section4