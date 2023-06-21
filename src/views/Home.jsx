import Home_Section1 from '../components/home/Home_Section1'
import Home_Section2 from '../components/home/Home_Section2'
import Home_Section3 from '../components/home/Home_Section3'
import Home_Section4 from '../components/home/Home_Section4'
import Home_hero from '../components/home/Home_hero'

export default function Home() {

    return (
        <div>
            <Home_hero />
            <Home_Section1 />
            <Home_Section2 />
            <Home_Section3 />
            <Home_Section4 />
        </div>
    )
}
