import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { format } from 'date-fns';
import { EngagementData, EngagementTotals } from '@/app/api/engagements/route';
import CustomTooltip from './CustomTooltip';
import CustomLegend from './CustomLegend';
import CustomBarDiv from './CustomBarDiv';
import CustomTick from './CustomTick';

type DataPoint = {
  date: string;
  numComments: number;
  numImpressions: number;
  numReactions: number;
  numShares: number;
  numViews: number;
  numVotes: number;
  postsCount: number;
  day?: string;
};

interface ChartProps {
  data: DataPoint[] | EngagementData[] | null;
  totals: EngagementTotals | null;
}

// Function to format the date
const formatDate = (dateString: string) => format(new Date(dateString), 'd');

const EngagementChart: React.FC<ChartProps> = ({ data, totals }) => {
  const formattedData =
    data && data.length > 0
      ? data.map((item: DataPoint) => ({
          ...item,
          day: formatDate(item.date),
        }))
      : [];

  return (
    <div className="bg-black rounded-[12px] p-[24px_0]">
      <div className="w-full h-[270px] flex justify-center items-center ml-[-35px]">
        <ResponsiveContainer>
          <BarChart
            data={formattedData}
            height={270}
            barSize={6}
            margin={{ bottom: 20 }}
          >
            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              interval={0}
              tick={<CustomTick data={data} />}
            />
            <YAxis stroke="none" />
            <Tooltip content={<CustomTooltip />} />
            <Legend
              align="right"
              verticalAlign="top"
              content={<CustomLegend totals={totals} />}
            />

            <Bar
              dataKey="numReactions"
              stackId="chart"
              fill="#FFFFFF"
              shape={<CustomBarDiv />}
            />

            <Bar
              dataKey="numComments"
              stackId="chart"
              fill="#B7BCC5"
              shape={<CustomBarDiv />}
            />
            <Bar
              dataKey="numShares"
              stackId="chart"
              fill="#B7BCC560"
              opacity="60%"
              shape={<CustomBarDiv />}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/*<div className="h-[270px] flex flex-col justify-center items-center">
          <div className="text-white text-[14px] leading-[19.6px] font-medium font-geist">
            No engagement data available
          </div>
          <div className="text-[#7A7A7A] text-[10px] leading-[12.4px] font-normal font-geist">
            Currently unable to fetch your engagement data
          </div>
        </div>
      )}  */}
    </div>
  );
};

export default EngagementChart;
