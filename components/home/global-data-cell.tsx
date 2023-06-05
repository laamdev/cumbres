export const GlobalDataCell = ({ dataItem }: { dataItem: any }) => {
  return (
    <div
      key={dataItem.name}
      className="overflow-hidden rounded-lg border border-branding-green bg-white px-4 py-5 sm:p-6"
    >
      <dt className="truncate text-sm font-medium text-gray-500">
        {dataItem.name}
      </dt>
      <dd className="mt-1 font-serif text-3xl font-semibold tracking-tight text-branding-green">
        {dataItem.stat}
      </dd>
    </div>
  )
}
