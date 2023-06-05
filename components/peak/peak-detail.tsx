export const PeakDetail = ({
  icon,
  value,
  unit,
}: {
  icon: any
  value: any
  unit?: string
}) => {
  return (
    <div className="flex items-center gap-x-2.5 font-semibold text-branding-green">
      {icon}
      <span>{value}</span>
      <span className="ml-1 text-sm font-normal">{unit}</span>
    </div>
  )
}
