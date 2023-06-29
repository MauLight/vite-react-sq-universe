import { TiltWrapper } from "../../hoc/SectionWrapper";
import { quotes } from "../../utils/quotes"
import quoteIcon from '../../img/quote.svg'

function Quotes() {

    //Get a random integer for random quotes from quotes array.
    const getRandomInt = (length) => Math.floor(Math.random() * length)
    const length = getRandomInt(quotes.length)

    return (
        <div className='h-[350px]'>
            <div className='flex h-[100%]'>
                <div className="bg-black/50 w-full h-full absolute z-40 rounded-[30px]"></div>
                <img className='quotes rounded-[30px] w-[100%] object-cover object-center' src={quotes[length].img} />
            </div>
            <div className="inner">
                <div className="absolute z-50 top-[65%] left-[60%]">
                    <div className="flex w-[70vh] justify-center">
                        <img src={quoteIcon} className="w-[40px] h-[40px] mr-2" />
                        <h1 className=' text-white font-secondary text-xs md:text-lg lg:text-2xl'>{quotes[length].quote}</h1>
                    </div>
                    <div className="flex">
                        <p className='text-white font-tertiary ml-auto ml-auto md:text-xl pl-2' >{quotes[length].author}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TiltWrapper(Quotes, "Quotes")
