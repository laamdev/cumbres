"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";

import { Label } from "@/components/ui/label";
import {
  Sheet,
  // // SheetClose,
  SheetContent,
  // // SheetDescription,
  // // SheetFooter,
  // // SheetHeader,
  // // SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { FiltersIcon } from "@/components/icons/filters";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import { territories } from "@/data/territories";

export const PeaksFilters = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const selectedTerritories = searchParams.get("comunidad")?.split(",") || [];
  const status = searchParams.get("status") || "todas";

  const handleCountyFilter = (territoryCode: string) => {
    const params = new URLSearchParams(searchParams);

    // Convert current selections to Set for easier manipulation
    const selections = new Set(selectedTerritories);

    if (selections.has(territoryCode)) {
      selections.delete(territoryCode);
    } else {
      selections.add(territoryCode);
    }

    // Update or remove param based on selections
    if (selections.size === 0) {
      params.delete("comunidad");
    } else {
      params.set("comunidad", Array.from(selections).join(","));
    }

    replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const handleStatusChange = (value: string) => {
    const params = new URLSearchParams(searchParams);

    if (value === "todas") {
      params.delete("status");
    } else {
      params.set("status", value);
    }

    replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <Sheet>
      <SheetTrigger className="flex items-center text-white gap-x-2.5">
        <FiltersIcon className="size-6" />
        <span className="sm:text-sm text-xs">Filtros</span>
      </SheetTrigger>

      <SheetContent side="left">
        <div className="flex flex-col gap-y-8 max-h-[90vh] overflow-y-auto pr-4">
          <div>
            <h3 className="font-bold text-sm">Estado</h3>
            <RadioGroup
              value={status}
              onValueChange={handleStatusChange}
              className="mt-5 flex gap-x-2.5"
            >
              <div className="flex items-center gap-x-1">
                <RadioGroupItem value="todas" />
                <Label className="text-xs">Todas</Label>
              </div>
              <div className="flex items-center gap-x-1">
                <RadioGroupItem value="completadas" />
                <Label className="text-xs">Completadas</Label>
              </div>
              <div className="flex items-center gap-x-1">
                <RadioGroupItem value="por-completar" />
                <Label className="text-xs">Por completar</Label>
              </div>
            </RadioGroup>
          </div>
          <div>
            <h3 className="font-bold text-sm">Comunidades Autónomas</h3>
            <div className="flex mt-5 flex-col gap-y-2.5">
              {territories.map((territory) => (
                <div
                  key={territory.code}
                  className="flex justify-between items-center"
                >
                  <Label>{territory.county}</Label>
                  <Checkbox
                    checked={selectedTerritories.includes(territory.code)}
                    onCheckedChange={() => handleCountyFilter(territory.code)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};
