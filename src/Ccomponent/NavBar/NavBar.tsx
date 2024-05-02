import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"
import Logo from "@/assets/Logo.png"
import Link from "./Link";
import { selectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";


type Props = {
    SelectedPage: selectedPage,
    setSelectedPage: (value: selectedPage) => void,
    isTopOfPage: boolean
}
const NavBar = (props: Props) => {
    const flexBetween: string = "flex items-center justify-between"
    const isAboveMeduimScreen = useMediaQuery("(min-width: 1060px)")
    const [isMenuToggeld, setIsMenuToggeld] = useState<boolean>(false)
    return (
        <nav>
            <div className={`${flexBetween} fixed top-0 z-30 w-full py-6 ${props.isTopOfPage?"":"bg-primary-100 drop-shadow"}`}>
                <div className={`${flexBetween} mx-auto     w-5/6`}>
                    <div className={`${flexBetween} w-full gap-16`}>
                        {/* Left Side */}
                        <img src={Logo} alt="logo" />


                        {/* Right Side */}
                        {isAboveMeduimScreen
                            ? (
                                <div className={`${flexBetween} w-full`}>
                                    <div className={`${flexBetween} gap-8 text-sm`}>
                                        <Link
                                            page="Home"
                                            SelectedPage={props.SelectedPage}
                                            setSelectedPage={props.setSelectedPage}
                                        />
                                        <Link
                                            page="Benefits"
                                            SelectedPage={props.SelectedPage}
                                            setSelectedPage={props.setSelectedPage}
                                        />
                                        <Link
                                            page="Our Classes"
                                            SelectedPage={props.SelectedPage}
                                            setSelectedPage={props.setSelectedPage}
                                        />
                                        <Link
                                            page="Contact Us"
                                            SelectedPage={props.SelectedPage}
                                            setSelectedPage={props.setSelectedPage}
                                        />
                                    </div>
                                    <div className={`${flexBetween} gap-8 `}>
                                        <p>Sing In</p>
                                        <ActionButton setSelectedPage={props.setSelectedPage}>
                                            Become a Member
                                        </ActionButton>
                                    </div>
                                </div>
                            ) :
                            <button className="rounded-full bg-secondary-500 p-2"
                                onClick={() => setIsMenuToggeld(!isMenuToggeld)}>
                                <Bars3Icon className="h-6 w-6 text-white" />
                            </button>
                        }
                    </div>
                </div>
            </div>


            {/*Mobile menu*/}
            {!isAboveMeduimScreen && isMenuToggeld && (
                <div className="fixed bottom-0 right-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
                    <div className="flex justify-end p-12">
                        <button onClick={() => setIsMenuToggeld(!isMenuToggeld)}>
                            <XMarkIcon className="h-6 w-6 text-gray-400" />
                        </button>
                    </div>


                    <div className={`ml-[33%] flex flex-col text-2xl gap-10`}>
                        <Link
                            page="Home"
                            SelectedPage={props.SelectedPage}
                            setSelectedPage={props.setSelectedPage}
                        />
                        <Link
                            page="Benefits"
                            SelectedPage={props.SelectedPage}
                            setSelectedPage={props.setSelectedPage}
                        />
                        <Link
                            page="Our Classes"
                            SelectedPage={props.SelectedPage}
                            setSelectedPage={props.setSelectedPage}
                        />
                        <Link
                            page="Contact Us"
                            SelectedPage={props.SelectedPage}
                            setSelectedPage={props.setSelectedPage}
                        />
                    </div>
                </div>
            )}

        </nav>
    )
}

export default NavBar