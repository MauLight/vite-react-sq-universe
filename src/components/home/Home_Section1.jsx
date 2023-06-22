import { Text } from "@nextui-org/react"
import { TiltWrapper } from "../../hoc/SectionWrapper"
import { useContext } from "react"
import { Context } from '../../context/appContext';

function Home_Section1() {

    return (
        <section className='rounded-[30px] w-[100%] h-auto py-10'>
            <div className="flex flex-wrap justify-center mt-20">
                <Text className="font-secondary px-1 text-5 md:text-xl xl:text-4xl text-xl xl:text-4xl" weight="bold">{"In "}</Text>
                <Text className="font-secondary px-1 text-5 md:text-xl xl:text-4xl" css={{ textGradient: "45deg, $blue600 -20%, $pink600 50%" }} weight="bold">{"the quest "}</Text>
                <Text className="font-secondary px-1 text-5 md:text-xl xl:text-4xl" weight="bold">{"you'll learn a new way of "}</Text>
                <Text className="font-secondary px-1 text-5 md:text-xl xl:text-4xl" css={{ textGradient: "45deg, $blue600 -20%, $pink600 50%" }} weight="bold">{"writing "}</Text>
                <Text className="font-secondary px-1 text-5 md:text-xl xl:text-4xl" weight="bold">{"and a new way of "}</Text>
                <Text className="font-secondary px-1 text-5 md:text-xl xl:text-4xl" css={{ textGradient: "45deg, $blue600 -20%, $pink600 50%" }} weight="bold">{"living."}</Text>
            </div>
            <div className="flex flex-wrap justify-center">
                <Text className="font-secondary px-1 text-5 md:text-xl xl:text-4xl" weight="bold">{"Transform a single "}</Text>
                <Text className="font-secondary px-1 text-5 md:text-xl xl:text-4xl" css={{ textGradient: "45deg, $blue600 -20%, $pink600 50%" }} weight="bold">{"idea "}</Text>
                <Text className="font-secondary px-1 text-5 md:text-xl xl:text-4xl" weight="bold">{"into a powerful "}</Text>
                <Text className="font-secondary px-1 text-5 md:text-xl xl:text-4xl" css={{ textGradient: "45deg, $blue600 -20%, $pink600 50%" }} weight="bold">{"MYTH "}</Text>
                <Text className="font-secondary px-1 text-5 md:text-xl xl:text-4xl" weight="bold">{"that links to your audience."}</Text>
            </div>
            <div className="flex flex-wrap justify-center mb-20">
                <Text className="font-secondary px-1 text-5 md:text-xl xl:text-4xl" weight="bold">{"Shape your "}</Text>
                <Text className="font-secondary px-1 text-5 md:text-xl xl:text-4xl" css={{ textGradient: "45deg, $blue600 -20%, $pink600 50%" }} weight="bold">{"life "}</Text>
                <Text className="font-secondary px-1 text-5 md:text-xl xl:text-4xl" weight="bold">{"to become a professional writer."}</Text>
            </div>
        </section>
    )
}

export default Home_Section1