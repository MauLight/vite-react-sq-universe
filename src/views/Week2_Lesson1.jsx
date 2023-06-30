import { useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import MythCard from "../components/week2-lesson1/MythCard"
import Myth from "../components/week2-lesson1/Myth"
import MythVideoLesson from "../components/week2-lesson1/MythVideoLesson";
import { Text, Button } from "@nextui-org/react";

function Week2_Lesson1() {

    const navigate = useNavigate()

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <div>
            <div className="flex flex-wrap md:mr-auto px-5 md:px-20 my-[25px]">
                <Text className="font-secondary text-xl md:text-3xl xl:text-5xl">LESSON 0 : The Creation of a Myth</Text>
            </div>
            <MythVideoLesson />
            <div className="px-5 md:px-20">
                <MythCard />
            </div>
            <Myth />
            <div className="flex justify-between items-center px-5 md:px-20">
                <Button onPress={() => navigate('/week2-menu')} className='mt-[50px] w-[25vh] h-[8vh] md:w-[35vh] md:h-[10vh] xl:w-[45vh] xl:h-[10vh]' size='xs' color="gradient" bordered rounded >
                    <p className='font-tertiary text-xl md:text-2xl xl:text-4xl'><b>Back to Menu</b></p>
                </Button>
                <Button onPress={() => console.log('Print!')} className='mt-[50px] w-[25vh] h-[8vh] md:w-[35vh] md:h-[10vh] xl:w-[45vh] xl:h-[10vh]' size='xs' color="gradient" bordered rounded >
                    <p className='font-tertiary text-xl md:text-2xl xl:text-4xl'><b>Print</b></p>
                </Button>
                <Button onPress={() => navigate('/recommendations')} className='mt-[50px] w-[25vh] h-[8vh] md:w-[35vh] md:h-[10vh] xl:w-[45vh] xl:h-[10vh]' size='xs' color="gradient" bordered rounded >
                    <p className='font-tertiary text-xl md:text-2xl xl:text-4xl'><b>Next Lesson</b></p>
                </Button>
            </div>
        </div>
    )
}

export default Week2_Lesson1;
