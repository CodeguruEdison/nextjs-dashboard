import Link from 'next/link';
import React, { FC, PropsWithChildren } from 'react'
import { ISideBarMenuBarProp } from './sidebar.type'

const SideBarMenuItemBar: FC<PropsWithChildren<ISideBarMenuBarProp>> = (props) => {
    const { menuItems } = props;
    return (
        <>
            {menuItems.map((item, index) => {
                return (
                    <>
                        <Link href='/' key={item.name}>
                            <div className={item.className}>
                                <item.icon size={item.iconSize} />

                            </div>
                        </Link>

                        {item.name === 'Home' && <span className='border-b-[1px] border-gray-200 w-full p-2'></span>}
                    </>
                )
            })}
        </>
    )
}

export default SideBarMenuItemBar