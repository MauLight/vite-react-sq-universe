import { Button } from '@nextui-org/react';
import { TiltWrapper } from '../../hoc/SectionWrapper';
import { TypeAnimation } from 'react-type-animation'
import lesson03 from '../../img/lesson03.png'

function Dramatic3_Lesson() {
    return (
        <div className='h-[200px] md:h-[400px] xl:h-[600px] mt-[100px]' >
            <div className='flex h-[100%]'>
                <img className='rounded-[30px] w-[100%] h-[100%] object-cover object-top' src={lesson03} />
            </div>
            <div className="inner">
                <div className="absolute top-[22%] left-[87%]">
                    <h1 className='text-black font-secondary text-4xl xl:text-8xl'>03</h1>

                </div>
                <div className="absolute top-[40%] left-[62%] sm:top-[38%] sm:left-[62%] md:top-[42%] md:left-[67%] lg:top-[42%] lg:left-[71%] min-[1080px]:top-[40%] min-[1080px]:left-[61%] min-[1342px]:top-[38%] min-[1342px]:left-[50%]">
                    <h1 className='text-black font-secondary text-xs sm:text-xl min-[1080px]:text-4xl min-[1342px]:text-6xl'>The Dramatic Basis of</h1>
                </div>
                <div className="absolute top-[46%] left-[74%] sm:top-[48%] sm:left-[68%] lg:top-[48%] lg:left-[72%] xl:top-[48%] xl:left-[72%] min-[1342px]:top-[48%] min-[1342px]:left-[68%]">
                    <h1 className='text-black font-secondary text-xl sm:text-5xl min-[1080px]:text-6xl min-[1342px]:text-8xl'>{"a "}
                        <b>
                            <TypeAnimation sequence={[
                                'STORY', 3000,
                                ' STORY', 3000,
                                ' STORY', 3000,
                            ]}
                                speed={50}
                                className='text-accent'
                                wrapper='span'
                                repeat={Infinity}
                            />
                        </b>
                    </h1>
                </div>
                <div className="absolute top-[50%] left-[65%] sm:top-[58%] sm:left-[70%] min-[1080px]:top-[64%] min-[1342px]:top-[68%] min-[1342px]:left-[60%]">
                    <p className='text-black font-tertiary hidden min-[1080px]:flex text-sm min-[1342px]:text-2xl'>Design the <b className='mx-1'>OPPOSITION</b> to your protagonist.</p>
                    <div className="flex justify-center items-center">
                        <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley'>
                            <Button className='mt-5 w-[15vh] h-[6vh] md:w-[25vh] md:h-[8vh] lg:w-[35vh] lg:h-[9vh] xl:w-[40vh] xl:h-[10vh]' size='xs' color="warning" bordered rounded >
                                <p className='font-tertiary text-sm md:text-base lg:text-xl'><b>Start Lesson</b></p>
                            </Button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TiltWrapper(Dramatic3_Lesson, "Dramatic3_Lesson");

