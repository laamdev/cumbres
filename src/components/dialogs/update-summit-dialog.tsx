"use client";

import { useState } from "react";
import { Pencil } from "@phosphor-icons/react/dist/ssr";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { UpdatePeakForm } from "@/components/forms/update-summit-form";

interface UpdateSummitDialogProps {
  peakSlug: string;
  summitDate: Date | undefined;
}

export const UpdateSummitDialog = ({
  peakSlug,
  summitDate,
}: UpdateSummitDialogProps) => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button>
          <Pencil
            weight="fill"
            className="size-5 tw-transition hover:scale-105 rounded-full fill-branding-green bg-white px-1.5 sm:size-7"
          />
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Editar cumbre</DialogTitle>
          <DialogDescription>
            Modifica los datos de tu cumbre coronada.
          </DialogDescription>
        </DialogHeader>
        <UpdatePeakForm
          peakSlug={peakSlug}
          summitDate={summitDate}
          setOpen={setOpen}
        />
      </DialogContent>
    </Dialog>
  );
};
