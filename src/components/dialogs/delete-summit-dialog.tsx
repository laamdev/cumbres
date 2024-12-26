"use client";

import { useState } from "react";
import { Minus } from "@phosphor-icons/react/dist/ssr";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DeleteSummitForm } from "@/components/forms/delete-summit-form";

interface DeleteSummitDialogProps {
  peakName: string;
  peakSlug: string;
}

export const DeleteSummitDialog = ({
  peakName,
  peakSlug,
}: DeleteSummitDialogProps) => {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button>
          <Minus
            weight="bold"
            className="size-5 tw-transition hover:scale-105 rounded-full fill-branding-green bg-white px-1.5 sm:size-7"
          />
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Eliminar cumbre</DialogTitle>
          <DialogDescription>
            {`¿Estás seguro que deseas eliminar el pico ${peakName} de tus cumbres coronadas?`}
          </DialogDescription>
        </DialogHeader>

        <DeleteSummitForm peakSlug={peakSlug} setOpen={setOpen} />
      </DialogContent>
    </Dialog>
  );
};
