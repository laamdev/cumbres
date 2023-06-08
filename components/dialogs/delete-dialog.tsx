import { MinusCircle } from "lucide-react"

import { Peak } from "@/types/prisma"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { DeleteForm } from "@/components/dialogs/delete-form"

export const DeleteDialog = ({
  peak,
  deleteSummitMutation,
}: {
  peak: Peak
  deleteSummitMutation: any
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <MinusCircle className="tw-transition h-5 w-5 cursor-pointer text-branding-white hover:text-branding-white/75" />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{`Eliminar ${peak.name}`}</DialogTitle>
          <DialogDescription>
            {`¿Quieres remover ${peak.name} de tu lista de cumbres coronadas?`}
          </DialogDescription>
        </DialogHeader>
        <DeleteForm peak={peak} deleteSummitMutation={deleteSummitMutation} />
      </DialogContent>
    </Dialog>
  )
}
