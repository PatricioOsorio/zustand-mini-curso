import { WhiteCard } from './shared/cards/WhiteCard';

export interface IBearCounterProps {
  title: string;
  value: number;
  handleAdd: () => void;
  handleSubtract: () => void;
}

export const BearCounter = ({ title, value, handleAdd, handleSubtract }: IBearCounterProps) => {
  return (
    <WhiteCard centered>
      <h2>{title}</h2>

      <div className="flex flex-col md:flex-row">
        <button onClick={handleAdd}> +1</button>
        <span className="text-3xl mx-2 lg:mx-10">{value} </span>
        <button onClick={handleSubtract}>-1</button>
      </div>
    </WhiteCard>
  );
};
