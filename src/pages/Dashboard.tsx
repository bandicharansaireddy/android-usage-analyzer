import React, { useState } from 'react';
import { 
  Chart as ChartJS, 
  CategoryScale, 
  LinearScale, 
  PointElement, 
  LineElement, 
  BarElement, 
  ArcElement, 
  RadialLinearScale,
  Title, 
  Tooltip, 
  Legend,
  Filler 
} from 'chart.js';
import { Bar, Doughnut, Line, Radar } from 'react-chartjs-2';
import { 
  USER_GROUPS, 
  HOURLY_USAGE_PATTERN, 
  CATEGORY_DISTRIBUTION, 
  RADAR_COMPARISON,
  RESEARCH_METADATA 
} from '../data/usageData';
import { 
  BarChart3, 
  PieChart, 
  TrendingUp, 
  Activity, 
  Filter, 
  Layers,
  Sparkles,
  Info
} from 'lucide-react';

// Register Chart.js modules
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  RadialLinearScale,
  Title,
  Tooltip,
  Legend,
  Filler
);

export const Dashboard: React.FC = () => {
  const [selectedGroupFilter, setSelectedGroupFilter] = useState<string>('All');
  const [metricView, setMetricView] = useState<'screenTime' | 'unlocks'>('screenTime');

  // Chart 1: Daily Screen Time Bar Chart
  const barChartData = {
    labels: USER_GROUPS.map(g => `${g.name} (n=${g.sampleCount})`),
    datasets: [
      {
        label: metricView === 'screenTime' ? 'Avg Screen Time (Hours/Day)' : 'Avg Daily Device Unlocks',
        data: USER_GROUPS.map(g => metricView === 'screenTime' ? g.avgScreenTime : g.avgUnlocks),
        backgroundColor: USER_GROUPS.map(g => g.color + 'CC'),
        borderColor: USER_GROUPS.map(g => g.color),
        borderWidth: 2,
        borderRadius: 8,
      }
    ]
  };

  const barChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: { color: '#cbd5e1', font: { family: 'Plus Jakarta Sans', size: 12 } }
      },
      tooltip: {
        backgroundColor: '#0f172a',
        titleColor: '#10b981',
        bodyColor: '#f8fafc',
        borderColor: '#334155',
        borderWidth: 1
      }
    },
    scales: {
      x: {
        ticks: { color: '#94a3b8' },
        grid: { color: 'rgba(255, 255, 255, 0.05)' }
      },
      y: {
        ticks: { color: '#94a3b8' },
        grid: { color: 'rgba(255, 255, 255, 0.05)' }
      }
    }
  };

  // Chart 2: Category Distribution Doughnut Chart (Illustrative Dataset Model)
  const doughnutChartData = {
    labels: CATEGORY_DISTRIBUTION.map(c => c.category),
    datasets: [
      {
        data: CATEGORY_DISTRIBUTION.map(c => c.percentage),
        backgroundColor: CATEGORY_DISTRIBUTION.map(c => c.color),
        borderColor: '#0f172a',
        borderWidth: 3,
      }
    ]
  };

  const doughnutChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom' as const,
        labels: { color: '#cbd5e1', font: { family: 'Plus Jakarta Sans', size: 11 }, padding: 14 }
      },
      tooltip: {
        backgroundColor: '#0f172a',
        callbacks: {
          label: (context: any) => ` ${context.label}: ${context.parsed}% (Illustrative Share)`
        }
      }
    }
  };

  // Chart 3: Hourly Usage Line Chart
  const lineChartData = {
    labels: HOURLY_USAGE_PATTERN.map(d => d.hour),
    datasets: selectedGroupFilter === 'All' ? [
      {
        label: 'Overall Cohort Intensity',
        data: HOURLY_USAGE_PATTERN.map(d => d.Overall),
        borderColor: '#10b981',
        backgroundColor: 'rgba(16, 185, 129, 0.15)',
        fill: true,
        tension: 0.4
      },
      {
        label: 'Students (n=4)',
        data: HOURLY_USAGE_PATTERN.map(d => d.Students),
        borderColor: '#3b82f6',
        backgroundColor: 'transparent',
        tension: 0.4
      },
      {
        label: 'Gamers (n=3)',
        data: HOURLY_USAGE_PATTERN.map(d => d.Gamers),
        borderColor: '#8b5cf6',
        backgroundColor: 'transparent',
        tension: 0.4
      }
    ] : [
      {
        label: `${selectedGroupFilter} Usage Intensity`,
        data: HOURLY_USAGE_PATTERN.map(d => (d as any)[selectedGroupFilter] || d.Overall),
        borderColor: USER_GROUPS.find(g => g.name === selectedGroupFilter)?.color || '#10b981',
        backgroundColor: 'rgba(16, 185, 129, 0.2)',
        fill: true,
        tension: 0.4
      }
    ]
  };

  const lineChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: { color: '#cbd5e1', font: { family: 'Plus Jakarta Sans', size: 11 } }
      }
    },
    scales: {
      x: { ticks: { color: '#94a3b8' }, grid: { color: 'rgba(255, 255, 255, 0.05)' } },
      y: { ticks: { color: '#94a3b8' }, grid: { color: 'rgba(255, 255, 255, 0.05)' } }
    }
  };

  // Chart 4: Radar Multi-dimensional Comparison Chart
  const radarChartData = {
    labels: RADAR_COMPARISON.labels,
    datasets: RADAR_COMPARISON.datasets.map(ds => ({
      label: ds.label,
      data: ds.data,
      borderColor: ds.color,
      backgroundColor: ds.color + '25',
      borderWidth: 2,
    }))
  };

  const radarChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom' as const,
        labels: { color: '#cbd5e1', font: { family: 'Plus Jakarta Sans', size: 11 } }
      }
    },
    scales: {
      r: {
        angleLines: { color: 'rgba(255, 255, 255, 0.1)' },
        grid: { color: 'rgba(255, 255, 255, 0.1)' },
        pointLabels: { color: '#94a3b8', font: { size: 11 } },
        ticks: { backdropColor: 'transparent', color: '#64748b' }
      }
    }
  };

  return (
    <div className="space-y-10 py-4">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-3 py-1 rounded-full">
              Route: /dashboard
            </span>
            <span className="text-xs font-semibold text-slate-300 bg-slate-900 border border-slate-800 px-3 py-1 rounded-full flex items-center gap-1">
              <Info className="w-3.5 h-3.5 text-blue-400" />
              Actual Survey: n = {RESEARCH_METADATA.datasetSize} Respondents
            </span>
          </div>
          <h1 className="text-3xl font-black text-white tracking-tight">Interactive Analytics Dashboard</h1>
          <p className="text-xs text-slate-400 mt-1">
            Visualizing actual responses from our {RESEARCH_METADATA.datasetSize} survey participants, supplemented by illustrative dataset models.
          </p>
        </div>

        {/* Dashboard Interactive Controls */}
        <div className="flex flex-wrap items-center gap-3">
          
          <div className="flex items-center gap-1.5 bg-slate-900 border border-slate-800 p-1 rounded-xl">
            <button
              onClick={() => setMetricView('screenTime')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                metricView === 'screenTime' ? 'bg-emerald-500 text-slate-950 shadow-md' : 'text-slate-400 hover:text-white'
              }`}
            >
              Screen Time
            </button>
            <button
              onClick={() => setMetricView('unlocks')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                metricView === 'unlocks' ? 'bg-emerald-500 text-slate-950 shadow-md' : 'text-slate-400 hover:text-white'
              }`}
            >
              Device Unlocks
            </button>
          </div>

          <div className="flex items-center gap-2 bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-xl text-xs text-slate-300">
            <Filter className="w-3.5 h-3.5 text-emerald-400" />
            <select
              value={selectedGroupFilter}
              onChange={(e) => setSelectedGroupFilter(e.target.value)}
              className="bg-transparent text-white font-semibold outline-none cursor-pointer"
            >
              <option value="All" className="bg-slate-900">All Demographics (n=16)</option>
              <option value="Students" className="bg-slate-900">Students (n=4)</option>
              <option value="Gamers" className="bg-slate-900">Gamers (n=3)</option>
              <option value="Professionals" className="bg-slate-900">Professionals (n=4)</option>
              <option value="Employees" className="bg-slate-900">Employees (n=3)</option>
              <option value="Seniors" className="bg-slate-900">Senior Citizens (n=2)</option>
            </select>
          </div>

        </div>
      </div>

      {/* Grid of 4 Core Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Chart 1: Bar Chart */}
        <div className="glass-card rounded-3xl p-6 border border-slate-800 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-emerald-400" />
              <h2 className="text-base font-bold text-white">Screen Time & Unlocks (Actual Cohorts n=16)</h2>
            </div>
            <span className="text-[11px] text-emerald-400 bg-emerald-950/80 border border-emerald-800 px-2.5 py-1 rounded-full font-mono">
              Survey Data
            </span>
          </div>

          <div className="h-72 w-full pt-2">
            <Bar data={barChartData} options={barChartOptions} />
          </div>
        </div>

        {/* Chart 2: Category Doughnut Chart */}
        <div className="glass-card rounded-3xl p-6 border border-slate-800 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <PieChart className="w-5 h-5 text-purple-400" />
              <h2 className="text-base font-bold text-white">App Category Share Distribution</h2>
            </div>
            <span className="text-[11px] text-slate-400 bg-slate-900 border border-slate-800 px-2.5 py-1 rounded-full">
              Illustrative Model
            </span>
          </div>

          <div className="h-72 w-full flex items-center justify-center pt-2">
            <Doughnut data={doughnutChartData} options={doughnutChartOptions} />
          </div>
        </div>

        {/* Chart 3: Hourly Usage Line Chart */}
        <div className="glass-card rounded-3xl p-6 border border-slate-800 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-blue-400" />
              <h2 className="text-base font-bold text-white">24-Hour Usage Intensity Curve</h2>
            </div>
            <span className="text-[11px] text-slate-400 bg-slate-900 border border-slate-800 px-2.5 py-1 rounded-full">
              Illustrative Curve
            </span>
          </div>

          <div className="h-72 w-full pt-2">
            <Line data={lineChartData} options={lineChartOptions} />
          </div>
        </div>

        {/* Chart 4: Radar Multi-dimensional Chart */}
        <div className="glass-card rounded-3xl p-6 border border-slate-800 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Activity className="w-5 h-5 text-amber-400" />
              <h2 className="text-base font-bold text-white">Multi-Dimensional Behavioral Radar</h2>
            </div>
            <span className="text-[11px] text-slate-400 bg-slate-900 border border-slate-800 px-2.5 py-1 rounded-full">
              5 Behavioral Axes
            </span>
          </div>

          <div className="h-72 w-full flex items-center justify-center pt-2">
            <Radar data={radarChartData} options={radarChartOptions} />
          </div>
        </div>

      </div>

      {/* Metric Breakdown Cards Footer */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
        
        <div className="bg-slate-900/60 rounded-2xl p-5 border border-slate-800 space-y-2">
          <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            Peak Activity Window
          </div>
          <p className="text-xl font-extrabold text-white">8:00 PM – 10:30 PM</p>
          <p className="text-xs text-slate-400">Evening usage peaks across students and corporate employees in our survey sample.</p>
        </div>

        <div className="bg-slate-900/60 rounded-2xl p-5 border border-slate-800 space-y-2">
          <div className="flex items-center gap-2 text-purple-400 text-xs font-bold uppercase tracking-wider">
            <Layers className="w-4 h-4" />
            Social Media Dominance
          </div>
          <p className="text-xl font-extrabold text-white">36% Category Share</p>
          <p className="text-xs text-slate-400">Social apps (Instagram, X, Threads) lead total daily screen time allocation.</p>
        </div>

        <div className="bg-slate-900/60 rounded-2xl p-5 border border-slate-800 space-y-2">
          <div className="flex items-center gap-2 text-blue-400 text-xs font-bold uppercase tracking-wider">
            <TrendingUp className="w-4 h-4" />
            Unlock Frequency
          </div>
          <p className="text-xl font-extrabold text-white">102 Unlocks / Day</p>
          <p className="text-xs text-slate-400">Sample respondents report unlocking their device ~102 times daily.</p>
        </div>

      </div>

    </div>
  );
};
