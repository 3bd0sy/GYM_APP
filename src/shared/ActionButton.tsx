
import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { selectedPage } from './types'

type Props = {
    children: React.ReactNode,
    setSelectedPage: (value: selectedPage) => void

}

const ActionButton = (props: Props) => {
    return (
        <AnchorLink
            className='rounded-md px-10 bg-secondary-500 py-2 hover:bg-primary-500 hover:text-white'
            onClick={() => props.setSelectedPage(selectedPage.Contactus)}
            href='#contactus'
        >
            {props.children}
        </AnchorLink>
    )
}

export default ActionButton