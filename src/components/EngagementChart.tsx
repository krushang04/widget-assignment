import React from 'react';

const EngagementChart: React.FC = () => {
  function getRandomNumber(a: number, b: number) {
    return Math.floor(Math.random() * (b - a + 1)) + a;
  }

  const numbers = Array.from({ length: 30 }, (_, index) => index + 1);

  return (
    <div className="bg-black rounded-[12px] p-[24px]">
      <div className="flex justify-between items-start mb-4">
        <span className="text-[#FFFFFF] leading-[19.6px] font-medium font-geist text-[14px]">
          Engagements • <span className="opacity-60"> Last 30 days</span>
        </span>
        <div className="text-right text-xs">
          <div className="text-600 flex items-center justify-end text-[#FFFFFF] text-[11px]">
            492 REPOSTS{' '}
            <div className="w-[6px] h-[14px]  ml-1 bg-[#B7BCC5] opacity-50 ml-1 rounded-[4px]"></div>
          </div>
          <div className="text-600 flex items-center justify-end text-[#FFFFFF] text-[11px] mt-2">
            2,849 COMMENTS{' '}
            <div className="w-[6px] h-[14px]  ml-1 bg-[#B7BCC5] ml-1 rounded-[4px]"></div>
          </div>
          <div className="text-600 flex items-center justify-end text-[#FFFFFF] text-[11px] mt-2">
            32,232 REACTIONS{' '}
            <div className="w-[6px] h-[14px]  ml-1 bg-[#FFFFFF] ml-1 rounded-[4px]"></div>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-end h-48 mb-1 mt-[25px]">
        {numbers.map((number) => {
          const reposts = getRandomNumber(1, 10);
          const comments = getRandomNumber(1, 20);
          const reactions = getRandomNumber(1, 30);
          return (
            <div key={number}>
              <div className="flex justify-center items-center flex-col m-1">
                <div className="opacity-60 pt-0.5 w-[6px]">
                  <div
                    className="bg-[#B7BCC5] h-[16px] * p-[3.5px_0] m-[2.33px_0] rounded-[6px] opacity-50  w-[6px]"
                    style={{ height: `${reposts + 10}px` }}
                  ></div>
                  <div
                    className={`bg-[#B7BCC5]  rounded-[6px] p-[3.5px_0] m-[2.33px_0]  w-[6px]`}
                    style={{ height: `${comments + 20}px` }}
                  ></div>
                  <div
                    className="bg-[#FFFFFF] h-[76px] p-[3.5px_0] rounded-[6px] m-[2.33px_0] w-[6px]"
                    style={{ height: `${reactions + 40}px` }}
                  ></div>
                </div>
                <div className="flex justify-center items-center text-[9px] leading-[11.16px] font-medium font-geist text-[#F6F6F6] w-[11px] m-0.5">
                  {number}
                </div>

                <div
                  className={`flex justify-center items-center rounded-[3px] m-[8px_0] h-[6px] w-[6px] bg-[${number % 3 === 0 ? '#FFFFFF' : 'black'}] opacity-50`}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EngagementChart;
