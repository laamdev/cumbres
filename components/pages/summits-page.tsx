"use client"

import useSWR from "swr"

import { Peak, Summit } from "@/types/prisma"
import {
  addSummit,
  userPeaksEndpoint as cacheKey,
  // //   addSummitOptions,
  deleteSummit,
  // //   deleteSummitOptions,
  getUserPeaks,
  updateSummit,
} from "@/lib/api"
import { Skeleton } from "@/components/ui/skeleton"
import { useToast } from "@/components/ui/use-toast"
import { PageContainer } from "@/components/global/page-container"
// // import { PeaksFilters } from "@/components/dashboard/peaks-filters"
import { PageTitle } from "@/components/global/page-title"
import { TextWrapper } from "@/components/global/text-wrapper"
import { PeakCard } from "@/components/peak/peak-card"

export const SummitsPage = () => {
  const {
    isLoading,
    // // isValidating,
    error,
    data: userPeaks,
    mutate,
  } = useSWR(cacheKey, getUserPeaks, {
    // // onSuccess: (data) => data.sort((a, b) => b.id - a.id),
  })
  const { toast } = useToast()

  const addSummitMutation = async (newSummit: Summit) => {
    try {
      await mutate(addSummit(newSummit))

      toast({
        title: "¡Éxito!",
        description: "Cumbre añadida a tu lista de coronadas.",
      })
    } catch (err) {
      toast({
        title: "¡Error!",
        description: "Oops, no se ha podido marcar la cumbre como coronada.",
      })
    }
  }

  const updateSummitMutation = async (updatedSummit: any) => {
    try {
      await mutate(updateSummit(updatedSummit))

      toast({
        title: "¡Éxito!",
        description:
          "Haz modificado exitosamente los datos de tu cumbre coronada.",
      })
    } catch (err) {
      toast({
        title: "¡Error!",
        description:
          "Oops, no se han podido editar los datos de tu cumbre coronada.",
      })
    }
  }

  const deleteSummitMutation = async (summitId: string) => {
    try {
      await mutate(deleteSummit(summitId))

      toast({
        title: "¡Éxito!",
        description: "Cumbre removida de tu lista de coronadas.",
      })
    } catch (err) {
      toast({
        title: "¡Error!",
        description: "Oops, no se ha modido marcar la cumbre como no coronada.",
      })
    }
  }

  return (
    <PageContainer>
      <div>
        <PageTitle>Tus Cumbres</PageTitle>
        <TextWrapper className="mt-5">
          {`Estos son los Techos de España que has coronado y los que aún te quedan por visitar. Puedes añadir, editar o eliminar la cumbre que desees de tu lista.`}
        </TextWrapper>
      </div>

      <div className="mt-16 sm:mt-24">
        {/* <PeaksFilters /> */}

        {error ? (
          <div className="mt-8 grid place-content-center place-items-center text-xl">
            {error.message}
          </div>
        ) : (
          <ul className="mt-8 grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-4">
            {isLoading ? (
              <>
                {Array.from({ length: 12 }, (_, i) => i + 1).map(
                  (item, itemIdx) => (
                    <Skeleton
                      key={itemIdx}
                      className="relative rounded-lg border bg-branding-sand px-5 py-10 lg:h-72"
                    />
                  )
                )}
              </>
            ) : (
              <>
                {userPeaks &&
                  userPeaks.length > 0 &&
                  userPeaks.map((userPeak: Peak) => (
                    <PeakCard
                      key={userPeak.id}
                      peak={userPeak}
                      isSummited={userPeak.summitId ? true : false}
                      addSummitMutation={addSummitMutation}
                      updateSummitMutation={updateSummitMutation}
                      deleteSummitMutation={deleteSummitMutation}
                    />
                  ))}
              </>
            )}
          </ul>
        )}
      </div>
    </PageContainer>
  )
}
