export interface ITopCard {
  title: string
  amount: number
  percentage: number
  cssClassName: string
}

export type TTopCards = ITopCard[]
export interface ITopCardsProps {
  cardInfo: ITopCard
}
export interface ITopCardsProps {
  topCards: TTopCards
}
export const topCardData: TTopCards = [
  {
    title: 'Daily Revenue',
    amount: 1000,
    percentage: 18,
    cssClassName:
      'lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg',
  },
  {
    title: 'YTD Revenue',
    amount: 1000,
    percentage: 18,
    cssClassName:
      'lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg',
  },
  {
    title: 'Customers',
    amount: 1000,
    percentage: 18,
    cssClassName: 'bg-white flex justify-between w-full border p-4 rounded-lg',
  },
]
