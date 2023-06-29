import Quotes from '../components/quotes/Quotes'
import Recommendations from '../components/quotes/Recommendations'
import { Button, Text } from "@nextui-org/react";

import { Triangle } from 'react-loader-spinner'

export default function Inspiration() {
    return (
        <div>
            <Quotes />
            <div className="flex-col flex-wrap my-10 justify-center items-center max-w-full mx-auto px-5 md:px-20">
                <div className="flex justify-center items-center">
                    <Triangle
                        height="80"
                        width="80"
                        color="black"
                        ariaLabel="triangle-loading"
                        wrapperStyle={{}}
                        wrapperClassName=""
                        visible={true}
                    />
                </div>
                <Text className="text-center font-secondary text-sm md:text-lg xl:text-xl mt-5" weight="bold">Loading next sequence...</Text>
            </div>
            <Recommendations />
        </div>
    )
}