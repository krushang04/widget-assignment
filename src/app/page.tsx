'use client';
import { endOfDay, startOfDay, subDays } from 'date-fns';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { EngagementData, EngagementTotals } from './api/engagements/route';
import EngagementChart from '@/components/EngagementChart';

export default function Home() {
  const [totals, setTotals] = useState<EngagementTotals | null>(null);
  const [data, setData] = useState<EngagementData[] | null>(null);

  const searchParams = useSearchParams();
  const start_date = searchParams.get('start_date');
  const end_date = searchParams.get('end_date');

  useEffect(() => {
    const endDate = end_date ? new Date(end_date) : endOfDay(new Date());
    const startDate = start_date
      ? new Date(start_date)
      : startOfDay(subDays(endDate, 30));

    const fetchData = async () => {
      const response = await fetch(
        `/api/engagements?start_date=${startDate.toISOString()}&end_date=${endDate.toISOString()}`,
      );
      const result = await response.json();
      setTotals(result.rangeTotal);
      setData(result.range);
    };

    fetchData();
  }, [start_date, end_date]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-gray-100">
      <div className="w-full max-w-3xl">
        <p className="text-3xl font-geist text-center mb-2">
          A unified dashboard for your team.
        </p>
        <p className="text-center text-[#000000] mb-6 text-sm">
          Aggregate members and profiles by teams, cohorts or activity. The
          choices are yours to make.
        </p>
        <EngagementChart data={data} totals={totals} />
      </div>
    </main>
  );
}
