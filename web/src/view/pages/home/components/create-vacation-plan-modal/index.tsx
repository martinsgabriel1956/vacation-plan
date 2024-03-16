import { Controller } from "react-hook-form"
import { DatePicker } from "@/view/components/date-picker"
import { Dialog, DialogContent, DialogTitle } from "@/view/components/ui/dialog"
import { Input } from "@/view/components/ui/input"
import { Label } from "@/view/components/ui/label"
import { useHomeController } from "../../useHomeController"
import { Button } from "@/view/components/ui/button"
import { ErrorMessage } from "@/view/components/error-message"

interface CreateVacationPlanModalProps {
  onOpenAddNewVacation: React.Dispatch<React.SetStateAction<boolean>>
  openAddNewVacation: boolean
}

export function CreateVacationPlanModal({ onOpenAddNewVacation, openAddNewVacation }: CreateVacationPlanModalProps) {
  const { control, errors, handleCreateVacationPlanning, register } = useHomeController();

  return (
    <Dialog
      onOpenChange={onOpenAddNewVacation}
      open={openAddNewVacation}
    >
      <DialogContent
        className="w-full flex items-start justify-start flex-col rounded-lg"
      >
        <DialogTitle
          className="mb-2"
        >
          Plan a new vacation
        </DialogTitle>
        <form onSubmit={handleCreateVacationPlanning} className="space-y-4 w-full">
          <div className="flex items-start flex-col w-full space-y-2">
            <Label
              htmlFor="title"
              className="font-medium text-md"
            >
              Title:
            </Label>
            <Input
              placeholder="Vacation Title"
              {...register("title")}
            />
            <ErrorMessage error={errors?.title?.message} />
          </div>
          <div className="flex items-start flex-col w-full space-y-2">
            <Label
              htmlFor="description"
              className="font-medium text-md"
            >
              Description:
            </Label>
            <Input
              {...register("description")}
              placeholder="Describe your plans for the vacation"
            />
            <ErrorMessage error={errors?.description?.message} />
          </div>
          <div className="flex lg:items-center max-md:flex-col w-full gap-4">
            <div className="lg:w-1/2">
              <Controller
                control={control}
                name="startsDate"
                render={({ field }) => (
                  <div className="space-y-2 w-full">
                    <Label
                      htmlFor="startDate"
                      className="font-medium text-md"
                    >
                      Start Date:
                    </Label>
                    <DatePicker
                      date={field.value}
                      setDate={field.onChange}
                    />
                  </div>
                )}
              />
              <ErrorMessage error={errors?.startsDate?.message} />
            </div>
            <div className="lg:w-1/2">
              <Controller
                control={control}
                name="endsDate"
                render={({ field }) => (
                  <div className="space-y-2 w-full">
                    <Label
                      htmlFor="endsDate"
                      className="font-medium text-md"
                    >
                      End Date:
                    </Label>
                    <DatePicker
                      date={field.value}
                      setDate={field.onChange}
                    />
                  </div>
                )}
              />
              <ErrorMessage error={errors?.endsDate?.message} />
            </div>
          </div>

          <Button
            type="submit"
            variant="default"
            className="w-full"
          >
            Create Vacation
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}