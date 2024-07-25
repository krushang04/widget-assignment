import { format } from 'date-fns';
import React from 'react';
import { TooltipProps } from 'recharts';

type TValue = any;
type TName = any;
interface CustomTooltipProps extends TooltipProps<TValue, TName> {
  payload?: any[];
}

const formatDate = (dateString: string) =>
  format(new Date(dateString), 'dd-MM-yyy');
const CustomTooltip: React.FC<CustomTooltipProps> = ({ payload }) => {
  if (!payload || payload.length === 0) return null;

  const data = payload[0].payload;
  const date = formatDate(data.date);

  return (
    <div className="bg-[#606060] border border-gray-300 p-4 rounded-lg shadow-lg transition-transform transform hover:bg-red-200 hover:scale-105 text-[14px] text-white">
      <p className="m-0">
        <strong>DATE: </strong>
        {date}
      </p>
      <p className="m-0">
        <strong>REACTIONS: </strong> {data?.numReactions}
      </p>
      <p className="m-0">
        <strong>COMMENTS: </strong> {data?.numComments}
      </p>
      <p className="m-0">
        <strong>REPOSTS: </strong> {data?.numShares}
      </p>
      <p className="m-0">
        <strong>TOTAL POST: </strong> {data?.postsCount}
      </p>
    </div>
  );
};

export default CustomTooltip;
