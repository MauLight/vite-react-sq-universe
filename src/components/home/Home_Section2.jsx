import { Button, Text } from "@nextui-org/react"
import { TiltWrapper } from "../../hoc/SectionWrapper"
import { useContext } from "react"
import { Context } from "../../context/appContext"

import book from '../../img/book.svg'
import brain from '../../img/brain.svg'
import draft from '../../img/draft.svg'
import typewriter from '../../img/typewriter.svg'

function Home_Section2() {

    const { store, actions } = useContext(Context)

    return (
        <section className='rounded-[30px] w-[100%] h-auto mb-20 md:mb-40'>
            <div className="flex flex-col mb-10 justify-center items-center">
                <div className="flex flex-wrap md:mr-auto">
                    <Text className="font-secondary text-xl md:text-3xl xl:text-5xl" weight="bold">Are you ready for THE QUEST?</Text>
                </div>
                <div className="sm:flex justify-between w-full items-center px-15 pt-[50px]">
                    <div className="flex flex-col justify-center pt-3">
                        <img className="w-1/2 md:w-full mx-auto" src={book} />
                        <Text className="font-secondary flex justify-center mt-5" size={20} weight="bold">Theory</Text>
                    </div>
                    <Text className="font-secondary flex justify-center items-center" size={60} weight="bold">+</Text>
                    <div className="flex flex-col justify-center pt-3">
                        <img className="w-1/2 md:w-full mx-auto" src={typewriter} />
                        <Text className="font-secondary flex justify-center mt-5" size={20} weight="bold">Practice</Text>
                    </div>
                    <Text className="font-secondary flex justify-center items-center" size={60} weight="bold">+</Text>
                    <div className="flex flex-col justify-center pt-3">
                        <img className="w-1/2 md:w-full mx-auto" src={brain} />
                        <Text className="font-secondary flex justify-center mt-5" size={20} weight="bold">Growth mindset</Text>
                    </div>
                    <Text className="font-secondary flex justify-center items-center" size={60} weight="bold">=</Text>
                    <div className="flex flex-col justify-center pt-3">
                        <img className="w-1/2 md:w-full mx-auto" src={draft} />
                        <Text className="font-secondary flex justify-center mt-5" size={20} weight="bold">Finished screenplay</Text>
                    </div>
                </div>
            </div>
            <div className="flex grid-col-2">
                <div className="hidden md:flex md:flex-col w-[100%] px-10 xl:pr-[120px] ">
                    <Text className="font-tertiary text-base xl:text-lg">
                        {store.Home_Section1_Text2}
                    </Text>
                    <Text className="mt-2 font-tertiary text-base xl:text-lg">
                        {store.Home_Section1_Text3}
                    </Text>
                </div>
                <div className="flex-col w-[100%]">

                    <div>
                        <div className="w-[100%] flex justify-between">
                            <div className="flex flex-col items-center">
                                <Text className="font-secondary text-base xl:text-3xl">Start</Text>
                                <Text className="font-secondary text-base xl:text-3xl" weight="bold">22.05.2023</Text>
                            </div>
                            <div className="flex flex-col items-center">
                                <Text className="font-secondary text-base xl:text-3xl">Format</Text>
                                <Text className="font-secondary text-base xl:text-3xl" weight="bold">Online</Text>
                            </div>
                            <div className="flex flex-col items-center">
                                <Text className="font-secondary text-base xl:text-3xl">Duration</Text>
                                <Text className="font-secondary text-base xl:text-3xl" weight="bold">13 weeks</Text>
                            </div>
                        </div>
                    </div>
                    <div className="mt-10">
                        <Button shadow color="gradient" className="mx-auto mt-5 py-7 px-5" rounded bordered>
                            <Text className="font-secondary" css={{ textGradient: "45deg, $blue600 -20%, $pink600 50%" }} size={20} weight="bold">{"APPLY NOW"}</Text>
                        </Button>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default TiltWrapper(Home_Section2, "Home_Section2")
