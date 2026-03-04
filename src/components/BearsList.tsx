import { useBearStore } from '@stores/bears/bears.store';
import { WhiteCard } from './shared/cards/WhiteCard';
import { useShallow } from 'zustand/shallow';

export const BearsList = () => {
  const bears = useBearStore(useShallow((s) => s.bears));
  const doNothing = useBearStore((s) => s.doNothing);
  const addBear = useBearStore((s) => s.addBear);
  const clearBears = useBearStore((s) => s.clearBears);

  const handleAddBear = () => {
    const bearId = Math.floor(Math.random() * 1000);

    addBear({
      id: bearId,
      name: `Bears ${bearId}`,
    });
  };
  return (
    <WhiteCard centered>
      <h1>Osos</h1>

      <button onClick={doNothing} className="btn">
        Do nothing
      </button>

      <button onClick={handleAddBear} className="btn">
        Add bear
      </button>

      <button onClick={clearBears} className="btn">
        Clear bears
      </button>

      {bears.map((b) => (
        <div key={b.id}>{b.name}</div>
      ))}
    </WhiteCard>
  );
};
