import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  LayoutDashboard, 
  SmartphoneNfc, 
  ClipboardList, 
  FileText, 
  ArrowRight, 
  Clock, 
  Unlock, 
  UserCheck, 
  TrendingUp, 
  BarChart3, 
  ShieldCheck, 
  Sparkles,
  Layers,
  Info
} from 'lucide-react';
import { RESEARCH_METADATA } from '../data/usageData';

export const Home: React.FC = () => {
  const statCards = [
    {
      title: "Actual Survey Cohort",
      value: "16 Users",
      subtitle: "Verified survey participants (n = 16)",
      icon: UserCheck,
      color: "from-blue-500/20 to-cyan-500/20 border-blue-500/30 text-blue-400"
    },
    {
      title: "Daily Avg Screen Time",
      value: "4.8 Hrs",
      subtitle: "Surveyed sample average",
      icon: Clock,
      color: "from-emerald-500/20 to-teal-500/20 border-emerald-500/30 text-emerald-400"
    },
    {
      title: "Daily Device Unlocks",
      value: "102 Times",
      subtitle: "68% notification-triggered",
      icon: Unlock,
      color: "from-purple-500/20 to-indigo-500/20 border-purple-500/30 text-purple-400"
    },
    {
      title: "Demographic Groups",
      value: "5 Groups",
      subtitle: "Students to Senior Citizens",
      icon: Layers,
      color: "from-amber-500/20 to-orange-500/20 border-amber-500/30 text-amber-400"
    }
  ];

  const navigationPages = [
    {
      path: "/users",
      title: "User Groups Comparison",
      description: "Compare screen time habits and app preferences across Students (n=4), Gamers (n=3), Professionals (n=4), Employees (n=3), and Seniors (n=2).",
      icon: Users,
      badge: "5 Cohorts (n=16)",
      gradient: "from-blue-600 to-indigo-600"
    },
    {
      path: "/dashboard",
      title: "Analytics Dashboard",
      description: "Explore Chart.js visualizations combining actual 16-respondent data with illustrative hourly curves and behavioral radar metrics.",
      icon: LayoutDashboard,
      badge: "Interactive Charts",
      gradient: "from-emerald-600 to-teal-600"
    },
    {
      path: "/apps",
      title: "Application Usage Analysis",
      description: "Examine category share breakdown, top utilized Android apps (Instagram, YouTube, WhatsApp, BGMI), notification loads, and battery consumption.",
      icon: SmartphoneNfc,
      badge: "App Category Metrics",
      gradient: "from-purple-600 to-pink-600"
    },
    {
      path: "/survey",
      title: "Interactive User Survey",
      description: "Submit your own usage metrics to compare your daily screen time against our 16-respondent survey dataset in real-time.",
      icon: ClipboardList,
      badge: "Live Form & Benchmarks",
      gradient: "from-amber-600 to-orange-600"
    },
    {
      path: "/findings",
      title: "Findings & Recommendations",
      description: "Review empirical findings from our 16 survey respondents regarding notification fragmentation, sleep latency, and Android Digital Wellbeing steps.",
      icon: FileText,
      badge: "Academic Conclusions",
      gradient: "from-cyan-600 to-blue-600"
    }
  ];

  return (
    <div className="space-y-16 py-4">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-950 border border-slate-800 p-8 sm:p-12 lg:p-16">
        <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl pointer-events-none"></div>
        
        <div className="relative z-10 max-w-3xl space-y-6">
          <div className="flex flex-wrap items-center gap-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-300 text-xs font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Academic Survey Study (Actual Sample: n = 16)</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-slate-300 text-xs font-medium">
              <Info className="w-3.5 h-3.5 text-blue-400" />
              <span>Extended Trends: Illustrative Data</span>
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
            Android Smartphone <br />
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
              Usage Analyzer
            </span>
          </h1>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
            An empirical investigation analyzing Android smartphone usage across diverse demographic groups—evaluating screen time duration, unlock frequencies, app category preferences, and digital wellbeing impacts.
          </p>

          {/* Call to Action Buttons */}
          <div className="pt-4 flex flex-wrap gap-4 items-center">
            <Link
              to="/dashboard"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-slate-950 font-bold text-sm shadow-xl shadow-emerald-500/20 hover:scale-[1.02] hover:shadow-emerald-500/35 transition-all duration-200"
            >
              <BarChart3 className="w-4 h-4" />
              <span>Explore Analytics Dashboard</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/users"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-slate-200 font-semibold text-sm border border-slate-700 hover:border-slate-600 transition-all duration-200"
            >
              <Users className="w-4 h-4 text-emerald-400" />
              <span>Compare User Groups (n=16)</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Key Research Statistics Grid */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-white tracking-tight">Survey Cohort Metrics</h2>
            <p className="text-xs text-slate-400">Actual survey conducted with {RESEARCH_METADATA.datasetSize} verified respondents</p>
          </div>
          <span className="text-xs text-slate-400 bg-slate-900 border border-slate-800 px-3 py-1 rounded-full font-mono">
            {RESEARCH_METADATA.surveyPeriod}
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {statCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="glass-card glass-card-hover rounded-2xl p-6 border border-slate-800/80 space-y-4 relative overflow-hidden group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">{card.title}</span>
                  <div className={`p-2.5 rounded-xl bg-gradient-to-br ${card.color} border`}>
                    <Icon className="w-5 h-5" />
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-extrabold text-white tracking-tight group-hover:text-emerald-400 transition-colors">
                    {card.value}
                  </div>
                  <div className="text-xs text-slate-400 mt-1">{card.subtitle}</div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Route Navigation Cards Grid (Multi-Page Route Hub) */}
      <section className="space-y-6">
        <div className="border-b border-slate-800 pb-4">
          <h2 className="text-2xl font-extrabold text-white tracking-tight">Research Explorer Routes</h2>
          <p className="text-sm text-slate-400">Navigate directly to specific research modules without single-page scrolling</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {navigationPages.map((page) => {
            const Icon = page.icon;
            return (
              <div
                key={page.path}
                className="glass-card glass-card-hover rounded-2xl p-6 flex flex-col justify-between border border-slate-800/80 group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${page.gradient} flex items-center justify-center text-white shadow-lg shadow-emerald-500/10`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-2.5 py-1 rounded-full">
                      {page.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">
                    {page.title}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {page.description}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-slate-800/60">
                  <Link
                    to={page.path}
                    className="inline-flex items-center justify-between w-full text-xs font-bold text-emerald-400 group-hover:text-emerald-300 transition-colors"
                  >
                    <span>Open {page.title}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Secondary Information Banner */}
      <section className="rounded-2xl bg-slate-900/80 border border-slate-800 p-6 sm:p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-emerald-400 text-sm font-bold">
            <TrendingUp className="w-4 h-4" />
            <span>Actual Sample Size</span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Primary survey responses were collected directly from n = 16 participants across 5 demographic groups.
          </p>
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2 text-blue-400 text-sm font-bold">
            <Sparkles className="w-4 h-4" />
            <span>Interactive Survey Benchmark</span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Take our 1-minute survey to benchmark your screen time against our 16-person cohort with real-time feedback.
          </p>
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2 text-purple-400 text-sm font-bold">
            <Info className="w-4 h-4" />
            <span>Data Transparency</span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Actual survey findings are clearly distinguished from illustrative example trend models throughout the site.
          </p>
        </div>
      </section>

    </div>
  );
};
