import { Input } from '@nextui-org/react';
import theme_img from '../../img/theme.png'
import { TiltWrapper } from '../../hoc/SectionWrapper';
import { useContext } from 'react';
import { Context } from '../../context/appContext';

function Theme() {

    const { store, actions } = useContext(Context);
    const {
        theme,
    } = store.dramatic_basis

    //<Theme title={store.titles[3]} text={theme.def} image={theme_img} example={theme.example} onChange={(e) => actions.handleTheme(e.target.value)} />

    return (
        <div className='rounded-[30px] w-full h-[600px] mt-[50px]'>
            <div className='rounded-[30px] h-[100%]'>
                <img className='rounded-[30px] w-[100%] h-[100%] object-cover object-top' src={theme_img} />
            </div>
            <div className="inner">
                <div className="absolute left-[-38%] top-[45%] min-[400px]:left-[-8%] min-[400px]:top-[40%] sm:left-[8%] sm:top-[48%] lg:left-[18%] lg:top-[48%] xl:left-[27%] xl:top-[48%]">
                    <div className="mx-auto w-[400px] lg:w-[600px] mt-5">
                        <h1 className='text-center text-white font-secondary text-3xl min-[1450px]:text-6xl'><b>{store.titles[4]}</b></h1>
                        <p className='hidden md:flex text-center text-white font-tertiary text-lg lg:text-xl mt-5'>{theme.def}</p>
                    </div>
                    <div className="flex-col justify-center items-center w-[600px] mt-5">
                        <Input onChange={() => actions.handleTheme} className="mx-auto w-[260px] lg:w-[300px] xl:w-[400px] min-[1450px]:w-[460px]" type="text" fullWidth clearable status="default" size="xl" rounded color="secondary" placeholder={store.titles[4]} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TiltWrapper(Theme, "Theme");

