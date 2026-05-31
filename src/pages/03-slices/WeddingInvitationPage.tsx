import { WhiteCard } from '../../components';

export const WeddingInvitationPage = () => {
  return (
    <>
      <h1>Invitación de Boda</h1>
      <p>Zustand segmentado en slices</p>
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
                  <input id="firstName" name="firstName" placeholder="Primer Nombre" type="text" />
                </div>
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label className="mb-3 block text-base font-medium text-[#07074D]">
                    Apellido
                  </label>
                  <input id="lastName" name="lastName" placeholder="Apellido" type="text" />
                </div>
              </div>
            </div>
            <div className="mb-5">
              <label className="mb-3 block text-base font-medium text-[#07074D]">
                ¿Cuántos invitados traerá?
              </label>
              <input
                className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white px-6 py-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                id="guestNumber"
                min="0"
                name="guestNumber"
                placeholder="5"
                type="number"
              />
            </div>

            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label className="mb-3 block text-base font-medium text-[#07074D]">
                    Fecha de evento
                  </label>
                  <input id="eventDate" name="eventDate" type="date" />
                </div>
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label className="mb-3 block text-base font-medium text-[#07074D]">
                    Hora del evento
                  </label>
                  <input id="eventTime" name="eventTime" type="time" />
                </div>
              </div>
            </div>

            <div className="mb-5">
              <label className="mb-3 block text-base font-medium text-[#07074D]">
                ¿Tu también vendrás?
              </label>
              <div className="flex items-center space-x-6">
                <div className="flex items-center">
                  <input className="h-5 w-5" id="radioButton1" name="isComing" type="radio" />
                  <label className="pl-3 text-base font-medium text-[#07074D]">Si</label>
                </div>
                <div className="flex items-center">
                  <input className="h-5 w-5" id="radioButton2" name="isComing" type="radio" />
                  <label className="pl-3 text-base font-medium text-[#07074D]">No</label>
                </div>
              </div>
            </div>

            <div>
              <button>Enviar</button>
            </div>
          </form>
        </div>
      </WhiteCard>
    </>
  );
};
