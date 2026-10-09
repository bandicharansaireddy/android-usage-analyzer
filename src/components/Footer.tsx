import React from 'react';
import { Link } from 'react-router-dom';
import { Smartphone, Shield, BookOpen, Heart, Info } from 'lucide-react';
import { RESEARCH_METADATA } from '../data/usageData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 text-slate-400 text-sm py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          {/* Col 1: Brand & Academic Context */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center">
                <Smartphone className="w-4 h-4 text-emerald-400" />
              </div>
              <span className="font-bold text-white tracking-tight">Android Usage Analyzer</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              An empirical study evaluating smartphone interaction patterns across {RESEARCH_METADATA.datasetSize} surveyed Android users, supplemented by illustrative trend estimates.
            </p>
            <div className="flex items-center gap-2 text-xs text-emerald-400 font-medium">
              <Shield className="w-3.5 h-3.5" />
              <span>Survey Sample: n = {RESEARCH_METADATA.datasetSize} Verified Respondents</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">Navigation Routes</h4>
            <ul className="space-y-2 text-xs">
              <li><Link to="/" className="hover:text-emerald-400 transition-colors">Home & Research Scope</Link></li>
              <li><Link to="/users" className="hover:text-emerald-400 transition-colors">User Groups Comparison</Link></li>
              <li><Link to="/dashboard" className="hover:text-emerald-400 transition-colors">Analytics Dashboard</Link></li>
              <li><Link to="/apps" className="hover:text-emerald-400 transition-colors">App Category Analysis</Link></li>
              <li><Link to="/survey" className="hover:text-emerald-400 transition-colors">Take Interactive Survey</Link></li>
              <li><Link to="/findings" className="hover:text-emerald-400 transition-colors">Findings & Recommendations</Link></li>
            </ul>
          </div>

          {/* Col 3: Research Methodology */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">Actual Survey Breakdown (n=16)</h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li>• 4 Students (Age 18-24)</li>
              <li>• 3 Mobile Gamers (Age 16-30)</li>
              <li>• 4 Professionals (Age 25-45)</li>
              <li>• 3 Corporate Employees (Age 22-55)</li>
              <li>• 2 Senior Citizens (Age 60+)</li>
            </ul>
          </div>

          {/* Col 4: Technology & Academic Disclaimer */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">Data Disclosure</h4>
            <p className="text-xs leading-relaxed text-slate-400">
              Actual survey cohort consists of n = 16 participants. Broader hourly trends and app battery ratings are presented as illustrative example models.
            </p>
            <div className="pt-2 border-t border-slate-800/60 flex items-center gap-1.5 text-[11px] text-slate-400">
              <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
              <span>Academic Computer Science Research</span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 Android Smartphone Usage Analyzer. Primary Survey Cohort: n = 16.</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              Engineered with <Heart className="w-3 h-3 text-red-500 fill-red-500" /> for academic data visualization
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
