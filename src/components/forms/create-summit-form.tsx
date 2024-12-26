"use client";

import { useActionState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
// // import { CheckCircle } from "@phosphor-icons/react/dist/ssr";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
// // import { Alert, AlertDescription } from "@/components/ui/alert";
import { Input } from "@/components/ui/input";

import type { CreateSummitActionResponse } from "@/types/actions";
import { createSummit } from "@/app/_actions";

const initialState: CreateSummitActionResponse = {
  success: false,
  message: "",
};

interface CreateSummitFormProps {
  peakSlug: string;
  setOpen: (value: boolean) => void;
}

export const CreateSummitForm = ({
  peakSlug,
  setOpen,
}: CreateSummitFormProps) => {
  const [state, action, isPending] = useActionState(createSummit, initialState);
  const router = useRouter();

  useEffect(() => {
    if (state.success) {
      setOpen(false);
      toast.success(state.message);
      router.refresh();
    }
  }, [state, router, setOpen]);

  return (
    <form action={action} className="space-y-7" autoComplete="on">
      <div className="space-y-5">
        <Label htmlFor="summitDate">Selecciona la fecha de cumbre</Label>

        <Input
          type="date"
          id="summitDate"
          name="summitDate"
          required
          defaultValue={new Date().toISOString().split("T")[0]}
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

      {/* {state?.message && (
        <Alert variant={state.success ? "default" : "destructive"}>
          {state.success && <CheckCircle className="size-4" />}
          <AlertDescription>{state.message}</AlertDescription>
        </Alert>
      )} */}

      <Button type="submit" className="w-full" disabled={isPending}>
        {isPending ? "Añadiendo..." : "Añadir cumbre"}
      </Button>
    </form>
  );
};
