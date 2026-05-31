import { useBearStore } from '@stores/bears/bears.store';
import { BearCounter } from './BearCounter';

export const BlackBear = () => {
  const blackBears = useBearStore((state) => state.blackBears);
  const increaseBlackBears = useBearStore((state) => state.increaseBlackBears);

  return (
    <BearCounter
      title="Osos negros"
      value={blackBears}
      onAdd={() => increaseBlackBears(+1)}
      onSubtract={() => increaseBlackBears(-1)}
    />
  );
};
