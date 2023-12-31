import { useContext } from "react"
import { DramaticWrapper } from "../../hoc/SectionWrapper"
import Tilt from 'react-parallax-tilt'
import { Context } from "../../context/appContext"
import { Input, Textarea } from "@nextui-org/react";

import concept from '../../img/concept.jpg'
import value from '../../img/value.jpg'
import genreImg from '../../img/genre.jpg'

const ImageHolder = ({ title, example, img }) => {
    return (
        <div className='mx-auto hidden lg:flex w-[45vh] h-[45vh] xl:w-[70vh] xl:h-[70vh] object-cover object-center rounded-[30px] group relative overflow-hidden'>
            {/* overlay */}
            <div className='group-hover:bg-black/60 w-full h-full absolute z-40 transition-all duration-300'></div>
            {/* img */}
            <img className='mx-auto w-[100%] h-[100%] object-cover object-center rounded-[30px] group-hover:scale-125 transition-all duration-500' src={img} alt='' />
            {/* pretitle */}
            <div className='absolute -bottom-full left-12 text-lg lg:text-2xl text-white font-secondary group-hover:bottom-6 transition-all duration-500 z-50'>{title}</div>
            {/* title */}
            <div className='absolute -bottom-full font-tertiary left-2 px-10 group-hover:bottom-14 transition-all duration-700 z-50'><span className='text-md lg:text-xl text-white'>{example}</span></div>
        </div>
    )
}

function DramaCard({ title, text, image, example, onChange }) {

    return (
        <div className='rounded-[30px] w-[100%] h-[600px] flex justify-center items-center'>
            <div className="text w-full xl:w-[50%] mx-auto px-[20px] sm:px-[80px]">
                <h1 className="text-white font-secondary text-lg md:text-xl lg:text-4xl mb-5">{title}</h1>
                <p className="text-white font-tertiary text-sm md:text-md lg:text-xl">{text}</p>
                <div className="pr-7">
                    <Input onChange={onChange} className="mt-10 w-[100%]" type="text" fullWidth clearable status="default" size="xl" rounded color="secondary" placeholder={title} />
                </div>
            </div>
            <div className="flex mx-auto">
                <Tilt tiltMaxAngleX={1} tiltMaxAngleY={1} glareEnable={true} glareMaxOpacity={0.55} glareColor={"white"} glareBorderRadius='30px' >
                    <ImageHolder img={image} title={title} example={example} />
                </Tilt>
            </div>
        </div>
    )
}

function DramaCard2({ title, text, image, example, onChange }) {

    return (
        <div className='rounded-[30px] w-[100%] h-[600px] flex justify-center items-center'>
            <div className="flex mx-auto">
                <Tilt tiltMaxAngleX={1} tiltMaxAngleY={1} glareEnable={true} glareMaxOpacity={0.55} glareColor={"white"} glareBorderRadius='30px' >
                    <ImageHolder img={image} title={title} example={example} />
                </Tilt>
            </div>
            <div className="text w-full xl:w-[50%] mx-auto px-[20px] sm:px-[80px]">
                <h1 className="text-white font-secondary text-lg md:text-xl lg:text-4xl mb-5">{title}</h1>
                <p className="text-white font-tertiary text-sm md:text-md lg:text-xl">{text}</p>
                <div className="pr-8">
                    <Input onChange={onChange} className="mt-10 w-[100%]" type="text" fullWidth clearable status="default" size="xl" rounded color="secondary" placeholder={title} />
                </div>
            </div>
        </div>
    )
}

const MythCard = () => {
    const { store, actions } = useContext(Context);
    const { concept_idea,
        community_value,
        genre,
    } = store.dramatic_basis


    return (
        <>
            <DramaCard title={store.titles[0]} text={concept_idea.def} image={concept} example={concept_idea.example} onChange={(e) => actions.handleConcept(e.target.value)} />
            <DramaCard2 title={store.titles[1]} text={genre.def} image={genreImg} example={genre.example} onChange={(e) => actions.handleGenre(e.target.value)} />
            <DramaCard title={store.titles[2]} text={community_value.def} image={value} example={community_value.example} onChange={(e) => actions.handleValue(e.target.value)} />
        </>
    )

}

export default DramaticWrapper(MythCard, "MythCard"); 
