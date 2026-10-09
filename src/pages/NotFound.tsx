import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Smartphone, Home, AlertCircle, ArrowLeft } from 'lucide-react';

export const NotFound: React.FC = () => {
  const location = useLocation();

  return (
    <div className="min-h-[70vh] flex items-center justify-center py-12 px-4">
      <div className="glass-card rounded-3xl p-8 sm:p-12 border border-slate-800 text-center max-w-lg w-full space-y-6">
        
        {/* Error Badge & Icon */}
        <div className="mx-auto w-20 h-20 rounded-3xl bg-rose-950/60 border border-rose-500/40 flex items-center justify-center text-rose-400 shadow-xl shadow-rose-500/10">
          <AlertCircle className="w-10 h-10 animate-bounce" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-mono font-bold text-rose-400 uppercase tracking-widest bg-rose-950/80 px-3 py-1 rounded-full border border-rose-800/60">
            Error 404 — Page Not Found
          </span>
          <h1 className="text-3xl font-black text-white tracking-tight pt-2">
            Route Does Not Exist
          </h1>
          <p className="text-xs text-slate-400 leading-relaxed">
            The requested page path <code className="text-emerald-400 font-mono bg-slate-900 px-2 py-0.5 rounded">{location.pathname}</code> could not be found on the Android Usage Analyzer research portal.
          </p>
        </div>

        <div className="pt-4 border-t border-slate-800/80">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-slate-950 font-bold text-sm shadow-xl shadow-emerald-500/20 hover:scale-[1.02] transition-all w-full"
          >
            <Home className="w-4 h-4" />
            <span>Return to Home Page</span>
          </Link>
        </div>

      </div>
    </div>
  );
};
