"use client";

import { useActionState, useEffect } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { updateSummit } from "@/app/_actions";
import type { UpdateSummitActionResponse } from "@/types/actions";

const initialState: UpdateSummitActionResponse = {
  success: false,
  message: "",
};

interface UpdatePeakFormProps {
  peakSlug: string;
  summitDate: Date | undefined;
  setOpen: (value: boolean) => void;
}

export const UpdatePeakForm = ({
  peakSlug,
  summitDate,
  setOpen,
}: UpdatePeakFormProps) => {
  const [state, action, isPending] = useActionState(updateSummit, initialState);
  const router = useRouter();

  useEffect(() => {
    if (state.success) {
      setOpen(false);
      toast.success(state.message);
      router.refresh();
    }
  }, [state, router, setOpen]);

  return (
    <form action={action} className="space-y-6" autoComplete="on">
      <div className="space-y-4">
        <Label htmlFor="summitDate">Selecciona la fecha de cumbre</Label>

        <Input
          type="date"
          id="summitDate"
          name="summitDate"
          required
          defaultValue={
            summitDate ? new Date(summitDate).toISOString().split("T")[0] : ""
          }
          className={state?.errors?.summitDate ? "border-red-500" : ""}
        />

        {state?.errors?.summitDate && (
          <p id="summitDate-error" className="text-sm text-red-500">
            {state.errors.summitDate[0]}
          </p>
        )}
      </div>

      <Input
        type="text"
        id="peakSlug"
        name="peakSlug"
        required
        readOnly
        value={peakSlug}
        className="hidden"
      />

      <Button type="submit" className="w-full" disabled={isPending}>
        {isPending ? "Editando..." : "Editar cumbre"}
      </Button>
    </form>
  );
};
