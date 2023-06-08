import { EditIcon } from "lucide-react"

import { Peak } from "@/types/prisma"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { UpdateForm } from "@/components/dialogs/update-form"

export const UpdateDialog = ({
  peak,
  updateSummitMutation,
}: {
  peak: Peak
  updateSummitMutation: any
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <EditIcon className="tw-transition h-5 w-5 cursor-pointer text-branding-white hover:text-branding-white/75" />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{`Edita ${peak.name}`}</DialogTitle>
          <DialogDescription>
            {`Modifica los datos de la cumbre coronada ${peak.name}.`}
          </DialogDescription>
        </DialogHeader>
        <UpdateForm peak={peak} updateSummitMutation={updateSummitMutation} />
      </DialogContent>
    </Dialog>
  )
}
