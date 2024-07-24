'use client';
import EngagementChart from '@/components/EngagementChart';

export default function Home() {
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
        <EngagementChart />
      </div>
    </main>
  );
}
