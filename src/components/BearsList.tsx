import { useBearStore } from '@stores/bears/bears.store';
import { WhiteCard } from './shared/cards/WhiteCard';
import { useShallow } from 'zustand/shallow';

export const BearsList = () => {
  const bears = useBearStore(useShallow((s) => s.bears));
  const doNothing = useBearStore((s) => s.doNothing);

  return (
    <WhiteCard centered>
      <h1>Osos</h1>

      <button onClick={doNothing} className="btn">
        Do nothing
      </button>

      {bears.map((b) => (
        <div>{b.name}</div>
      ))}
    </WhiteCard>
  );
};
