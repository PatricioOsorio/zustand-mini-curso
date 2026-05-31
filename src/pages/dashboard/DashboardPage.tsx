import {
  IoAccessibilityOutline,
  IoHeartOutline,
  IoListOutline,
  IoLockClosedOutline,
  IoPawOutline,
} from 'react-icons/io5'
import { WhiteCard } from '../../components'
import { useBearStore } from '@stores/bears/bears.store'
import { usePersonState } from '@stores/person/person.store'

export const Dashboard = () => {
  const totalBears = useBearStore((s) => s.totalBears)
  const firstName = usePersonState((s) => s.firstName)

  return (
    <>
      <h1>Dashboard</h1>
      <p>Información colectiva de varios stores de Zustand</p>
      <hr />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <WhiteCard centered>
          <IoPawOutline className="text-indigo-600" size={50} />
          <h2>Osos</h2>
          <p>{totalBears()}</p>
        </WhiteCard>

        <WhiteCard centered>
          <IoAccessibilityOutline className="text-indigo-600" size={50} />
          <h2>Persona</h2>
          <p>{firstName}</p>
        </WhiteCard>

        <WhiteCard centered>
          <IoListOutline className="text-indigo-600" size={50} />
          <h2>Tareas</h2>
          <p>Información</p>
        </WhiteCard>

        <WhiteCard centered>
          <IoHeartOutline className="text-indigo-600" size={50} />
          <h2>Boda</h2>
          <p>Información</p>
        </WhiteCard>

        <WhiteCard centered>
          <IoLockClosedOutline className="text-indigo-600" size={50} />
          <h2>Auth</h2>
          <p>Información</p>
        </WhiteCard>
      </div>
    </>
  )
}
