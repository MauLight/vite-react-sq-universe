import { Button } from '@nextui-org/react';
import { TiltWrapper } from '../../hoc/SectionWrapper';
import { TypeAnimation } from 'react-type-animation'
import myth from '../../img/myth-menu.png'


function Myth_Lesson() {
    return (
        <div className='h-[600px] mt-[50px]'>
            <div className='flex h-[100%]'>
                <img className='rounded-[30px] w-[100%] h-[100%] object-cover object-top' src={myth} />
            </div>
            <div className="inner">
                <div className="absolute top-[48%] left-[50%]">
                    <h1 className='text-white font-secondary text-7xl'>The Creation of</h1>
                </div>
                <div className="absolute top-[58%] left-[70%]">
                    <h1 className='text-white font-secondary text-8xl'>{"a "}<b>
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
                <div className="absolute top-[75%] left-[50%]">
                    <p className='text-white font-tertiary text-2xl' >Move from a single idea into the <b>MYTH</b> of your story.</p>
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

export default TiltWrapper(Myth_Lesson, "Myth_Lesson");