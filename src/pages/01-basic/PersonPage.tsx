import { WhiteCard } from '@components/shared/cards/WhiteCard'
import { usePersonState } from '@stores/person/person.store'

export const PersonPage = () => {
  const firstName = usePersonState((s) => s.firstName)
  const lastName = usePersonState((s) => s.lastName)

  const setFirstName = usePersonState((s) => s.setFirstName)
  const setLastName = usePersonState((s) => s.setLastName)

  return (
    <>
      <h1>Persona</h1>
      <p>Información que se compartirá a otro store, Session Storage y Firebase</p>
      <hr />

      <WhiteCard className="flex items-center justify-center p-12">
        <div className="mx-auto w-full max-w-[550px]">
          <form>
            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label className="mb-3 block text-base font-medium text-[#07074D]">
                    Primer Nombre
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    placeholder="Primer Nombre"
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label className="mb-3 block text-base font-medium text-[#07074D]">
                    Apellido
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    placeholder="Apellido"
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <pre className="rounded-[20px] bg-gray-200 p-5">
              {JSON.stringify(
                {
                  firstName,
                  lastName,
                },
                null,
                2,
              )}
            </pre>
          </form>
        </div>
      </WhiteCard>
    </>
  )
}
