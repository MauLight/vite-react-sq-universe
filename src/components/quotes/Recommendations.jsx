import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom'
import { Button, Text } from "@nextui-org/react";
import { quotes } from "../../utils/quotes"
import { ImageHolder } from "../ImageHolder"
import Tilt from 'react-parallax-tilt'
import arrowLeft from '../../img/arrow to the left.svg'
import arrowRight from '../../img/arrow to the right.svg'

function Recommendations() {

    //Get a random integer for random quotes from quotes array.
    const getRandomInt = (length) => Math.floor(Math.random() * length)
    const length = getRandomInt(quotes.length)

    const navigate = useNavigate()

    const genre = "27"
    const theme = "war"
    const [queries, setQueries] = useState([]);
    const [chunk, setChunk] = useState([]);
    const [initPage, setInitPage] = useState(0)
    const [lastPage, setLastPage] = useState(4);

    //Make a call to TMDB for discovery of movies based on query.
    const getMovieAsync = async () => {
        let url = `https://api.themoviedb.org/3/discover/movie?api_key=9d588f084da0a6ef32713d036b1eda5f&include_adult=true&include_video=false&language=en-US&page=1&with_genres=${genre}&with_keywords=${theme}`
        let options_get = {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        }
        try {
            const response = await fetch(url, options_get);
            const data = await response.json();
            //console.log(data);
            setQueries(data.results)
            handleChunk(data.results)
            console.log(data.results)
            //console.log(data.results)
        }
        catch (error) {
            console.log(error);
        }
    }

    const handleChunk = (data) => {
        let auxArr = []

        if (data.length > 0) {

            for (let i = initPage; i < lastPage; i++) {
                auxArr.push(data[i])
            }
            setChunk(auxArr)
            console.log(chunk)
        }
        else {
            console.log("no data")
        }
    }

    const handleClickLeft = () => {
        if (initPage === 0) {
            setInitPage(16)
            setLastPage(20)
            handleChunk(queries)
        }

        else {
            setInitPage(initPage - 4)
            setLastPage(lastPage - 4)
            handleChunk(queries)
        }
    }

    const handleClickRight = () => {

        if (lastPage === 20) {
            setInitPage(0)
            setLastPage(4)
            handleChunk(queries)
        }
        else {
            setInitPage(initPage + 4)
            setLastPage(lastPage + 4)
            handleChunk(queries)
        }
    }

    useEffect(() => {
        getMovieAsync()
    }, [])

    return (
        <section className="max-w-full mx-auto px-5 md:px-20">
            <div className="flex flex-wrap md:mr-auto my-10">
                <Text className="font-secondary text-xl md:text-3xl xl:text-5xl" weight="bold">Based on your project :</Text>
            </div>
            <div className="flex flex-wrap w-full items-center justify-between">
                <Button onPress={handleClickLeft} className="w-[10px] h-[10px] sm:w-[20px] sm:h-[20px] lg:w-[40px] lg:h-[40px] xl:w-[50px] xl:h-[50px] 2xl:w-[60px] 2xl:h-[60px] p-0 rounded-full" light auto>
                    <img src={arrowLeft} />
                </Button>
                {
                    !!chunk && chunk.map((movie) => (
                        <div key={movie.id}>
                            <Tilt tiltMaxAngleX={2.5} tiltMaxAngleY={2.5} glareEnable={true} glareMaxOpacity={0.15} glareColor={"black"} glareBorderRadius='30px' >
                                <ImageHolder id={movie.id} title={movie.title} logline={movie.overview} img={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
                            </Tilt>
                        </div>
                    ))
                }
                <Button onPress={handleClickRight} className="w-[10px] h-[10px] sm:w-[20px] sm:h-[20px] lg:w-[40px] lg:h-[40px] xl:w-[50px] xl:h-[50px] 2xl:w-[60px] 2xl:h-[60px] p-0 rounded-full" light auto>
                    <img src={arrowRight} />
                </Button>
            </div>
        </section>

    )
}

export default Recommendations
