import { EngagementTotals } from '@/app/api/engagements/route';
import { mappingLegends } from '@/app/utils';

interface CustomLegendProps {
  payload?: any;
  totals: EngagementTotals | null;
}

export default function CustomLegend(props: CustomLegendProps) {
  const { payload } = props;
  const { totals } = props;

  return (
    <div className="flex justify-between items-start ml-[55px]">
      <div>
        <span className="text-[#FFFFFF] leading-[19.6px] font-medium font-geist text-[14px] ">
          Engagements • <span className="opacity-60"> Last 30 days</span>
        </span>
      </div>
      <div className="flex flex-col items-end">
        <div className="text-right text-xs">
          {payload.map((entry: any, index: number) => (
            <div
              key={`item-${index}`}
              className="text-600 flex items-center justify-end text-[#FFFFFF] text-[11px]"
            >
              {totals && entry?.value && (
                <span>{`${totals[entry.value as keyof EngagementTotals]} ${mappingLegends?.[entry.value]}`}</span>
              )}
              {entry.value === 'numShares' ? (
                <div
                  className={`w-[6px] h-[15px] bg-[${entry.color?.slice(0, -2)}] opacity-60 ml-1 mb-1 rounded-[4px]`}
                ></div>
              ) : (
                <div
                  className={`w-[6px] h-[14px] bg-[${entry.color}] ml-1 mb-1 rounded-[4px]`}
                ></div>
              )}
            </div>
          ))}
        </div>
        <div className="mb-2"></div>
      </div>
    </div>
  );
}
