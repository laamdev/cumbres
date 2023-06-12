import dynamic from "next/dynamic"
import { format } from "date-fns"
import es from "date-fns/locale/es"

import { UserPeak } from "@/types/payloads"

const ResponsiveLine = dynamic(
  () => import("@nivo/line").then((m) => m.ResponsiveLine),
  {
    ssr: false,
  }
)

export const AscentTimeChart = ({ peaks }: { peaks: UserPeak[] }) => {
  const chartPeaks = peaks.map((peak) => ({
    x: format(new Date(peak.summitDate!), "yyyy-MM-dd", { locale: es }),
    y: peak.elevation,
  }))

  const elevationArray = peaks.map((peak) => peak.elevation)
  const minElevation = Math.min(...elevationArray)

  return (
    <ResponsiveLine
      axisBottom={{
        format: "%b %y",
        legend: "Date",
        legendPosition: "middle",
        legendOffset: 30,
        tickValues: "every month",
      }}
      axisLeft={{
        legend: "Elevation",
        legendPosition: "middle",
        legendOffset: -60,
        tickValues: 5,
      }}
      curve="monotoneX"
      data={[
        {
          data: chartPeaks,
          id: "summited peaks",
        },
      ]}
      // enablePointLabel
      margin={{
        bottom: 60,
        left: 80,
        right: 20,
        top: 20,
      }}
      pointBorderColor={{
        from: "color",
        modifiers: [["darker", 0.3]],
      }}
      pointBorderWidth={1}
      pointSize={10}
      useMesh
      xFormat="time:%Y-%m-%d"
      xScale={{
        format: "%Y-%m-%d",
        precision: "day",
        type: "time",
        useUTC: false,
      }}
      yScale={{
        type: "linear",
        min: minElevation - 500,
      }}
      pointLabelYOffset={20}
      tooltip={(input) => {
        console.log(JSON.stringify(input.point, null, 2))
        return (
          <div className="rounded-xl bg-branding-green p-2.5 text-sm text-branding-white">
            <div>
              {`${format(new Date(input.point.data.xFormatted), "PPP", {
                locale: es,
              })}`}
            </div>
            <div>{input.point.data.yFormatted} m</div>
          </div>
        )
      }}
    />
  )
}
