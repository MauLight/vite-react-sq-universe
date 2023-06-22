import { Button, Text } from '@nextui-org/react';
import { TiltWrapper } from '../../hoc/SectionWrapper';
import { TypeAnimation } from 'react-type-animation'
import ReactPlayer from 'react-player'
import hero_video from '../../img/hero_video.mp4'


function Home_Hero() {

    return (
        <div className='h-[600px]' >
            <div className='flex h-[100%]'>
            <div className="w-full h-full absolute z-0 bg-gradient-to-r from-black to-black-100 rounded-[30px]"></div>
                <video
                    src={hero_video}
                    type='video/mp4'
                    loop
                    controls={false}
                    muted
                    autoPlay
                    className="object-cover w-full h-auto"
                />
            </div>
            <div className="inner">
                <div className="absolute top-[40%] left-[8%]">
                    <h1 className='text-white font-secondary text-5xl'>Write you next screenplay</h1>
                    <p className='text-white font-tertiary text-3xl pl-2' >Like you've never done before.</p>
                </div>
                <div className="absolute top-[53%] left-[8%]">
                    <Text h1 className='text-white font-secondary text-8xl' css={{ textGradient: "45deg, $blue600 -20%, $pink600 50%" }} >{"in "}<b>
                        <TypeAnimation sequence={[
                            '13 WEEKS', 3000,
                            ' 13 WEEKS', 3000,
                            ' 13 WEEKS', 3000,
                        ]}
                            speed={50}
                            className='text-accent'
                            wrapper='span'
                            repeat={Infinity}
                        />
                    </b>
                    </Text>
                </div>
                <div className="absolute top-[70%] left-[15%]">
                    <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley'>
                    <Button shadow color="gradient" className="mt-5 py-7 px-5" rounded bordered>
                            <Text className="font-secondary" css={{ textGradient: "45deg, $blue600 -20%, $pink600 50%" }} size={20} weight="bold">{"APPLY NOW!"}</Text>
                        </Button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default TiltWrapper(Home_Hero, "Home_Hero");