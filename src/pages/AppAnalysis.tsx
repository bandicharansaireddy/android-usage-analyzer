import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  CATEGORY_DISTRIBUTION, 
  TOP_APPS, 
  AppDetail,
  RESEARCH_METADATA 
} from '../data/usageData';
import { 
  SmartphoneNfc, 
  Battery, 
  Bell, 
  Clock, 
  Layers, 
  Search, 
  ArrowRight,
  Zap,
  CheckCircle,
  AlertTriangle,
  Info
} from 'lucide-react';

export const AppAnalysis: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState('All');

  const categories = ['All', ...Array.from(new Set(TOP_APPS.map(a => a.category)))];

  const filteredApps = TOP_APPS.filter(app => {
    const matchesSearch = app.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          app.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategoryFilter === 'All' || app.category === selectedCategoryFilter;
    return matchesSearch && matchesCategory;
  });

  const getBatteryBadgeColor = (rank: AppDetail['batteryDrainRank']) => {
    switch (rank) {
      case 'Low': return 'bg-emerald-950 text-emerald-400 border-emerald-800';
      case 'Medium': return 'bg-blue-950 text-blue-400 border-blue-800';
      case 'High': return 'bg-amber-950 text-amber-400 border-amber-800';
      case 'Severe': return 'bg-rose-950 text-rose-400 border-rose-800';
    }
  };

  return (
    <div className="space-y-12 py-4">
      
      {/* Header */}
      <div className="space-y-3 border-b border-slate-800 pb-6">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-purple-400 bg-purple-950/60 border border-purple-800/60 px-3 py-1 rounded-full">
            Route: /apps
          </span>
          <span className="text-xs font-semibold text-slate-300 bg-slate-900 border border-slate-800 px-3 py-1 rounded-full flex items-center gap-1.5">
            <Info className="w-3.5 h-3.5 text-blue-400" />
            Illustrative App Category Models (Survey n = {RESEARCH_METADATA.datasetSize})
          </span>
        </div>
        <h1 className="text-3xl font-black text-white tracking-tight">Application Usage & Impact Analysis</h1>
        <p className="text-slate-400 text-sm max-w-3xl leading-relaxed">
          Evaluating Android application category distributions, top app screen time allocations, notification frequency loads, and device battery consumption dynamics.
        </p>
      </div>

      {/* Category Breakdown Percentage Bars */}
      <div className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-800 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-extrabold text-white tracking-tight flex items-center gap-2">
              <Layers className="w-5 h-5 text-purple-400" />
              App Category Share & Weekly Hours
            </h2>
            <p className="text-xs text-slate-400">Distribution of screen time across major application classifications</p>
          </div>
          <span className="text-xs font-mono text-emerald-400 bg-slate-900 border border-slate-800 px-3 py-1 rounded-full">
            100% Total Screen Time Share
          </span>
        </div>

        <div className="space-y-4">
          {CATEGORY_DISTRIBUTION.map((cat, idx) => (
            <div key={idx} className="space-y-1.5">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-white">{cat.category}</span>
                <div className="flex items-center gap-3">
                  <span className="text-slate-400 font-mono">{cat.avgHoursPerWeek} hrs/week</span>
                  <span className="font-black text-emerald-400 font-mono">{cat.percentage}%</span>
                </div>
              </div>

              <div className="w-full bg-slate-900 h-3 rounded-full overflow-hidden border border-slate-800 p-0.5">
                <div
                  className="h-full rounded-full transition-all duration-500"
                  style={{ width: `${cat.percentage}%`, backgroundColor: cat.color }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Top 10 Apps Deep Dive Section */}
      <div className="space-y-6">
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-black text-white tracking-tight">Top Utilized Android Applications</h2>
            <p className="text-xs text-slate-400">Breakdown of top apps sorted by daily time spent, battery drain, and notification count</p>
          </div>

          {/* Search & Category Filter Controls */}
          <div className="flex flex-wrap items-center gap-3">
            
            <div className="flex items-center gap-2 bg-slate-900 border border-slate-800 px-3 py-2 rounded-xl text-xs">
              <Search className="w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search app name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent text-white outline-none placeholder-slate-500 w-36"
              />
            </div>

            <div className="bg-slate-900 border border-slate-800 px-3 py-2 rounded-xl text-xs text-slate-300">
              <select
                value={selectedCategoryFilter}
                onChange={(e) => setSelectedCategoryFilter(e.target.value)}
                className="bg-transparent text-white outline-none cursor-pointer"
              >
                {categories.map((c, i) => (
                  <option key={i} value={c} className="bg-slate-900">{c}</option>
                ))}
              </select>
            </div>

          </div>
        </div>

        {/* Apps Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredApps.map((app, idx) => (
            <div
              key={idx}
              className="glass-card glass-card-hover rounded-2xl p-6 border border-slate-800/80 space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center text-emerald-400 font-bold text-lg">
                    {app.name.charAt(0)}
                  </div>
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md border ${getBatteryBadgeColor(app.batteryDrainRank)}`}>
                    Battery: {app.batteryDrainRank}
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-bold text-white">{app.name}</h3>
                  <p className="text-xs text-slate-400">{app.category}</p>
                </div>
              </div>

              <div className="space-y-2 pt-3 border-t border-slate-800/60 text-xs">
                
                <div className="flex items-center justify-between">
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-emerald-400" />
                    Daily Time Spent:
                  </span>
                  <span className="font-extrabold text-emerald-400 font-mono">{app.avgMinutesPerDay} Mins/Day</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <Bell className="w-3.5 h-3.5 text-blue-400" />
                    Daily Notifications:
                  </span>
                  <span className="font-bold text-slate-200 font-mono">{app.avgNotifications} alerts</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <SmartphoneNfc className="w-3.5 h-3.5 text-purple-400" />
                    Cohort Reach:
                  </span>
                  <span className="font-bold text-slate-200 font-mono">{app.userPercentage}% users</span>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Battery & Notification Impact Note Card */}
      <div className="rounded-3xl bg-slate-900/90 border border-slate-800 p-6 sm:p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-rose-400 text-sm font-bold">
            <AlertTriangle className="w-4 h-4" />
            <span>Severe Battery Drain Drivers</span>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            3D Gaming engines (PUBG, BGMI) and high-brightness video applications (YouTube 4K, Instagram Reels) contribute significantly to total daily battery depletion across devices, raising GPU temperatures above 40°C.
          </p>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-2 text-emerald-400 text-sm font-bold">
            <CheckCircle className="w-4 h-4" />
            <span>Optimization Recommendation</span>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            Restricting high-frequency notification permissions on non-essential apps reduced daily unlock triggers by 32% during experimental trial observations.
          </p>
          <Link
            to="/findings"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 hover:text-emerald-300"
          >
            <span>Read full findings</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>

    </div>
  );
};
