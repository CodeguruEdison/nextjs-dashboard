import React, { FC, PropsWithChildren } from 'react'
import { ITopCardsProps } from './topcard.type'

const TopCard: FC<PropsWithChildren<ITopCardsProps>> = (props) => {
    const { cardInfo: { title, amount, percentage, cssClassName } } = props
    return (
        <div className={cssClassName} >
            <div className='flex flex-col w-full pb-4' >
                <p className='text-2xl font-bold'>${amount}</p>
                <p className='text-gray-600'>{title}</p>
            </div>
            <p className='bg-green-200 flex justify-center items-center p-2  rounded-lg'>
                <span className='text-green-700 text-lg'>{percentage}%</span>
            </p>
        </div>
    )
}

export default TopCard