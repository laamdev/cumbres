"use client";

import { useState } from "react";
import { Plus, Minus } from "@phosphor-icons/react";

import { createSummit, deleteSummit } from "@/app/_actions";
import { toast } from "sonner";

interface PeaksActionButtonProps {
  peakSlug: string;
  summited?: boolean;
}

export const PeaksActionButton = ({
  peakSlug,
  summited,
}: PeaksActionButtonProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSummit = async () => {
    try {
      setIsLoading(true);
      await createSummit(peakSlug);
      toast.success("La cumbre se ha marcado como completada.");
    } catch (error) {
      toast.error("Failed to mark peak as summited");
    } finally {
      setIsLoading(false);
    }
  };

  const handleUnsummit = async () => {
    try {
      setIsLoading(true);
      await deleteSummit(peakSlug);
      toast.success("La cumbre se ha marcado como no completada.");
    } catch (error) {
      toast.error("Failed to unmark peak as summited");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <button>
      {summited ? (
        <Minus
          weight="bold"
          className="z-10 bg-white rounded-full size-5 p-1.5 fill-red-500 sm:size-7"
          onClick={handleUnsummit}
        />
      ) : (
        <Plus
          weight="bold"
          className=" z-10 bg-white rounded-full size-5 p-1.5 fill-branding-green sm:size-7"
          onClick={handleSummit}
        />
      )}
    </button>
  );
};
