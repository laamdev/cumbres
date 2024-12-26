"use client";

import { useActionState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import type { DeleteSummitActionResponse } from "@/types/actions";
import { deleteSummit } from "@/app/_actions";
import { cn } from "@/lib/utils";

const initialState: DeleteSummitActionResponse = {
  success: false,
  message: "",
};

interface DeleteSummitFormProps {
  peakSlug: string;
  setOpen: (value: boolean) => void;
}

export const DeleteSummitForm = ({
  peakSlug,
  setOpen,
}: DeleteSummitFormProps) => {
  const [state, action, isPending] = useActionState(deleteSummit, initialState);
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
        <Input
          type="text"
          id="peakSlug"
          name="peakSlug"
          value={peakSlug}
          readOnly
          className={cn("hidden")}
        />

        <Button
          type="submit"
          variant="destructive"
          disabled={isPending}
          className="w-full"
        >
          {isPending ? "Eliminando..." : "Eliminar"}
        </Button>
      </div>
    </form>
  );
};
