"use client";

import { toast } from "sonner";
import { useState } from "react";
import { Plus, Minus } from "@phosphor-icons/react";

import { createSummitSafeAction, deleteSummitSafeAction } from "@/app/_actions";

interface PeaksActionButtonProps {
  peakSlug: string;
  summited?: boolean;
}

export const PeaksActionButton = ({
  peakSlug,
  summited,
}: PeaksActionButtonProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleCreateSummit = async () => {
    try {
      setIsLoading(true);
      await createSummitSafeAction({ peakSlug, summitDate: new Date() });
      toast.success("El pico se ha marcado como encumbrado.");
    } catch (err) {
      console.log(err);
      toast.error("No se pudo marcar el pico como encumbrado.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteSummit = async () => {
    try {
      setIsLoading(true);
      await deleteSummitSafeAction({ peakSlug });
      toast.success("La cumbre se ha marcado como no completada.");
    } catch (err) {
      console.log(err);
      toast.error("No se pudo elminar el pico de la lista de encumbrados.");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <button
      disabled={isLoading}
      className="relative bg-white rounded-full group"
      onClick={summited ? handleDeleteSummit : handleCreateSummit}
    >
      {summited ? (
        <Minus
          weight="bold"
          className="z-10 size-5 p-1.5 fill-branding-green sm:size-7"
        />
      ) : (
        <Plus
          weight="bold"
          className="z-10 size-5 p-1.5 fill-branding-green sm:size-7"
        />
      )}
    </button>
  );
};
