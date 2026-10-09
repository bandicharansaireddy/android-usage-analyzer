import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  USER_GROUPS, 
  UserGroup,
  RESEARCH_METADATA 
} from '../data/usageData';
import { 
  GraduationCap, 
  Gamepad2, 
  Briefcase, 
  Building2, 
  HeartHandshake, 
  Clock, 
  Unlock, 
  Battery, 
  Zap, 
  Bell, 
  CheckCircle2, 
  ArrowRight,
  Sliders,
  Info
} from 'lucide-react';

const ICON_MAP: Record<string, React.ElementType> = {
  GraduationCap,
  Gamepad2,
  Briefcase,
  Building2,
  HeartHandshake
};

export const UserGroups: React.FC = () => {
  const [selectedGroupId, setSelectedGroupId] = useState<string>(USER_GROUPS[0].id);

  const selectedGroup = USER_GROUPS.find(g => g.id === selectedGroupId) || USER_GROUPS[0];
  const SelectedIcon = ICON_MAP[selectedGroup.icon] || GraduationCap;

  return (
    <div className="space-y-12 py-4">
      
      {/* Page Header */}
      <div className="space-y-3 border-b border-slate-800 pb-6">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-3 py-1 rounded-full">
            Route: /users
          </span>
          <span className="text-xs font-semibold text-slate-300 bg-slate-900 border border-slate-800 px-3 py-1 rounded-full flex items-center gap-1.5">
            <Info className="w-3.5 h-3.5 text-blue-400" />
            Actual Survey Cohort: n = {RESEARCH_METADATA.datasetSize} Respondents
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
          Demographic User Groups Comparison
        </h1>
        <p className="text-slate-400 text-sm max-w-3xl leading-relaxed">
          Comparative analysis across 5 demographic cohorts in our 16-person survey sample: Students (n=4), Gamers (n=3), Professionals (n=4), Employees (n=3), and Senior Citizens (n=2). Select a group to inspect their screen time metrics and usage behavior.
        </p>
      </div>

      {/* Group Selector Cards Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
        {USER_GROUPS.map((group) => {
          const IconComp = ICON_MAP[group.icon] || GraduationCap;
          const isSelected = group.id === selectedGroupId;

          return (
            <button
              key={group.id}
              onClick={() => setSelectedGroupId(group.id)}
              className={`p-4 rounded-2xl border text-left transition-all duration-200 flex flex-col justify-between space-y-3 ${
                isSelected
                  ? 'bg-slate-900 border-emerald-500 shadow-lg shadow-emerald-500/15 scale-[1.02]'
                  : 'bg-slate-950/60 border-slate-800 hover:border-slate-700 hover:bg-slate-900/60'
              }`}
            >
              <div className="flex items-center justify-between">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-white"
                  style={{ backgroundColor: group.color + '25', border: `1px solid ${group.color}60`, color: group.color }}
                >
                  <IconComp className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono text-slate-400 bg-slate-800/80 px-2 py-0.5 rounded-md">
                  n={group.sampleCount}
                </span>
              </div>

              <div>
                <h3 className={`text-sm font-bold ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                  {group.name}
                </h3>
                <p className="text-xs font-semibold text-emerald-400 mt-0.5">
                  {group.avgScreenTime}h / day
                </p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Group Detailed View Card */}
      <div className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-800 space-y-8">
        
        {/* Header of Selected Group */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-slate-800 pb-6">
          <div className="flex items-center gap-4">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center text-white shadow-xl"
              style={{ backgroundColor: selectedGroup.color, color: '#ffffff' }}
            >
              <SelectedIcon className="w-8 h-8" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-2xl font-extrabold text-white tracking-tight">{selectedGroup.name} Profile</h2>
                <span className="text-xs font-semibold text-emerald-400 bg-emerald-950 border border-emerald-800 px-2.5 py-0.5 rounded-full">
                  Survey Sub-sample: n = {selectedGroup.sampleCount} Users
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-1">{selectedGroup.description}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/dashboard"
              className="inline-flex items-center gap-2 text-xs font-bold px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
            >
              <span>View in Dashboard</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* 4 Stat Highlights Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          <div className="bg-slate-900/80 rounded-2xl p-4 border border-slate-800/80 space-y-2">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span>Avg Screen Time</span>
              <Clock className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="text-2xl font-black text-white">{selectedGroup.avgScreenTime} Hrs / Day</div>
            <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
              <div
                className="bg-emerald-500 h-full rounded-full"
                style={{ width: `${(selectedGroup.avgScreenTime / 10) * 100}%` }}
              ></div>
            </div>
          </div>

          <div className="bg-slate-900/80 rounded-2xl p-4 border border-slate-800/80 space-y-2">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span>Daily Device Unlocks</span>
              <Unlock className="w-4 h-4 text-blue-400" />
            </div>
            <div className="text-2xl font-black text-white">{selectedGroup.avgUnlocks} Unlocks</div>
            <p className="text-[11px] text-slate-400">Frequency per 24h cycle</p>
          </div>

          <div className="bg-slate-900/80 rounded-2xl p-4 border border-slate-800/80 space-y-2">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span>Battery Drain Impact</span>
              <Battery className="w-4 h-4 text-purple-400" />
            </div>
            <div className="text-2xl font-black text-white">{selectedGroup.batteryDrainScore} / 10</div>
            <p className="text-[11px] text-slate-400">GPU & Background load rating</p>
          </div>

          <div className="bg-slate-900/80 rounded-2xl p-4 border border-slate-800/80 space-y-2">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span>Peak Usage Window</span>
              <Zap className="w-4 h-4 text-amber-400" />
            </div>
            <div className="text-sm font-bold text-amber-300 pt-1">{selectedGroup.peakHours}</div>
            <p className="text-[11px] text-slate-400">Highest daily activity</p>
          </div>

        </div>

        {/* Breakdown Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <div className="space-y-4 bg-slate-950/60 rounded-2xl p-5 border border-slate-800">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Primary Purpose & Key Usage Behavior
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed bg-slate-900/60 p-3 rounded-xl border border-slate-800">
              {selectedGroup.primaryUse}
            </p>
            <div className="space-y-2">
              <span className="text-xs font-semibold text-slate-400">Characteristic Usage Pattern:</span>
              <p className="text-xs text-emerald-300 font-medium bg-emerald-950/40 border border-emerald-800/40 p-3 rounded-xl">
                "{selectedGroup.keyBehavior}"
              </p>
            </div>
          </div>

          <div className="space-y-4 bg-slate-950/60 rounded-2xl p-5 border border-slate-800">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <Bell className="w-4 h-4 text-blue-400" />
              Top Preferred Application Categories
            </h3>
            <div className="flex flex-wrap gap-2">
              {selectedGroup.topAppCategories.map((cat, i) => (
                <span
                  key={i}
                  className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-slate-200"
                >
                  {cat}
                </span>
              ))}
            </div>
            
            <div className="pt-2 border-t border-slate-800 space-y-1">
              <span className="text-xs font-semibold text-slate-400">Notification Responsiveness:</span>
              <p className="text-xs text-slate-300 font-medium">{selectedGroup.notificationSensitivity}</p>
            </div>
          </div>

        </div>

      </div>

      {/* Side-by-Side Comparative Matrix Table */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-extrabold text-white tracking-tight flex items-center gap-2">
            <Sliders className="w-5 h-5 text-emerald-400" />
            Full Comparative Matrix (All 5 Demographic Cohorts)
          </h2>
          <span className="text-xs text-emerald-400 font-mono bg-slate-900 border border-slate-800 px-3 py-1 rounded-full">
            Actual Survey Cohort: n = {RESEARCH_METADATA.datasetSize} Total Respondents
          </span>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-800 glass-card">
          <table className="w-full text-left text-xs text-slate-300">
            <thead className="bg-slate-900/90 text-slate-200 uppercase tracking-wider text-[11px] font-bold border-b border-slate-800">
              <tr>
                <th className="px-5 py-4">User Group</th>
                <th className="px-5 py-4">Survey Sample Size</th>
                <th className="px-5 py-4">Daily Screen Time</th>
                <th className="px-5 py-4">Daily Unlocks</th>
                <th className="px-5 py-4">Battery Drain Rating</th>
                <th className="px-5 py-4">Peak Activity Hours</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {USER_GROUPS.map((group) => (
                <tr
                  key={group.id}
                  onClick={() => setSelectedGroupId(group.id)}
                  className={`hover:bg-slate-900/80 cursor-pointer transition-colors ${
                    group.id === selectedGroupId ? 'bg-emerald-950/20' : ''
                  }`}
                >
                  <td className="px-5 py-4 font-bold text-white flex items-center gap-3">
                    <span className="w-3 h-3 rounded-full" style={{ backgroundColor: group.color }}></span>
                    <span>{group.name}</span>
                  </td>
                  <td className="px-5 py-4 text-emerald-400 font-mono font-bold">n = {group.sampleCount} Users</td>
                  <td className="px-5 py-4 font-extrabold text-emerald-400">{group.avgScreenTime} Hours</td>
                  <td className="px-5 py-4 text-slate-200 font-mono">{group.avgUnlocks} unlocks</td>
                  <td className="px-5 py-4">
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-slate-800 border border-slate-700 text-slate-200">
                      {group.batteryDrainScore} / 10
                    </span>
                  </td>
                  <td className="px-5 py-4 text-amber-300 font-medium">{group.peakHours}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};
