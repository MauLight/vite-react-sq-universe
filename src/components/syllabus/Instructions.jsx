import { TiltWrapper } from "../../hoc/SectionWrapper"
import { Button, Text } from "@nextui-org/react"

function Instructions() {
    return (
        <div>
            <div className="flex flex-col justify-center items-center content-between h-[100%] rounded-[40px] border border-solid border-4 border-black p-10 xl:py-[48px]">
                <div className="flex flex-wrap md:mr-auto">
                    <Text className="font-secondary text-xl md:text-3xl xl:text-5xl" weight="bold">Learn the steps, walk the PATH</Text>
                </div>
                <div className="my-10">
                    <Text className="font-tertiary text-base xl:text-lg">
                        The quest will prepare you to write a full-feature, not only from a technical stand-point, but also from a producers' perspective. Follow the journey to write the best story you can imagine while learning to sell your ideas and convincing others to watch your movie. Before we start, please take a moment to read through the syllabus, so you can become familiar with the content of the lessons and get a glimpse at what you will learn.
                    </Text>
                </div>
                <div className="flex flex-wrap md:mr-auto">
                    <Text className="font-tertiary font-bold text-lg xl:text-2xl">
                    Good Luck!
                    </Text>
                </div>
            </div>
        </div>
    )
}

export default TiltWrapper(Instructions, 'Instructions')
