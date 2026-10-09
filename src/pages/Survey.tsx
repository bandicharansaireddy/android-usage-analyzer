import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  RESEARCH_METADATA, 
  USER_GROUPS 
} from '../data/usageData';
import { 
  ClipboardList, 
  CheckCircle2, 
  Sparkles, 
  AlertCircle, 
  RotateCcw, 
  Award,
  ArrowRight,
  Info
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface SurveyFormData {
  ageGroup: string;
  occupation: string;
  screenTimeHours: string;
  unlocksEstimate: string;
  primaryPurpose: string;
  phoneBrand: string;
}

export const Survey: React.FC = () => {
  const [formData, setFormData] = useState<SurveyFormData>({
    ageGroup: '',
    occupation: '',
    screenTimeHours: '',
    unlocksEstimate: '',
    primaryPurpose: '',
    phoneBrand: ''
  });

  const [errors, setErrors] = useState<Partial<Record<keyof SurveyFormData, string>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<SurveyFormData | null>(null);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof SurveyFormData, string>> = {};

    if (!formData.ageGroup) newErrors.ageGroup = 'Please select your age group';
    if (!formData.occupation) newErrors.occupation = 'Please select your demographic group';
    if (!formData.screenTimeHours || isNaN(Number(formData.screenTimeHours)) || Number(formData.screenTimeHours) < 0.5 || Number(formData.screenTimeHours) > 24) {
      newErrors.screenTimeHours = 'Enter valid screen time between 0.5 and 24 hours';
    }
    if (!formData.unlocksEstimate || isNaN(Number(formData.unlocksEstimate)) || Number(formData.unlocksEstimate) < 1 || Number(formData.unlocksEstimate) > 500) {
      newErrors.unlocksEstimate = 'Enter valid estimated unlocks per day (1 to 500)';
    }
    if (!formData.primaryPurpose) newErrors.primaryPurpose = 'Select primary phone usage purpose';
    if (!formData.phoneBrand) newErrors.phoneBrand = 'Select your smartphone brand';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validate()) {
      setSubmittedData({ ...formData });
      setSubmitted(true);

      // Trigger Confetti Celebration
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setSubmittedData(null);
    setFormData({
      ageGroup: '',
      occupation: '',
      screenTimeHours: '',
      unlocksEstimate: '',
      primaryPurpose: '',
      phoneBrand: ''
    });
    setErrors({});
  };

  // Compare user input against dataset averages
  const cohortMatch = USER_GROUPS.find(g => g.name.toLowerCase().includes(formData.occupation.toLowerCase())) || USER_GROUPS[0];
  const userHours = Number(submittedData?.screenTimeHours || 0);
  const cohortHours = cohortMatch.avgScreenTime;
  const diffHours = (userHours - cohortHours).toFixed(1);

  return (
    <div className="space-y-12 py-4 max-w-4xl mx-auto">
      
      {/* Header */}
      <div className="space-y-3 text-center border-b border-slate-800 pb-6">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 bg-amber-950/60 border border-amber-800/60 px-3 py-1 rounded-full">
          <span>Route: /survey</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
          Interactive Usage Survey & Benchmark
        </h1>
        <p className="text-slate-400 text-sm max-w-2xl mx-auto leading-relaxed">
          Submit your daily smartphone interaction metrics to compare your screen time against our actual dataset of {RESEARCH_METADATA.datasetSize} surveyed Android users.
        </p>
      </div>

      {!submitted ? (
        /* Form Section */
        <form onSubmit={handleSubmit} className="glass-card rounded-3xl p-6 sm:p-10 border border-slate-800 space-y-8">
          
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div className="flex items-center gap-3">
              <ClipboardList className="w-6 h-6 text-emerald-400" />
              <h2 className="text-xl font-bold text-white">Your Smartphone Profile Form</h2>
            </div>
            <span className="text-[11px] text-slate-400 bg-slate-900 border border-slate-800 px-3 py-1 rounded-full">
              Session-based comparison
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Age Group */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-200">1. Select Your Age Group *</label>
              <select
                value={formData.ageGroup}
                onChange={(e) => setFormData({ ...formData, ageGroup: e.target.value })}
                className={`w-full bg-slate-900 border text-xs font-medium rounded-xl p-3 outline-none transition-colors ${
                  errors.ageGroup ? 'border-rose-500 text-rose-300' : 'border-slate-800 text-slate-100 focus:border-emerald-500'
                }`}
              >
                <option value="">-- Choose Age Range --</option>
                <option value="18-24">18 – 24 Years (Gen Z / Student)</option>
                <option value="25-34">25 – 34 Years (Young Professional)</option>
                <option value="35-50">35 – 50 Years (Established / Employee)</option>
                <option value="50+">50+ Years (Senior / Veteran)</option>
              </select>
              {errors.ageGroup && <p className="text-[11px] text-rose-400 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.ageGroup}</p>}
            </div>

            {/* Demographic Group */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-200">2. Primary Demographic Category *</label>
              <select
                value={formData.occupation}
                onChange={(e) => setFormData({ ...formData, occupation: e.target.value })}
                className={`w-full bg-slate-900 border text-xs font-medium rounded-xl p-3 outline-none transition-colors ${
                  errors.occupation ? 'border-rose-500 text-rose-300' : 'border-slate-800 text-slate-100 focus:border-emerald-500'
                }`}
              >
                <option value="">-- Choose Category --</option>
                <option value="Students">Student / Learner (n=4)</option>
                <option value="Gamers">Mobile Gamer (n=3)</option>
                <option value="Professionals">Professional / Executive (n=4)</option>
                <option value="Employees">Corporate / Desk Employee (n=3)</option>
                <option value="Senior Citizens">Senior Citizen / Retired (n=2)</option>
              </select>
              {errors.occupation && <p className="text-[11px] text-rose-400 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.occupation}</p>}
            </div>

            {/* Daily Screen Time */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-200">3. Average Daily Screen Time (Hours) *</label>
              <input
                type="number"
                step="0.5"
                placeholder="e.g. 5.5"
                value={formData.screenTimeHours}
                onChange={(e) => setFormData({ ...formData, screenTimeHours: e.target.value })}
                className={`w-full bg-slate-900 border text-xs font-medium rounded-xl p-3 outline-none transition-colors ${
                  errors.screenTimeHours ? 'border-rose-500 text-rose-300' : 'border-slate-800 text-slate-100 focus:border-emerald-500'
                }`}
              />
              {errors.screenTimeHours && <p className="text-[11px] text-rose-400 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.screenTimeHours}</p>}
            </div>

            {/* Estimated Unlocks */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-200">4. Estimated Daily Device Unlocks *</label>
              <input
                type="number"
                placeholder="e.g. 90"
                value={formData.unlocksEstimate}
                onChange={(e) => setFormData({ ...formData, unlocksEstimate: e.target.value })}
                className={`w-full bg-slate-900 border text-xs font-medium rounded-xl p-3 outline-none transition-colors ${
                  errors.unlocksEstimate ? 'border-rose-500 text-rose-300' : 'border-slate-800 text-slate-100 focus:border-emerald-500'
                }`}
              />
              {errors.unlocksEstimate && <p className="text-[11px] text-rose-400 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.unlocksEstimate}</p>}
            </div>

            {/* Primary Usage Purpose */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-200">5. Primary Phone Usage Purpose *</label>
              <select
                value={formData.primaryPurpose}
                onChange={(e) => setFormData({ ...formData, primaryPurpose: e.target.value })}
                className={`w-full bg-slate-900 border text-xs font-medium rounded-xl p-3 outline-none transition-colors ${
                  errors.primaryPurpose ? 'border-rose-500 text-rose-300' : 'border-slate-800 text-slate-100 focus:border-emerald-500'
                }`}
              >
                <option value="">-- Select Purpose --</option>
                <option value="Social Media & Reels">Social Media & Short Videos</option>
                <option value="Mobile Gaming">Competitive / Casual Gaming</option>
                <option value="Work & Productivity">Work Correspondence & Business</option>
                <option value="Family & Messaging">Family Communication & WhatsApp</option>
                <option value="Media Streaming">YouTube / Hotstar Streaming</option>
              </select>
              {errors.primaryPurpose && <p className="text-[11px] text-rose-400 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.primaryPurpose}</p>}
            </div>

            {/* Smartphone Brand */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-200">6. Android Device Brand *</label>
              <select
                value={formData.phoneBrand}
                onChange={(e) => setFormData({ ...formData, phoneBrand: e.target.value })}
                className={`w-full bg-slate-900 border text-xs font-medium rounded-xl p-3 outline-none transition-colors ${
                  errors.phoneBrand ? 'border-rose-500 text-rose-300' : 'border-slate-800 text-slate-100 focus:border-emerald-500'
                }`}
              >
                <option value="">-- Choose Brand --</option>
                <option value="Samsung Galaxy">Samsung Galaxy</option>
                <option value="Xiaomi / Redmi / Poco">Xiaomi / Redmi / Poco</option>
                <option value="Google Pixel">Google Pixel</option>
                <option value="OnePlus">OnePlus</option>
                <option value="Realme / Vivo / Oppo">Realme / Vivo / Oppo</option>
                <option value="Motorola / Other">Motorola / Other Brand</option>
              </select>
              {errors.phoneBrand && <p className="text-[11px] text-rose-400 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.phoneBrand}</p>}
            </div>

          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-[11px] text-slate-400 flex items-center gap-1.5">
              <Info className="w-3.5 h-3.5 text-blue-400" />
              Responses are evaluated in local session state for instant benchmark view.
            </p>

            <button
              type="submit"
              className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-slate-950 font-bold text-sm shadow-xl shadow-emerald-500/20 hover:scale-[1.02] transition-all flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>Submit & Compare Against Benchmark</span>
            </button>
          </div>

        </form>
      ) : (
        /* Benchmark Comparison Summary View after Submission */
        <div className="glass-card rounded-3xl p-6 sm:p-10 border border-emerald-500/40 space-y-8 animate-in fade-in zoom-in-95 duration-300">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-black text-white">Survey Benchmark Comparison</h2>
                <p className="text-xs text-slate-400">Evaluated against {submittedData?.occupation} sub-sample (n={cohortMatch.sampleCount})</p>
              </div>
            </div>

            <button
              onClick={handleReset}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white text-xs font-semibold"
            >
              <RotateCcw className="w-3.5 h-3.5 text-emerald-400" />
              <span>Submit Another Entry</span>
            </button>
          </div>

          {/* User vs Cohort Comparative Metric Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            
            <div className="bg-slate-900/80 rounded-2xl p-5 border border-slate-800 space-y-2">
              <span className="text-xs font-bold text-slate-400">Your Reported Screen Time</span>
              <div className="text-3xl font-black text-emerald-400">{userHours} Hrs / Day</div>
              <p className="text-[11px] text-slate-400">
                {Number(diffHours) > 0 ? `${diffHours} hrs HIGHER than ${cohortMatch.name} average` : `${Math.abs(Number(diffHours))} hrs LOWER than average`}
              </p>
            </div>

            <div className="bg-slate-900/80 rounded-2xl p-5 border border-slate-800 space-y-2">
              <span className="text-xs font-bold text-slate-400">Cohort Benchmark Average</span>
              <div className="text-3xl font-black text-white">{cohortMatch.avgScreenTime} Hrs / Day</div>
              <p className="text-[11px] text-slate-400">Based on n = {cohortMatch.sampleCount} survey respondents</p>
            </div>

            <div className="bg-slate-900/80 rounded-2xl p-5 border border-slate-800 space-y-2">
              <span className="text-xs font-bold text-slate-400">Estimated Daily Unlocks</span>
              <div className="text-3xl font-black text-blue-400">{submittedData?.unlocksEstimate} Unlocks</div>
              <p className="text-[11px] text-slate-400">Cohort unlock average: {cohortMatch.avgUnlocks} unlocks</p>
            </div>

          </div>

          {/* Detailed Analytical Feedback */}
          <div className="bg-slate-950/80 rounded-2xl p-6 border border-slate-800 space-y-4">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <Award className="w-4 h-4 text-emerald-400" />
              Empirical Research Insights for Your Profile
            </h3>
            
            <p className="text-xs text-slate-300 leading-relaxed">
              As a participant in the <strong className="text-emerald-400">{submittedData?.occupation}</strong> category using a <strong className="text-white">{submittedData?.phoneBrand}</strong> smartphone, your reported primary purpose is <strong className="text-amber-300">{submittedData?.primaryPurpose}</strong>.
            </p>

            <p className="text-xs text-slate-400 bg-slate-900 p-3.5 rounded-xl border border-slate-800">
              📌 <strong>Data Storage Disclosure:</strong> Submitted responses are evaluated dynamically in local session memory for instant benchmark comparison. Without a backend database, form submissions are not added to the permanent 16-respondent research dataset.
            </p>

            {userHours > 6 ? (
              <div className="bg-amber-950/40 border border-amber-800/40 rounded-xl p-4 text-xs text-amber-200">
                <strong>Digital Wellbeing Note:</strong> Your daily screen time exceeds 6 hours. Consider enabling Android Focus Mode and daily App Timers for social apps to mitigate eye fatigue and night sleep disturbance.
              </div>
            ) : (
              <div className="bg-emerald-950/40 border border-emerald-800/40 rounded-xl p-4 text-xs text-emerald-200">
                <strong>Healthy Balance:</strong> Your reported screen time falls within a balanced digital usage window compared to the broader cohort.
              </div>
            )}
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              to="/findings"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 text-slate-950 font-bold text-xs"
            >
              <span>Explore Digital Wellbeing Findings</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/dashboard"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 text-xs font-semibold"
            >
              <span>View Full Analytics Dashboard</span>
            </Link>
          </div>

        </div>
      )}

    </div>
  );
};
