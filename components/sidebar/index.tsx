import React, { FC, PropsWithChildren } from 'react'
import { ISideBarProps } from './sidebar.type'

const SideBar: FC<PropsWithChildren<ISideBarProps>> = (props) => {
    const { children } = props
    return (

        <div>SideBar
            <main> {children}</main>
        </div>

    )
}

export default SideBar