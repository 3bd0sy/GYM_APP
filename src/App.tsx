import { useEffect, useState } from "react";
import { selectedPage } from "./shared/types";
import NavBar from "@/Ccomponent/NavBar/NavBar";
import Home from "./Ccomponent/Home/Home";
import Benefit from "./Ccomponent/Benefit/Benefit";
import OurClasses from "./Ccomponent/OurClasses/OurClasses";
import ContactUs from "./Ccomponent/ContactUs/ContactUs";


function App() {
    const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);
    const [SelectedPage, setSelectedPage] = useState<selectedPage>(selectedPage.Home)
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY === 0) {
                setIsTopOfPage(true);
                setSelectedPage(selectedPage.Home)
            }
            else
                setIsTopOfPage(false)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])
    return (
        <>
            <NavBar isTopOfPage={isTopOfPage} SelectedPage={SelectedPage} setSelectedPage={setSelectedPage} />
            <Home setSelectedPage={setSelectedPage} />
            <Benefit setSelectedPage={setSelectedPage} />
            <OurClasses setSelectedPage={setSelectedPage} />
            <ContactUs setSelectedPage={setSelectedPage} />
        </>
    )
}

export default App