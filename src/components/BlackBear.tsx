import { useBearStore } from '@stores/bears/bears.store';
import { BearCounter } from './BearCounter';

export const BlackBear = () => {
  const blackBears = useBearStore((state) => state.blackBears);
  const increaseBlackBears = useBearStore((state) => state.increaseBlackBears);

  return (
    <BearCounter
      title="Osos negros"
      value={blackBears}
      handleAdd={() => increaseBlackBears(+1)}
      handleSubtract={() => increaseBlackBears(-1)}
    />
  );
};
