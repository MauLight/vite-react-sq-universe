import { Button } from '@nextui-org/react'
import Title from '../components/syllabus/Title';
import Instructions from '../components/syllabus/Instructions';
import SyllabusListI from '../components/syllabus/SyllabusListI';
import SyllabusListII from '../components/syllabus/SyllabusListII';
import SyllabusListIII from '../components/syllabus/SyllabusListIII';
import SyllabusListIV from '../components/syllabus/SyllabusListIV';
import PitchSession from '../components/syllabus/PitchSession';

export default function Syllabus() {
    return (
        <div className="mt-10">
            <Title />
            <Instructions />
            <SyllabusListI />
            <PitchSession title={"First Pitch Session"} subtitle={"Dramatic basis of story + character arc + audience research."} />
            <SyllabusListII />
            <PitchSession title={"Mid-term Theory Test"} subtitle={"Test your knowledge by taking the midterm test."} />
            <SyllabusListIII />
            <PitchSession title={"Second Pitch Session"} subtitle={"Finished outline + audience research."} />
            <SyllabusListIV />
            <PitchSession title={"Final Pitch Session"} subtitle={"Finished screenplay + audience research."} />
            <div className="flex justify-center sm:justify-end items-center px-5 md:px-20">
                <Button className='mt-[50px] w-[15vh] h-[6vh] md:w-[25vh] md:h-[8vh] lg:w-[35vh] lg:h-[9vh] xl:w-[40vh] xl:h-[10vh]' size='xs' color="gradient" bordered rounded >
                    <p className='font-tertiary text-md md:text-lg lg:text-2xl'><b>Let's Start!</b></p>
                </Button>
            </div>
        </div>
    )
}
