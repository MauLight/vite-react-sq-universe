import { Button } from '@nextui-org/react';
import { TiltWrapper } from '../../hoc/SectionWrapper';
import { TypeAnimation } from 'react-type-animation'
import lesson04 from '../../img/lesson04.png'

function Dramatic4_Lesson() {
    return (
        <div className='h-[600px] mt-[100px]'>
            <div className='flex h-[100%]'>
                <img className='rounded-[30px] w-[100%] h-[100%] object-cover object-top' src={lesson04} />
            </div>
            <div className="inner">
                <div className="absolute top-[22%] left-[87%]">
                    <h1 className='text-black font-secondary text-8xl'>04</h1>

                </div>
                <div className="absolute top-[38%] left-[50%]">
                    <h1 className='text-black font-secondary text-6xl'>The Dramatic Basis of</h1>

                </div>
                <div className="absolute top-[48%] left-[70%]">
                    <h1 className='text-black font-secondary text-8xl'>{"a "}
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
                <div className="absolute top-[68%] left-[60%]">
                    <p className='text-black font-tertiary text-2xl' >Design the <b>BATTLE</b> against the antagonism.</p>
                    <div className="flex justify-center items-center">
                        <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley'>
                            <Button className='mt-5 px-2' size="xl" color="warning" bordered rounded >
                                <p className='font-tertiary text-xl'><b>Start Lesson</b></p>
                            </Button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TiltWrapper(Dramatic4_Lesson, "Dramatic4_Lesson");
