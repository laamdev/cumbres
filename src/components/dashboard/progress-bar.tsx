export const ProgressBar = ({
  totalValue,
  completedValue,
  completedPercentage,
  uncompletedValue,
  uncompletedPercentage,
}: // // totalLabel,
// // partLabel,
{
  totalValue: number;
  completedValue: number;
  completedPercentage: number;
  uncompletedValue: number;
  uncompletedPercentage: number;
  totalLabel: string;
  partLabel: string;
}) => {
  return (
    <section className="rounded-lg border-2 border-branding-green bg-white px-5 py-2.5 shadow">
      <div>
        <div className="font-serif">
          <span className="text-5xl font-bold text-branding-green sm:text-6xl">{`${completedValue}`}</span>
          <span className="text-base text-branding-white-950/75 sm:text-xl">{` / ${totalValue}`}</span>
        </div>
      </div>
      <div>
        <div className="mt-5 h-2.5 w-full rounded-full bg-branding-green/10">
          <div
            className="h-2.5 rounded-full bg-branding-green"
            style={{ width: `${completedPercentage}%` }}
          ></div>
        </div>
        <div className="mt-2.5 flex justify-between">
          <div className="flex flex-col text-left">
            <span className="text-sm font-medium text-branding-white-950 sm:text-base">
              Coronadas
            </span>
            <p className="text-sm text-branding-green-800 sm:text-base">
              <span className="font-bold">{`${completedValue}`}</span>
              <span>{` (${completedPercentage}%)`}</span>
            </p>
          </div>
          <div className="flex flex-col text-right">
            <span className="text-sm font-medium text-branding-white-950 sm:text-base">
              Sin Coronar
            </span>
            <p className="text-sm text-branding-white-950 sm:text-base">
              <span className="font-bold">{`${uncompletedValue}`}</span>
              <span>{` (${uncompletedPercentage}%)`}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
