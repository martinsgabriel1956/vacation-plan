import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const createVacationSchema = z.object({
  title: z.string().min(1, { message: "Title is required" }),
  description: z.string().min(1, { message: "Description is required" }),
  startsDate: z.date(),
  endsDate: z.date(),
});

type CreateVacationSchema = z.infer<typeof createVacationSchema>;

export function useHomeController() {
  const [openAddNewVacation, setOpenAddNewVacation] = useState(false);
  const [openPlanVacation, setOpenPlanVacation] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
    register,
  } = useForm<CreateVacationSchema>({
    resolver: zodResolver(createVacationSchema),
  });

  const handleOpenAddNewVacationButton = () => {
    setOpenAddNewVacation(!openAddNewVacation);
  };
  const handleOpenPlanVacationModal = () => {
    setOpenPlanVacation(true);
  };

  const handleCreateVacationPlanning = handleSubmit(
    (data: CreateVacationSchema) => {
      console.log(data);
    }
  );

  return {
    openAddNewVacation,
    handleOpenAddNewVacationButton,
    setOpenAddNewVacation,
    openPlanVacation,
    setOpenPlanVacation,
    handleOpenPlanVacationModal,
    handleCreateVacationPlanning,
    register,
    control,
    errors,
  };
}
