import image from '../img/logo.26_nov.png'
import Hamburger from 'hamburger-react';
import { TiltWrapper } from '../hoc/SectionWrapper';
import { Popover, Button, Text } from '@nextui-org/react';
import { UserAuth } from '../context/authContext';
import { Link, useNavigate } from 'react-router-dom';

const Nav = () => {

    const { googleSignIn, logOut, user } = UserAuth()
    const navigate = useNavigate()

    const handleSignIn = async () => {
        try {
            await googleSignIn()
        }
        catch (error) {
            console.log(error)
        }
    }

    const handleSignOut = async () => {
        try {
            await logOut()
        } catch (error) {
            console.log(error)
        }
    }

    const style = {
        width: '310px',
        paddingBottom: '10px',
    }

    return (
        <div className="flex items-center justify-end sm:justify-between w-[100%] bg-white">
            <a href="/" className='pl-2 pt-2 hidden sm:flex'>
                <img src={image} style={style} alt="logo" />
            </a>
            <nav>
                <section className="MOBILE-MENU flex items-center">
                    <div className="icons items-center">
                        <ul className="DESKTOP-MENU flex gap-5 pt-[10px]">
                            <li>
                                <a href="/">
                                    <i className="text-xl fa-solid fa-magnifying-glass"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/screenwriters.quest/">
                                    <i className="text-xl fa-brands fa-instagram"></i>
                                </a>
                            </li>
                            <li>
                                {
                                    user?.displayName ?
                                        (
                                            <Popover>
                                                <Popover.Trigger>
                                                    <button>
                                                        <i className="text-xl text-black fa-regular fa-user"></i>
                                                    </button>
                                                </Popover.Trigger>
                                                <Popover.Content>
                                                    <ul className='px-5'>
                                                        <li className="border-gray-400 my-8 uppercase">
                                                            <button onClick={() => navigate('/account')}>
                                                                <div className='flex'>
                                                                    <i className="text-xl text-black fa-regular fa-user mx-2 pt-[4px]"></i>
                                                                    <Text p size={20}>Profile</Text>
                                                                </div>
                                                            </button>
                                                        </li>
                                                        <li className="border-gray-400 my-8 uppercase">
                                                            <button onClick={handleSignOut}>
                                                                <div className='flex'>
                                                                    <i className="fa-solid fa-right-from-bracket mx-2 py-[11px]"></i>
                                                                    <Text p size={20}>Sign Out</Text>
                                                                </div>
                                                            </button>
                                                        </li>
                                                    </ul>
                                                </Popover.Content>
                                            </Popover>

                                        )
                                        :
                                        (
                                            <button onClick={handleSignIn}>
                                                <i className="text-xl fa-regular fa-user"></i>
                                            </button>
                                        )
                                }
                            </li>
                        </ul>
                    </div>
                    <div className="HAMBURGER-ICON flex flex-wrap w-[50px] h-[50px] ml-3">
                        <Popover>
                            <Popover.Trigger>
                                <button>
                                    <Hamburger color='black' size={25} duration={0.8} />
                                </button>

                            </Popover.Trigger>
                            <Popover.Content>
                                <ul className='mx-10 my-3'>
                                    <li>
                                        <Link to="/quest-menu" className='font-tertiary font-bold'>The Quest</Link>
                                    </li>
                                    <li>
                                        <a href='https://sq-universe.netlify.app/'>SQ-Universe</a>
                                    </li>
                                </ul>
                            </Popover.Content>
                        </Popover>
                    </div>
                </section>
            </nav>

        </div>
    )
};

export default TiltWrapper(Nav, "Navbar");
