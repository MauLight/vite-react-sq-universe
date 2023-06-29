
export const ImageHolder = ({ title, logline, id, img, position }) => {
    return (
        <div key={id} className='mx-auto w-[8vh] h-[13vh] sm:w-[20vh] sm:h-[30vh] lg:w-[30vh] lg:h-[45vh] min-[1400px]:w-[280px] min-[1400px]:h-[420px] object-contain object-center rounded-[10px] group relative overflow-hidden'>
            {/* overlay */}
            <div className='group-hover:bg-black/60 w-full h-full absolute z-40 transition-all duration-300'></div>
            {/* img */}
            <img className={`mx-auto w-[100%] h-[100%] object-cover ${position} rounded-[15px] group-hover:scale-125 group-hover:grayscale-0 transition-all duration-500`} src={img} alt='' />
            {/* pretitle */}
            <div className="flex">
                <div className='absolute -bottom-full left-12 text-white font-secondary group-hover:bottom-6 transition-all duration-500 z-50'>{`${title}`}</div>
                {/* title */}
            </div>
            <div className='absolute -bottom-full left-2 px-10 group-hover:bottom-14 transition-all duration-700 z-50'><span className=' text-xs font-tertiary text-white'>{logline}</span></div>
        </div>
    )
}