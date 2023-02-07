import { IconType } from 'react-icons/lib/esm/iconBase'
import { RxDashboard, RxPerson, RxSketchLogo } from 'react-icons/rx'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import { FiSettings } from 'react-icons/fi'

export interface ISideBarProps {}

export interface ISideBarLinks {
  name: string
  url: string
  icon: IconType
  iconSize?: number
  className?: string
}
export type TSideBarLinks = ISideBarLinks[]
export interface ISideBarMenuBarProp {
  menuItems: TSideBarLinks
}

export const navMenuItems: ISideBarLinks[] = [
  {
    name: 'Home',
    url: '/',
    icon: RxSketchLogo,
    iconSize: 20,
    className: 'bg-purple-800 text-white p-3 rounded-lg inline-block',
  },
  {
    name: 'DashBoard',
    url: '/dashboard',
    icon: RxDashboard,
    iconSize: 20,
    className:
      'bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block',
  },
  {
    name: 'Persons',
    url: '/customers',
    icon: RxPerson,
    iconSize: 20,
    className:
      'bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block',
  },
  {
    name: 'Shopping Bag',
    url: '/orders',
    icon: HiOutlineShoppingBag,
    iconSize: 20,
    className:
      'bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block',
  },
  {
    name: 'Settings',
    url: '/',
    icon: FiSettings,
    iconSize: 20,
    className:
      'bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block',
  },
]
