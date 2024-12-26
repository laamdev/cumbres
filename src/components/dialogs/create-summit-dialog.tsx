"use client";

import { useState } from "react";
import { Plus } from "@phosphor-icons/react/dist/ssr";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CreateSummitForm } from "@/components/forms/create-summit-form";

interface CreateSummitDialogProps {
  peakSlug: string;
}

export const CreateSummitDialog = ({ peakSlug }: CreateSummitDialogProps) => {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button>
          <Plus
            weight="bold"
            className="size-5 tw-transition hover:scale-105 rounded-full fill-branding-green bg-white px-1.5 sm:size-7"
          />
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Añadir</DialogTitle>
          <DialogDescription>Marca este pico como cumbre.</DialogDescription>
        </DialogHeader>
        <CreateSummitForm peakSlug={peakSlug} setOpen={setOpen} />
      </DialogContent>
    </Dialog>
  );
};
