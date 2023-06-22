// install (please try to align the version of installed @nivo packages)
// yarn add @nivo/pie
import dynamic from "next/dynamic"

const ResponsivePie = dynamic(
  () => import("@nivo/pie").then((m) => m.ResponsivePie),
  {
    ssr: false,
  }
)

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
export const WeatherChart = ({
  totalSummited,
  totalSnowedSummits,
  totalDrySummits,
}: {
  totalSummited: number
  totalSnowedSummits: number
  totalDrySummits: number
}) => {
  const data = [
    {
      id: "Nevado",
      label: "Nevado",
      value: totalSnowedSummits,
      color: "var(--green)",
    },
    {
      id: "Seco",
      label: "Seco",
      value: totalDrySummits,
      color: "var(--yellow)",
    },
  ]

  return (
    <ResponsivePie
      colors={data.map((item) => item.color)}
      data={data}
      margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
      innerRadius={0.5}
      padAngle={0.7}
      cornerRadius={3}
      activeOuterRadiusOffset={8}
      borderWidth={1}
      borderColor={{
        from: "color",
        modifiers: [["darker", 0.2]],
      }}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor="#333333"
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: "color" }}
      arcLabelsSkipAngle={10}
      // // arcLabelsTextColor={{
      // //   from: "color",
      // //   modifiers: [["brighter", 8]],
      // // }}
      arcLabelsTextColor="var(--primary-foreground)"
      // // defs={[
      // //   {
      // //     id: "dots",
      // //     type: "patternDots",
      // //     background: "inherit",
      // //     color: "rgba(255, 255, 255, 0.3)",
      // //     size: 4,
      // //     padding: 1,
      // //     stagger: true,
      // //   },
      // //   {
      // //     id: "lines",
      // //     type: "patternLines",
      // //     background: "inherit",
      // //     color: "rgba(255, 255, 255, 0.3)",
      // //     rotation: -45,
      // //     lineWidth: 6,
      // //     spacing: 10,
      // //   },
      // // ]}
      // // fill={[
      // //   {
      // //     match: {
      // //       id: "ruby",
      // //     },
      // //     id: "dots",
      // //   },
      // //   {
      // //     match: {
      // //       id: "c",
      // //     },
      // //     id: "dots",
      // //   },
      // //   {
      // //     match: {
      // //       id: "go",
      // //     },
      // //     id: "dots",
      // //   },
      // //   {
      // //     match: {
      // //       id: "python",
      // //     },
      // //     id: "dots",
      // //   },
      // //   {
      // //     match: {
      // //       id: "scala",
      // //     },
      // //     id: "lines",
      // //   },
      // //   {
      // //     match: {
      // //       id: "lisp",
      // //     },
      // //     id: "lines",
      // //   },
      // //   {
      // //     match: {
      // //       id: "elixir",
      // //     },
      // //     id: "lines",
      // //   },
      // //   {
      // //     match: {
      // //       id: "javascript",
      // //     },
      // //     id: "lines",
      // //   },
      // // ]}
      legends={[
        {
          anchor: "bottom",
          direction: "row",
          justify: false,
          translateX: 0,
          translateY: 56,
          itemsSpacing: 0,
          itemWidth: 100,
          itemHeight: 18,
          itemTextColor: "#999",
          itemDirection: "left-to-right",
          itemOpacity: 1,
          symbolSize: 18,
          symbolShape: "circle",
          effects: [
            {
              on: "hover",
              style: {
                itemTextColor: "#000",
              },
            },
          ],
        },
      ]}
    />
  )
}
