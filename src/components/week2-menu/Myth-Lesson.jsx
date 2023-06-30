import { Button } from '@nextui-org/react';
import { TiltWrapper } from '../../hoc/SectionWrapper';
import { TypeAnimation } from 'react-type-animation'
import myth from '../../img/myth-menu.png'


function Myth_Lesson() {
    return (
        <div className='h-[200px] md:h-[400px] xl:h-[600px] mt-[50px]'>
            <div className='flex h-[100%]'>
                <img className='rounded-[30px] w-[100%] h-[100%] object-cover object-top' src={myth} />
            </div>
            <div className="inner">
                <div className="absolute top-[48%] left-[60%] md:top-[48%] md:left-[55%] xl:top-[48%] xl:left-[50%]">
                    <h1 className='text-white font-secondary text-sm sm:text-xl md:text-4xl xl:text-6xl min-[1300px]:text-7xl'>The Creation of</h1>
                </div>
                <div className="absolute top-[58%] left-[70%]">
                    <h1 className='text-white font-secondary text-lg md:text-5xl xl:text-7xl min-[1300px]:text-8xl'>{"a "}<b>
                        <TypeAnimation sequence={[
                            'MYTH', 3000,
                            ' MYTH', 3000,
                            ' MYTH', 3000,
                        ]}
                            speed={50}
                            className='text-accent'
                            wrapper='span'
                            repeat={Infinity}
                        />
                    </b></h1>
                </div>
                <div className="absolute top-[63%] left-[40%] min-[450px]:top-[65%] min-[450px]:left-[62%] md:top-[70%] xl:top-[75%] xl:left-[50%]">
                    <p className='text-white font-tertiary hidden min-[950px]:flex min-[950px]:text-sm xl:text-2xl'>Move from a single idea into the <b className='px-1'>{" MYTH "}</b> of your story.</p>
                    <div className="flex justify-center items-center">
                        <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley'>
                            <Button className='mt-5 w-[17vh] h-[6vh] md:w-[25vh] md:h-[8vh] lg:w-[35vh] lg:h-[9vh] xl:w-[40vh] xl:h-[10vh]' size='xs' color="warning" bordered rounded >
                                <p className='font-tertiary text-base lg:text-xl'><b>Start Lesson</b></p>
                            </Button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TiltWrapper(Myth_Lesson, "Myth_Lesson");