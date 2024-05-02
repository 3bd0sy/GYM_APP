import { selectedPage } from '@/shared/types'
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from '@heroicons/react/24/solid'
import { motion } from 'framer-motion'
import HText from '@/shared/HText'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import BenefitImg from "@/assets/BenefitsPageGraphic11.png"
import ActionButton from '@/shared/ActionButton'
type Props = {
    setSelectedPage: (value: selectedPage) => void
}
type BenefitOBJ = {
    icon: JSX.Element,
    title: string,
    description: string
}
const Benefit = (props: Props) => {
    const benefitData: Array<BenefitOBJ> = [
        {
            icon: <HomeModernIcon className='h-6 w-6 ' />,
            title: "State of Art Facilities",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
        },
        {
            icon: <UserGroupIcon className='h-6 w-6 ' />,
            title: "100's of Diverse Classes",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
        },
        {
            icon: <AcademicCapIcon className='h-6 w-6 ' />,
            title: "Expert and Pro Trainers",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
        }
    ]



    return <section
        id='benefits'
        className='mx-auto min-h-full w-5/6 py-20'
    >
        <motion.div
            onViewportEnter={() => props.setSelectedPage(selectedPage.Benefits)}
        >
            {/**header */}
            <div className='md:w-3/5 md:my-5' >
                <HText>More Than Just a GYM.</HText>
                <p className='my-5 text-sm'>
                    We provide world class fitness equipment, trainers and classes to
                    get you to your ultimate fitness goals with ease. We provide true
                    care into each and every member.
                </p>
            </div>

            {/**benefit */}
            <motion.div
                className='md:flex mt-5 justify-between gap-8 items-center'
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                transition={{ delay: 0.2, duration: 1.5, }}
                variants={{
                    hidden: { opacity: 0, y: +100 },
                    visible: { opacity: 1, y: 0 },
                }}
            >
                {benefitData.map((element) => (
                    <div className='items-center justify-center mt-5 px-5 py-16 border-2 border-gray-100 rounded-md'>
                        <div className='flex mx-auto w-10 h-10 my-4 items-center justify-center bg-primary-100 rounded-full'>
                            {element.icon}
                        </div>
                        <h1 className='font-bold text-center'>{element.title}</h1>
                        <p className='my-4 text-center ' >{element.description}</p>
                        <AnchorLink
                            className="underline items-start flex justify-center  text-sm text-primary-500 font-bold hover:text-secondary-500"
                            onClick={() => props.setSelectedPage(selectedPage.Contactus)}
                            href={`#${selectedPage.Contactus}`}
                        >
                            <p>Learn More</p>
                        </AnchorLink>
                    </div>
                ))}

            </motion.div>


            {/**Graphics and descrpion */}
            <div className='md:flex md:mt-28 my-10 gap-20 items-start justify-between'>
                {/**GRaphics  */}
                <motion.img 
                className='mx-auto' 
                src={BenefitImg} alt=""
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                transition={{ delay: 0.2, duration: 1.5, }}
                variants={{
                    hidden: { opacity: 0, x: -100 },
                    visible: { opacity: 1, x: 0 },
                }}
                 />
                {/**Descrption */}
                <motion.div 
                className='mt-10'
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                transition={{ delay: 0.2, duration: 1.5, }}
                variants={{
                    hidden: { opacity: 0, x: +100 },
                    visible: { opacity: 1, x: 0 },
                }}
                >
                    {/**title */}
                    <div className='relative'>
                        <div className='before:absolute before:-top-20 before:-left-20 before:z-[-1] before:content-abstractwaves'>
                            <div>
                                <HText>MILLIONS OF HAPPY MEMBERS GETTING{" "}
                                    <span className="text-primary-500">FIT</span></HText>
                            </div>
                        </div>
                    </div>

                    {/**desc */}
                    <div>
                        <p className="my-5">
                            Nascetur aenean massa auctor tincidunt. Iaculis potenti amet
                            egestas ultrices consectetur adipiscing ultricies enim. Pulvinar
                            fames vitae vitae quis. Quis amet vulputate tincidunt at in
                            nulla nec. Consequat sed facilisis dui sit egestas ultrices
                            tellus. Ullamcorper arcu id pretium sapien proin integer nisl.
                            Felis orci diam odio.
                        </p>
                        <p className="mb-5">
                            Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
                            tellus quam porttitor. Mauris velit euismod elementum arcu neque
                            facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit
                            enim mattis odio in risus nunc.
                        </p>
                    </div>

                    <div>
                        <ActionButton setSelectedPage={props.setSelectedPage}>
                            Join Now
                        </ActionButton>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    </section >
}

export default Benefit