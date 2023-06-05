import { useState } from "react"
import { useAuth } from "@clerk/nextjs"
import { RotateCwIcon } from "lucide-react"
import { useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import { Form } from "@/components/react-fook-form/form"

export const DeleteForm = ({
  peak,
  deleteSummitMutation,
}: {
  peak: any
  deleteSummitMutation: any
}) => {
  const [serverError, setServerError] = useState("")
  const [success, setSuccess] = useState("")
  const [submitting, setSubmitting] = useState(false)
  const { isLoaded, userId } = useAuth()

  const form = useForm()

  const onSubmit = async () => {
    if (submitting) {
      return false
    }
    setSubmitting(true)
    setServerError("")

    const data = await deleteSummitMutation(peak.summitId)

    setSubmitting(false)

    return data
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Button type="submit" variant="destructive">
          {submitting ? (
            <p className="flex items-center gap-x-1">
              <span>{`Eliminando`}</span>
              <RotateCwIcon className="animate-spin" />
            </p>
          ) : (
            <p>{`Eliminar`}</p>
          )}
        </Button>
      </form>
    </Form>
  )
}
