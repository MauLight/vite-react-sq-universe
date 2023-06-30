import { Button } from '@nextui-org/react'
import Title from '../components/syllabus/Title';
import Instructions from '../components/syllabus/Instructions';
import SyllabusListI from '../components/syllabus/SyllabusListI';
import SyllabusListII from '../components/syllabus/SyllabusListII';
import SyllabusListIII from '../components/syllabus/SyllabusListIII';
import SyllabusListIV from '../components/syllabus/SyllabusListIV';
import PitchSession from '../components/syllabus/PitchSession';

import { useNavigate } from 'react-router-dom'

export default function Syllabus() {

    const navigate = useNavigate()

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
                <Button onPress={() => navigate('/week2-menu')} className='mt-[50px] w-[25vh] h-[8vh] md:w-[35vh] md:h-[10vh] xl:w-[45vh] xl:h-[10vh]' size='xs' color="gradient" bordered rounded >
                    <p className='font-tertiary text-xl md:text-2xl xl:text-4xl'><b>Let's Start!</b></p>
                </Button>
            </div>
        </div>
    )
}
