"use client"

import { useState } from "react"
import { PlusCircle } from "lucide-react"

import { Peak } from "@/types/payloads"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { AddForm } from "@/components/dialogs/add-form"

export const AddDialog = ({
  peak,
  addSummitMutation,
}: {
  peak: Peak
  addSummitMutation: any
}) => {
  const [open, setOpen] = useState(false)
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <PlusCircle className="tw-transition h-5 w-5 text-branding-green hover:text-branding-green/75" />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{`Añade ${peak.name}`}</DialogTitle>
          <DialogDescription>
            {`Incluye ${peak.name} en tu lista de cumbres coronadas.`}
          </DialogDescription>
        </DialogHeader>

        <AddForm peak={peak} addSummitMutation={addSummitMutation} />
      </DialogContent>
    </Dialog>
  )
}
