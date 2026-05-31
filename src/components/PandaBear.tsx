import { useBearStore } from '@stores/bears/bears.store';
import { BearCounter } from './BearCounter';

export const PandaBear = () => {
  const pandaBears = useBearStore((state) => state.pandaBears);
  const increasePandaBears = useBearStore((state) => state.increasePandaBears);

  return (
    <BearCounter
      title="Osos panda"
      value={pandaBears}
      onAdd={() => increasePandaBears(+1)}
      onSubtract={() => increasePandaBears(-1)}
    />
  );
};
