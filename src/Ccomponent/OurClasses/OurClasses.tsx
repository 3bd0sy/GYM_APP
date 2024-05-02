import { selectedPage } from '@/shared/types'
import img1 from "@/assets/image1.jpeg"
import img2 from "@/assets/image2.jpg"
import img3 from "@/assets/image3.jpeg"
import img4 from "@/assets/image4.jpeg"
import img5 from "@/assets/image5.png"
import img6 from "@/assets/image6.png"
import { motion } from 'framer-motion'
import HText from '@/shared/HText'


type Props = { setSelectedPage: (value: selectedPage) => void }

interface classesType {
    name: string,
    description?: string,
    image: string
}

const OurClasses = (props: Props) => {
    const OurClasses: Array<classesType> = [
        {
            name: "Weight Training Classes",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            image: img1,
        },
        {
            name: "Yoga Classes",
            image: img2,
        },
        {
            name: "Ab Core Classes",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            image: img3,
        },
        {
            name: "Adventure Classes",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            image: img4,
        },
        {
            name: "Fitness Classes",
            image: img5,
        },
        {
            name: "Training Classes",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            image: img6,
        },
    ]
    const overlayStyle = `p-5 absolute z-30 flex
    h-[380px] w-[450px] flex-col items-center justify-center
    whitespace-normal bg-primary-500 text-center text-white
    opacity-0 transition duration-500 hover:opacity-80`

    return (
        <section id='ourclasses' className='w-full bg-primary-100 py-40'>
            <motion.div onViewportEnter={() => props.setSelectedPage(selectedPage.OurClasses)}>
                <motion.div
                    className='mx-auto w-5/6'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ delay: 0.2, duration: 1.5, }}
                    variants={{
                        hidden: { opacity: 0, y: +100 },
                        visible: { opacity: 1, y: 0 },
                    }}
                >
                    <div className='md:w-3/5'>
                        <HText>
                            OUR CLASSES
                        </HText>
                        <p className='py-5'>
                            Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
                            tellus quam porttitor. Mauris velit euismod elementum arcu neque
                            facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit
                            enim mattis odio in risus nunc.
                        </p>
                    </div>
                </motion.div>

                <div className='mt-10 h-[350px] w-full overflow-x-auto overflow-y-hidden'>
                    <ul className='w-[2800px] whitespace-nowrap'>
                        {
                            OurClasses.map((element) => (
                                <li className='relative mx-5 inline-block h-[380px] w-[450px]'>
                                    <div className={overlayStyle}>
                                        <p className='text-2xl'>{element.name}</p>
                                        <p className='mt-5'>{element.description}</p>
                                    </div>
                                    <img src={element.image} alt="" />
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </motion.div>
        </section>
    )
}

export default OurClasses