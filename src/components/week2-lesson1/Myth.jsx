import { useContext } from 'react';
import { TiltWrapper } from '../../hoc/SectionWrapper';
import myth_img from '../../img/myth.png'
import { Context } from '../../context/appContext';
import { Button, Input, Text } from '@nextui-org/react';


function Myth() {

    const { store, actions } = useContext(Context);

    console.log(store.concept)

    const {
        myth,
    } = store.dramatic_basis

    return (
        <div className='rounded-[30px] w-full h-[600px]'>
            <div className='rounded-[30px] h-[100%]'>
                <img className='rounded-[30px] w-[100%] h-[100%] object-cover object-top' src={myth_img} />
            </div>
            <div className="inner">
                <div className="absolute left-[-38%] top-[45%] min-[400px]:left-[-8%] min-[400px]:top-[40%] sm:left-[12%] sm:top-[20%] lg:left-[22%] lg:top-[15%] xl:left-[27%] xl:top-[15%]">
                    <div className="mx-auto w-[400px] lg:w-[600px] mt-5">
                        <h1 className='text-center text-black font-secondary text-3xl min-[1450px]:text-6xl'><b>{store.titles[3]}</b></h1>
                        <p className='hidden md:flex text-center text-black font-tertiary text-lg lg:text-xl min-[1450px]:text-2xl mt-5'>{myth.def}</p>
                    </div>
                    <div className="hidden md:flex justify-center items-center w-[600px] mt-5">
                        <Text className='text-lg lg:text-2xl min-[1450px]:text-4xl' css={{ textGradient: "45deg, $blue600 -20%, $pink600 50%" }}>{store.concept}</Text>
                        <Text className='mx-3 text-lg lg:text-2xl min-[1450px]:text-4xl'>+</Text>
                        <Text className='text-lg lg:text-2xl min-[1450px]:text-4xl' css={{ textGradient: "45deg, $blue600 -20%, $pink600 50%" }}>{store.value}</Text>
                    </div>
                    <div className="flex-col justify-center items-center w-[600px] mt-5">
                        <Input onChange={() => actions.handleMyth} className="mx-auto w-[260px] lg:w-[300px] xl:w-[400px] min-[1450px]:w-[460px]" type="text" fullWidth clearable status="default" size="xl" rounded color="secondary" placeholder={store.titles[2]} />
                        <Button className='px-5 my-5 mx-auto' shadow ghost rounded size="lg" color="gradient" auto>
                            <p className='text-black font-tertiary text-2xl' >Save</p>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TiltWrapper(Myth, "Myth");