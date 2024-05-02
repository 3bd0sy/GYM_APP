import { selectedPage } from '@/shared/types'
import { motion } from 'framer-motion'
import img from "@/assets/ContactUsPageGraphic.png"

type Props = { setSelectedPage: (value: selectedPage) => void }

const ContactUs = (props: Props) => {
    const inputStyle: string = "bg-primary-500 placeholder:text-white text-sm h-9 text-white rounded-md pl-4"
    return (
        <section
            className='w-5/6 mx-auto py-24 '
            id="contactus"
        >
            <motion.div onViewportEnter={() => props.setSelectedPage(selectedPage.Contactus)}>
                <div>
                    <h3 className='text-xl'> <span className="text-primary-500">JOIN NOW</span> TO GET IN SHAPE</h3>
                    <p className='pt-4 w-2/3' > Congue adipiscing risus commodo placerat. Tellus et in feugiat nisl
                        sapien vel rhoncus. Placerat at in enim pellentesque. Nulla
                        adipiscing leo egestas nisi elit risus sit. Nunc cursus sagittis.</p>
                </div>
                <div className='mt-7 flex flex-col md:flex-row gap-4 '>
                    <div className='flex flex-col gap-5 md:w-2/3'>
                        <input className={`${inputStyle}`} type="text" name="" placeholder='NAME' id="" />
                        <input className={`${inputStyle}`} type="text" name="" placeholder='EMAIL' id="" />
                        <textarea className={`${inputStyle.replace("h-9", "")}`} id="w3review" name="w3review" style={{ resize: "none" }} rows={5} cols={50} />
                        <button
                            type="submit"
                            className="mt-5 w-[150px] text-center rounded-lg bg-secondary-500  py-3 transition duration-500 hover:text-white"
                        >
                            SUBMIT
                        </button>
                        <div className='hidden text-primary-50 md:block text-8xl mx-auto font-montserrat font-bold' >EVOGYM </div>
                    </div>
                    <img className='md:w-1/3 max-h-[450px] rounded-lg' src={img} alt="" />
                </div>
            </motion.div>
        </section>
    )
}

export default ContactUs