import { selectedPage } from "@/shared/types";
import useMediaQuery from '@/hooks/useMediaQuery';
import ActionButton from '@/shared/ActionButton';
import HomePageText from "@/assets/HomePageText.png"
import HomePageGraphic from "@/assets/HomePageGraphic1.png"
import SponsorRedBull from "@/assets/SponsorRedBull.png"
import SponsorForbes from "@/assets/SponsorForbes.png"
import SponsorFortune from "@/assets/SponsorFortune.png"
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";



type Props = {
    setSelectedPage: (value: selectedPage) => void,
}

const Home = (props: Props) => {
    const isAboveMeduimScreen = useMediaQuery("(min-width: 1060px)")
    return (
        <section
            id="home"
            className="gap-16 py-10 pt-20 bg-gray-50 md:h-full md:pb-0 bg-white"
        >
            {/**main header */}
            <motion.div
                className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6 "
                onViewportEnter={() => props.setSelectedPage(selectedPage.Home)}
            >
                {/**heading */}
                <div className="flex flex-col">
                    <motion.div
                        className="z-10 mt-32 md:basis-3/5"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        transition={{ duration: 1.5 }}
                        variants={{
                            hidden: { opacity: 0, x: -100 },
                            visible: { opacity: 1, x: 0 },
                        }}

                    >
                        <div className=" md:-mt-20">
                            <div className="relative">
                                <div
                                    className=" before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext"
                                >
                                    <img src={HomePageText} alt="" />
                                </div>
                            </div>
                            <p className="mt-8 text-sm">
                                Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
                                Studios to get the Body Shapes That you Dream of.. Get Your Dream
                                Body Now.
                            </p>
                        </div>
                    </motion.div>

                    {/**Actions */}
                    <motion.div
                        className="mt-8 flex items-center gap-8 md:basis-3/5"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        transition={{ delay: 0.2, duration: 1.5 ,}}
                        variants={{
                            hidden: { opacity: 0, y: +100 },
                            visible: { opacity: 1, y: 0 },
                        }}
                    >
                        <ActionButton setSelectedPage={props.setSelectedPage}>
                            Join Now
                        </ActionButton>
                        <AnchorLink
                            className="underline text-sm text-primary-500 font-bold hover:text-secondary-500"
                            onClick={() => props.setSelectedPage(selectedPage.Contactus)}
                            href={`#${selectedPage.Contactus}`}
                        >
                            <p>Learn More</p>
                        </AnchorLink>
                    </motion.div>
                </div>
                {/**Image */}
                <div className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end">
                    <motion.img
                        className="mt-8 flex items-center gap-8 md:basis-3/5"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        transition={{ duration: 1.5 }}
                        variants={{
                            hidden: { opacity: 0, y: +100 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        src={HomePageGraphic} alt="" />
                </div>
            </motion.div>

            {/**sponsors */}
            {
                isAboveMeduimScreen && (

                    <div className="w-full h-[150px] ">
                        <div className="mx-auto">
                            <div className="flex  gap-44 align-middle items-center justify-center mt-24">
                                <img src={SponsorForbes} alt="" />
                                <img src={SponsorFortune} alt="" />
                                <img src={SponsorRedBull} alt="" />
                            </div>
                        </div>
                    </div>
                )
            }
        </section>
    )
}

export default Home