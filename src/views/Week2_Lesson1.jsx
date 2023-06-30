import MythCard from "../components/week2-lesson1/MythCard"
import Myth from "../components/week2-lesson1/Myth"
import MythVideoLesson from "../components/week2-lesson1/MythVideoLesson";
import { Text } from "@nextui-org/react";

function Week2_Lesson1() {

    return (
        <div>
            <div className="flex flex-wrap md:mr-auto px-5 md:px-20 my-[25px]">
                <Text className="font-secondary text-xl md:text-3xl xl:text-5xl">LESSON 0 : The Creation of a Myth</Text>
            </div>
            <MythVideoLesson />
            <div className="px-20">
                <MythCard />
            </div>
            <Myth />
        </div>
    )
}

export default Week2_Lesson1;
