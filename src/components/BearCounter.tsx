import { WhiteCard } from './shared/cards/WhiteCard'

export interface IBearCounterProps {
  title: string
  value: number
  onAdd: () => void
  onSubtract: () => void
}

export const BearCounter = ({ title, value, onAdd, onSubtract }: IBearCounterProps) => {
  return (
    <WhiteCard centered>
      <h2>{title}</h2>

      <div className="flex flex-col md:flex-row">
        <button onClick={onAdd}> +1</button>
        <span className="mx-2 text-3xl lg:mx-10">{value} </span>
        <button onClick={onSubtract}>-1</button>
      </div>
    </WhiteCard>
  )
}
