import { Button } from '@/view/components/ui/button';
import { Cross1Icon, PlusIcon } from '@radix-ui/react-icons';
import { AddVacationDropdownMenu } from './components/add-vaction-dropdown';
import { useHomeController } from './useHomeController';

export function Home() {
  const { openAddNewVacation, setOpenAddNewVacation } = useHomeController();

  return (
    <main className="bg-bg/80 w-full h-screen">
      <section className="flex items-center justify-center flex-col w-full bg-hero-img bg-cover bg-no-repeat h-full px-8 md:px-36 relative">
        <div className="flex items-center justify-center flex-col space-y-6  pb-6">
          <h1 className="text-7xl max-w-4xl max-md:text-6xl font-bold text-center text-white drop-shadow">
            What's your plan for this {'\n'}
            <span className="underline text-heading italic">vacation?</span>
          </h1>
          <span className="text-bg font-medium text-center max-md:text-2xl text-3xl">With this app, you can plan your next trip with ease and peace of mind.</span>
        </div>
        <div className="w-full flex items-center justify-center flex-col">
          <div className="w-full flex items-center justify-center pt-6 gap-4 max-lg:flex-col max-lg:w-full">
            <div className="w-full">
              <input
                className="w-full py-3 px-4 border-2 rounded-xl bg-bg/20 text-bg placeholder:text-bg focus:outline-none "
                type="text"
                placeholder="Where are you going?"
              />
            </div>
            <button
              className="border border-dotted py-3 px-4 border-green rounded-lg text-bg bg-green hover:brightness-90 transition-all font-bold max-lg:w-full duration-300"
              type="button"
            >
              Search
            </button>
          </div>
        </div>
        <AddVacationDropdownMenu
          openAddNewVacation={openAddNewVacation}
          onOpenAddNewVacation={setOpenAddNewVacation}
        >
          <Button
            type="button"
            title='Add new trip'
            size="icon"
            variant="icon"
          >
            {openAddNewVacation ? (
              <Cross1Icon
                className="w-6 h-6 text-bg"
              />
            ) : (
              <PlusIcon
                className="w-8 h-8 text-bg "
              />
            )}
          </Button>
        </AddVacationDropdownMenu>
      </section>
    </main>
  )
}