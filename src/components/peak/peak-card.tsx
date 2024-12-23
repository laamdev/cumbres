"use client";

import Image from "next/image";
import { SignedIn } from "@clerk/nextjs";
import { SnowflakeIcon, SunIcon } from "lucide-react";

import { AddDialog } from "@/components/dialogs/add-dialog";
import { DeleteDialog } from "@/components/dialogs/delete-dialog";
import { UpdateDialog } from "@/components/dialogs/update-dialog";
import { PeakCell } from "@/components/peak/peak-cell";
import { PeakLabel } from "@/components/peak/peak-label";
import { PeakName } from "@/components/peak/peak-name";
import { PeakTagline } from "@/components/peak/peak-tagline";
import { PeakValue } from "@/components/peak/peak-value";

import { cn, getProvinceNames } from "@/lib/utils";

interface PeakCardProps {
  peak: Peak;
  isSummited: boolean;
  addSummitMutation: (newSummit: Peak) => void;
  deleteSummitMutation: (summitId: string) => void;
  updateSummitMutation: (updated) => void;
}

export const PeakCard = ({
  peak,
  isSummited,
  addSummitMutation,
  deleteSummitMutation,
  updateSummitMutation,
}: PeakCardProps) => {
  console.log(JSON.stringify(peak));
  return (
    <li
      className={cn(
        "relative z-10 grid aspect-video grid-rows-3 gap-y-5 rounded-lg p-5 shadow"
      )}
    >
      <SignedIn>
        {!isSummited && (
          <button className="absolute right-2 top-2">
            <AddDialog peak={peak} addSummitMutation={addSummitMutation} />
          </button>
        )}
        {isSummited && (
          <>
            <div className="absolute right-2 top-2">
              <UpdateDialog
                peak={peak}
                updateSummitMutation={updateSummitMutation}
              />
            </div>

            <div className="absolute left-2 top-2">
              <DeleteDialog
                peak={peak}
                deleteSummitMutation={deleteSummitMutation}
              />
            </div>
          </>
        )}
      </SignedIn>

      <div className="absolute inset-0 -z-10 aspect-video">
        <Image
          src={peak?.imageUrl ?? "/images/card-bg.webp"}
          alt={peak?.name}
          fill
          className={cn(
            "rounded-lg object-cover object-center grayscale",
            !isSummited && "opacity-30"
          )}
        />
        <div
          className={cn(
            isSummited ? "bg-branding-green" : "bg-branding-white",
            "absolute inset-0 -z-0 rounded-lg mix-blend-multiply"
          )}
        />
      </div>

      <div className="text-center">
        <PeakTagline isSummited={isSummited}>
          {peak?.range?.join(" y ")}
        </PeakTagline>
        <PeakName isSummited={isSummited}>{peak?.name}</PeakName>
      </div>

      <div className="row-start-3 flex items-end justify-between">
        <PeakCell left>
          <PeakLabel isSummited={isSummited}>Altura</PeakLabel>
          <PeakValue isSummited={isSummited}>
            <span>{peak?.elevation?.toString()}</span>
            <span className="ml-0.5 text-xs">m</span>
          </PeakValue>
        </PeakCell>
        <PeakCell right>
          <PeakLabel isSummited={isSummited}>
            {peak?.province?.length > 1 ? "Provincias" : "Provincia"}
          </PeakLabel>
          <PeakValue isSummited={isSummited}>
            {getProvinceNames(peak?.province)}
          </PeakValue>
        </PeakCell>
      </div>

      {isSummited && (
        <div className="flex items-center justify-between rounded-lg border bg-white px-2.5 font-semibold text-branding-green">
          {peak.summitWeather ? <SnowflakeIcon /> : <SunIcon />}
          <p>{format(new Date(peak.summitDate), "P", { locale: es })}</p>
          <p>{peak.summitTime} h</p>
        </div>
      )}
    </li>
  );
};
