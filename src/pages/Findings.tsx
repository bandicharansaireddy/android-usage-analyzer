import React from 'react';
import { 
  KEY_FINDINGS, 
  WELLBEING_RECOMMENDATIONS, 
  RESEARCH_METADATA 
} from '../data/usageData';
import { 
  FileText, 
  ShieldAlert, 
  Moon, 
  Timer, 
  BatteryCharging, 
  CheckCircle2, 
  BookOpen, 
  Lightbulb,
  Info
} from 'lucide-react';

const RECOMMENDATION_ICONS: Record<string, React.ElementType> = {
  ShieldAlert,
  Moon,
  Timer,
  BatteryCharging
};

export const Findings: React.FC = () => {
  return (
    <div className="space-y-12 py-4">
      
      {/* Header */}
      <div className="space-y-3 border-b border-slate-800 pb-6">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400 bg-cyan-950/60 border border-cyan-800/60 px-3 py-1 rounded-full">
            Route: /findings
          </span>
          <span className="text-xs font-semibold text-slate-300 bg-slate-900 border border-slate-800 px-3 py-1 rounded-full flex items-center gap-1.5">
            <Info className="w-3.5 h-3.5 text-blue-400" />
            Survey Findings (n = {RESEARCH_METADATA.datasetSize} Participants)
          </span>
        </div>
        <h1 className="text-3xl font-black text-white tracking-tight">
          Research Findings & Android OS Recommendations
        </h1>
        <p className="text-slate-400 text-sm max-w-3xl leading-relaxed">
          Empirical conclusions and actionable digital wellbeing configurations derived from our survey sample of {RESEARCH_METADATA.datasetSize} Android smartphone users.
        </p>
      </div>

      {/* 4 Primary Findings Cards */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-black text-white tracking-tight flex items-center gap-2">
            <FileText className="w-5 h-5 text-emerald-400" />
            Empirical Findings & Cognitive Patterns
          </h2>
          <span className="text-xs font-mono text-emerald-400 bg-slate-900 border border-slate-800 px-3 py-1 rounded-full">
            Survey Sample: n = {RESEARCH_METADATA.datasetSize}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {KEY_FINDINGS.map((finding) => (
            <div
              key={finding.id}
              className="glass-card glass-card-hover rounded-3xl p-6 sm:p-8 border border-slate-800 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-emerald-400 bg-emerald-950/80 border border-emerald-800/60 px-2.5 py-1 rounded-full">
                    {finding.category}
                  </span>
                  <span className="text-[11px] font-extrabold text-amber-300 bg-amber-950/60 border border-amber-800/60 px-2.5 py-1 rounded-full">
                    {finding.statHighlight}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white">{finding.title}</h3>
                <p className="text-xs text-slate-300 font-medium leading-relaxed">{finding.summary}</p>
              </div>

              <div className="pt-4 border-t border-slate-800/80 space-y-2">
                <p className="text-xs text-slate-400 leading-relaxed bg-slate-950/60 p-3.5 rounded-xl border border-slate-800/80">
                  {finding.details}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Actionable Android Digital Wellbeing Recommendations */}
      <div className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-800 space-y-6">
        <div className="border-b border-slate-800 pb-4">
          <h2 className="text-2xl font-extrabold text-white tracking-tight flex items-center gap-2">
            <Lightbulb className="w-6 h-6 text-amber-400" />
            Recommended Android OS Wellbeing Configurations
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            System settings proven to decrease context switching and improve sleep hygiene
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {WELLBEING_RECOMMENDATIONS.map((rec, i) => {
            const IconComp = RECOMMENDATION_ICONS[rec.icon] || CheckCircle2;
            return (
              <div key={i} className="bg-slate-900/70 rounded-2xl p-6 border border-slate-800 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-950 border border-emerald-800/60 flex items-center justify-center text-emerald-400">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-white">{rec.title}</h3>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {rec.description}
                </p>

                <div className="pt-2">
                  <span className="text-[11px] font-mono font-semibold text-emerald-400 bg-emerald-950/80 border border-emerald-800/60 px-3 py-1 rounded-lg block">
                    📍 {rec.actionTip}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Research Methodology Note & Citation */}
      <div className="rounded-3xl bg-slate-900/90 border border-slate-800 p-6 sm:p-8 space-y-4">
        <div className="flex items-center gap-2 text-white font-bold text-base">
          <BookOpen className="w-5 h-5 text-emerald-400" />
          <span>Academic Methodology & Citation Note</span>
        </div>

        <p className="text-xs text-slate-400 leading-relaxed">
          Primary survey responses were collected directly from n = {RESEARCH_METADATA.datasetSize} Android smartphone users across 5 demographic cohorts ({RESEARCH_METADATA.surveyPeriod}). Broader trend graphics and category shares are provided as illustrative example models.
        </p>

        <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 font-mono text-[11px] text-slate-300">
          Android Usage Analyzer (2026). "An Empirical Survey of Android Smartphone Interaction Patterns Across 16 User Cohorts". Department of Computer Science Research Publication.
        </div>
      </div>

    </div>
  );
};
