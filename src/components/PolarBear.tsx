import { useBearStore } from '@stores/bears/bears.store';
import { BearCounter } from './BearCounter';

export const PolarBear = () => {
  const polarBears = useBearStore((state) => state.polarBears);
  const increasePolarBears = useBearStore((state) => state.increasePolarBears);

  return (
    <BearCounter
      title="Osos negros"
      value={polarBears}
      handleAdd={() => increasePolarBears(+1)}
      handleSubtract={() => increasePolarBears(-1)}
    />
  );
};
