import { selectedPage } from '@/shared/types'
import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

type Props = {
    page: string,
    SelectedPage: selectedPage,
    setSelectedPage: (value: selectedPage) => void
}

const Link = (props: Props) => {
    const LowerCasePage = props.page.toLowerCase().replace(/ /g, "") as selectedPage
    return (
        <AnchorLink
            className={`${props.SelectedPage === LowerCasePage ? "text-primary-500" : ""} transition duration-500 hover:text-primary-300`}
            href={`#${LowerCasePage}`}
            onClick={() => props.setSelectedPage(LowerCasePage)}
        >
            {props.page}
        </AnchorLink>
    )
}

export default Link