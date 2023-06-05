import { GlobalDataCell } from "@/components/home/global-data-cell"

export const GlobalDataContainer = ({ globalData }: { globalData: any }) => {
  return (
    <section className="mt-40">
      <h3 className="font-serif text-3xl leading-6 text-branding-green">
        {`Nuestra Comunidad`}
      </h3>

      <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
        {globalData.map((dataItem: any) => (
          <GlobalDataCell key={dataItem.id} dataItem={dataItem} />
        ))}
      </dl>
    </section>
  )
}
