import React, { FC, PropsWithChildren } from 'react'
import { ISideBarProps, navMenuItems } from './sidebar.type'
import SideBarMenuItemBar from './sidebarMenuBar';


const SideBar: FC<PropsWithChildren<ISideBarProps>> = (props) => {
    const { children } = props
    return (

        <div className='flex'>
            <div className='fixed w-20 h-screen p-4 bg-white border-r-[1px] flex flex-col justify-between'>
                <div className='flex flex-col items-center'>
                    <SideBarMenuItemBar menuItems={navMenuItems} />
                </div>
            </div>
            <main className='ml-20 w-full'> {children}</main>
        </div >

    )
}

export default SideBar