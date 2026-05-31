import { useBearStore } from '@stores/bears/bears.store'
import { WhiteCard } from './shared/cards/WhiteCard'
import { useShallow } from 'zustand/shallow'

export const BearsList = () => {
  const bears = useBearStore(useShallow((s) => s.bears))
  const doNothing = useBearStore((s) => s.doNothing)
  const addBear = useBearStore((s) => s.addBear)
  const clearBears = useBearStore((s) => s.clearBears)

  const handleAddBear = () => {
    const bearId = Math.floor(Math.random() * 1000)

    addBear({
      id: bearId,
      name: `Bears ${bearId}`,
    })
  }
  return (
    <WhiteCard centered>
      <h1>Osos</h1>

      <button className="btn" onClick={doNothing}>
        Do nothing
      </button>

      <button className="btn" onClick={handleAddBear}>
        Add bear
      </button>

      <button className="btn" onClick={clearBears}>
        Clear bears
      </button>

      {bears.map((b) => (
        <div key={b.id}>{b.name}</div>
      ))}
    </WhiteCard>
  )
}
