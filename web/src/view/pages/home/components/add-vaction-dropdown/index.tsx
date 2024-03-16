import { ReactNode } from "react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/view/components/ui/dropdown-menu";
import { Button } from "@/view/components/ui/button";
import { CreateVacationPlanModal } from "../create-vacation-plan-modal";
import { useHomeController } from "../../useHomeController";

interface AddVacationDropdownMenuProps {
  children: ReactNode;
  openAddNewVacation: boolean;
  onOpenAddNewVacation: React.Dispatch<React.SetStateAction<boolean>>
}

export function AddVacationDropdownMenu({ children, openAddNewVacation, onOpenAddNewVacation }: AddVacationDropdownMenuProps) {
  const { handleOpenPlanVacationModal, openPlanVacation, setOpenPlanVacation } = useHomeController();

  return (
    <DropdownMenu
      onOpenChange={onOpenAddNewVacation}
      open={openAddNewVacation}
    >
      <DropdownMenuTrigger
        asChild
      >
        {children}
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem
          className="px-1"
        >
          <Button
            variant="option"
            onClick={handleOpenPlanVacationModal}
          >
            Plan a new vacation
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
      <CreateVacationPlanModal
        onOpenAddNewVacation={setOpenPlanVacation}
        openAddNewVacation={openPlanVacation}
      />
    </DropdownMenu>
  )
}