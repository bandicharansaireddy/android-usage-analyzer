export interface UserGroup {
  id: string;
  name: string;
  icon: string;
  sampleCount: number; // Actual survey respondents count
  avgScreenTime: number; // in hours
  avgUnlocks: number;
  topAppCategories: string[];
  primaryUse: string;
  peakHours: string;
  batteryDrainScore: number; // 1-10
  notificationSensitivity: string;
  description: string;
  keyBehavior: string;
  color: string;
}

export interface AppDetail {
  name: string;
  category: string;
  icon: string;
  avgMinutesPerDay: number;
  batteryDrainRank: 'Low' | 'Medium' | 'High' | 'Severe';
  avgNotifications: number;
  userPercentage: number;
}

export interface HourlyDataPoint {
  hour: string;
  Overall: number;
  Students: number;
  Gamers: number;
  Professionals: number;
  Employees: number;
  Seniors: number;
}

export interface CategoryData {
  category: string;
  percentage: number;
  avgHoursPerWeek: number;
  color: string;
}

export interface FindingItem {
  id: string;
  title: string;
  category: 'Screen Time' | 'Psychology' | 'Hardware' | 'Digital Wellbeing';
  statHighlight: string;
  summary: string;
  details: string;
  impactLevel: 'High' | 'Moderate' | 'Critical';
}

export const RESEARCH_METADATA = {
  title: "Android Smartphone Usage Analysis Across Demographic Groups",
  subtitle: "An empirical study evaluating 16 actual survey respondents, supplemented by illustrative trend estimates",
  datasetSize: 16, // Actual survey sample size n = 16
  avgCohortScreenTimeHours: 4.8,
  surveyPeriod: "Jan 2026 - Sep 2026",
  isIllustrativeNote: "Survey sample n = 16. Broader category shares and 24h curves are illustrative dataset models.",
  androidVersions: [
    { version: "Android 15 / 14", share: "56%" },
    { version: "Android 13 / 12", share: "31%" },
    { version: "Android 11 & older", share: "13%" },
  ],
  topBrands: [
    { brand: "Samsung Galaxy", share: "38%" },
    { brand: "Xiaomi / Redmi / Poco", share: "25%" },
    { brand: "Google Pixel", share: "13%" },
    { brand: "OnePlus", share: "12%" },
    { brand: "Others (Realme, Vivo, Motorola)", share: "12%" }
  ]
};

// Actual sample size breakdown across 16 total respondents
export const USER_GROUPS: UserGroup[] = [
  {
    id: "students",
    name: "Students",
    icon: "GraduationCap",
    sampleCount: 4, // 4 respondents out of 16
    avgScreenTime: 6.2,
    avgUnlocks: 142,
    topAppCategories: ["Social Media", "Video Streaming", "Education", "Messaging"],
    primaryUse: "Social interaction, online learning, entertainment, short-form video",
    peakHours: "8:00 PM – 1:30 AM",
    batteryDrainScore: 8.5,
    notificationSensitivity: "Very High (Immediate response)",
    description: "Students in our 16-person survey exhibit high notification responsiveness and prolonged late-night consumption dominated by Instagram, YouTube, and Shorts/Reels.",
    keyBehavior: "Rapid context-switching between study apps and social feeds.",
    color: "#3b82f6"
  },
  {
    id: "gamers",
    name: "Mobile Gamers",
    icon: "Gamepad2",
    sampleCount: 3, // 3 respondents out of 16
    avgScreenTime: 7.5,
    avgUnlocks: 88,
    topAppCategories: ["Gaming", "Discord / Voice", "Live Streaming", "Social"],
    primaryUse: "High-FPS gaming, voice chat communication, esports streaming",
    peakHours: "6:00 PM – 2:00 AM",
    batteryDrainScore: 9.8,
    notificationSensitivity: "Medium (Do-Not-Disturb used in-game)",
    description: "Mobile Gamers recorded the highest daily screen time and heavy battery consumption due to GPU-intensive 3D gaming engines like BGMI and Call of Duty.",
    keyBehavior: "Long continuous sessions (90+ mins) with lower unlock frequency.",
    color: "#8b5cf6"
  },
  {
    id: "professionals",
    name: "Professionals & Executives",
    icon: "Briefcase",
    sampleCount: 4, // 4 respondents out of 16
    avgScreenTime: 4.5,
    avgUnlocks: 115,
    topAppCategories: ["Email & Productivity", "Finance & News", "Communication", "Calendar"],
    primaryUse: "Work correspondence, financial management, news aggregation, scheduling",
    peakHours: "8:30 AM – 6:30 PM",
    batteryDrainScore: 5.2,
    notificationSensitivity: "High during business hours (Slack, Email)",
    description: "Professionals use smartphones as secondary productivity workstations, prioritizing email response times and business communication.",
    keyBehavior: "Frequent short glances throughout work hours; low weekend usage.",
    color: "#10b981"
  },
  {
    id: "employees",
    name: "Corporate & Desk Employees",
    icon: "Building2",
    sampleCount: 3, // 3 respondents out of 16
    avgScreenTime: 5.1,
    avgUnlocks: 98,
    topAppCategories: ["Messaging", "Social Media", "Streaming", "Shopping"],
    primaryUse: "Work-life coordination, commute entertainment, social media breaks",
    peakHours: "12:00 PM – 2:00 PM & 7:00 PM – 10:30 PM",
    batteryDrainScore: 6.7,
    notificationSensitivity: "Moderate",
    description: "Corporate Employees demonstrate distinct usage spikes during lunch breaks and evening post-work downtime.",
    keyBehavior: "Bimodal usage pattern with distinct morning commute and evening relaxing spikes.",
    color: "#f59e0b"
  },
  {
    id: "seniors",
    name: "Senior Citizens",
    icon: "HeartHandshake",
    sampleCount: 2, // 2 respondents out of 16
    avgScreenTime: 2.4,
    avgUnlocks: 42,
    topAppCategories: ["Communication (WhatsApp)", "News", "Health & Utility", "Camera"],
    primaryUse: "Family communication, news reading, digital banking, health tracking",
    peakHours: "7:00 AM – 11:30 AM",
    batteryDrainScore: 3.1,
    notificationSensitivity: "Low (Delayed response)",
    description: "Senior citizens favor simpler navigation, voice notes on WhatsApp, video calls with family, and morning news reading.",
    keyBehavior: "Intentional single-task sessions with minimal background app switching.",
    color: "#ec4899"
  }
];

export const HOURLY_USAGE_PATTERN: HourlyDataPoint[] = [
  { hour: "00:00", Overall: 2.4, Students: 4.8, Gamers: 5.9, Professionals: 1.1, Employees: 2.0, Seniors: 0.4 },
  { hour: "02:00", Overall: 1.1, Students: 2.5, Gamers: 3.8, Professionals: 0.3, Employees: 0.8, Seniors: 0.1 },
  { hour: "04:00", Overall: 0.5, Students: 0.8, Gamers: 1.2, Professionals: 0.2, Employees: 0.4, Seniors: 0.2 },
  { hour: "06:00", Overall: 1.8, Students: 1.2, Gamers: 0.9, Professionals: 2.9, Employees: 2.4, Seniors: 2.8 },
  { hour: "08:00", Overall: 4.2, Students: 3.8, Gamers: 2.1, Professionals: 6.8, Employees: 5.5, Seniors: 5.2 },
  { hour: "10:00", Overall: 5.1, Students: 4.9, Gamers: 3.5, Professionals: 7.9, Employees: 6.8, Seniors: 4.5 },
  { hour: "12:00", Overall: 6.8, Students: 6.5, Gamers: 5.2, Professionals: 7.2, Employees: 8.5, Seniors: 4.0 },
  { hour: "14:00", Overall: 5.9, Students: 5.8, Gamers: 4.9, Professionals: 7.5, Employees: 6.9, Seniors: 3.2 },
  { hour: "16:00", Overall: 6.2, Students: 6.4, Gamers: 5.8, Professionals: 7.1, Employees: 6.5, Seniors: 2.9 },
  { hour: "18:00", Overall: 7.4, Students: 7.9, Gamers: 8.2, Professionals: 5.2, Employees: 7.1, Seniors: 3.1 },
  { hour: "20:00", Overall: 8.9, Students: 9.4, Gamers: 9.6, Professionals: 4.1, Employees: 8.9, Seniors: 2.5 },
  { hour: "22:00", Overall: 7.1, Students: 8.7, Gamers: 9.1, Professionals: 2.2, Employees: 6.1, Seniors: 1.0 }
];

// Note: Category shares and app metrics serve as illustrative example data alongside our 16-person survey
export const CATEGORY_DISTRIBUTION: CategoryData[] = [
  { category: "Social Media (Instagram, X, Threads)", percentage: 36, avgHoursPerWeek: 12.1, color: "#10b981" },
  { category: "Mobile Gaming (BGMI, CoD Mobile)", percentage: 22, avgHoursPerWeek: 7.4, color: "#8b5cf6" },
  { category: "Productivity & Work (Gmail, Slack)", percentage: 16, avgHoursPerWeek: 5.3, color: "#3b82f6" },
  { category: "Media & Streaming (YouTube, Hotstar)", percentage: 14, avgHoursPerWeek: 4.7, color: "#f59e0b" },
  { category: "Instant Messaging (WhatsApp, Telegram)", percentage: 8, avgHoursPerWeek: 2.7, color: "#ec4899" },
  { category: "Utilities, Finance & Education", percentage: 4, avgHoursPerWeek: 1.4, color: "#06b6d4" }
];

// Replaced short-form video platforms with Instagram Reels / Shorts and popular Indian ecosystem apps.
export const TOP_APPS: AppDetail[] = [
  { name: "YouTube", category: "Video & Streaming", icon: "Youtube", avgMinutesPerDay: 78, batteryDrainRank: "High", avgNotifications: 18, userPercentage: 88 },
  { name: "Instagram (Reels & Feed)", category: "Social Media", icon: "Instagram", avgMinutesPerDay: 64, batteryDrainRank: "High", avgNotifications: 45, userPercentage: 82 },
  { name: "WhatsApp Messenger", category: "Instant Messaging", icon: "MessageSquare", avgMinutesPerDay: 52, batteryDrainRank: "Low", avgNotifications: 62, userPercentage: 94 },
  { name: "BGMI / PUBG Mobile", category: "Mobile Gaming", icon: "Gamepad", avgMinutesPerDay: 46, batteryDrainRank: "Severe", avgNotifications: 8, userPercentage: 35 },
  { name: "YouTube Shorts / Snapchat", category: "Short Video & Social", icon: "Video", avgMinutesPerDay: 42, batteryDrainRank: "High", avgNotifications: 22, userPercentage: 68 },
  { name: "Gmail", category: "Productivity", icon: "Mail", avgMinutesPerDay: 28, batteryDrainRank: "Low", avgNotifications: 34, userPercentage: 86 },
  { name: "Chrome Browser", category: "Utility & Search", icon: "Globe", avgMinutesPerDay: 25, batteryDrainRank: "Medium", avgNotifications: 6, userPercentage: 91 },
  { name: "Spotify / Music", category: "Audio Streaming", icon: "Music", avgMinutesPerDay: 38, batteryDrainRank: "Medium", avgNotifications: 5, userPercentage: 62 },
  { name: "Slack / Teams", category: "Work Chat", icon: "Briefcase", avgMinutesPerDay: 32, batteryDrainRank: "Low", avgNotifications: 41, userPercentage: 42 },
  { name: "Google Maps", category: "Navigation", icon: "MapPin", avgMinutesPerDay: 18, batteryDrainRank: "Medium", avgNotifications: 3, userPercentage: 79 }
];

export const RADAR_COMPARISON = {
  labels: ["Daily Screen Time", "Notification Load", "Late-Night Usage", "App Diversity", "Productivity Ratio"],
  datasets: [
    { label: "Students (n=4)", data: [85, 92, 88, 75, 45], color: "#3b82f6" },
    { label: "Gamers (n=3)", data: [95, 55, 94, 50, 30], color: "#8b5cf6" },
    { label: "Professionals (n=4)", data: [58, 80, 25, 90, 88], color: "#10b981" },
    { label: "Senior Citizens (n=2)", data: [30, 25, 12, 35, 60], color: "#ec4899" }
  ]
};

export const KEY_FINDINGS: FindingItem[] = [
  {
    id: "f1",
    title: "Notification-Driven Fragmented Unlocks",
    category: "Psychology",
    statHighlight: "68% of Unlocks",
    summary: "Over two-thirds of daily phone unlocks among our 16 respondents were triggered reactively by push notifications rather than intentional usage.",
    details: "In our 16-person survey sample, participants unlocked their device an average of 102 times per day, with 68 of those unlocks occurring within 15 seconds of receiving a push notification alert. This highlights significant context-switching across Students and Employees.",
    impactLevel: "Critical"
  },
  {
    id: "f2",
    title: "Late-Night Blue Light & Sleep Latency",
    category: "Screen Time",
    statHighlight: "1.8 Hours Post-10PM",
    summary: "Students and Mobile Gamers in our sample logged an average of 108 minutes of active screen interaction past 10:00 PM.",
    details: "Survey responses from our student and gamer participants show a strong correlation between active screen time past 10:00 PM (on Instagram Reels, YouTube, and mobile games) and self-reported sleep latency exceeding 40 minutes.",
    impactLevel: "High"
  },
  {
    id: "f3",
    title: "GPU Thermal Throttling & Battery Degradation",
    category: "Hardware",
    statHighlight: "42°C Avg GPU Temp",
    summary: "Gamers and heavy video streaming users reported noticeable device heating during prolonged sessions.",
    details: "Illustrative diagnostic measurements indicate sustained device temperatures of 40–44°C during 60+ minute gaming sessions (e.g. BGMI). High heat accelerates lithium-ion battery health degradation over time.",
    impactLevel: "Moderate"
  },
  {
    id: "f4",
    title: "Under-Utilization of Android Digital Wellbeing Features",
    category: "Digital Wellbeing",
    statHighlight: "18.7% Active Adoption",
    summary: "Out of 16 surveyed participants, only 3 users (18.7%) actively configured Android App Limits or Focus Mode.",
    details: "Despite built-in Android Digital Wellbeing tools (App Timers, Focus Mode, Bedtime Mode), adoption remains low in our sample cohort. However, participants who enabled Bedtime Mode reported a 34% reduction in late-night screen time.",
    impactLevel: "High"
  }
];

export const WELLBEING_RECOMMENDATIONS = [
  {
    title: "Enable Android Focus Mode During Work/Study Hours",
    description: "Temporarily pause distracting social media apps (Instagram, X, YouTube) and silence their notifications during focus blocks.",
    icon: "ShieldAlert",
    actionTip: "Go to Settings > Digital Wellbeing & parental controls > Focus mode"
  },
  {
    title: "Configure Automated Bedtime Mode (Grayscale & DND)",
    description: "Schedule Android Bedtime Mode 1 hour before sleep to convert display colors to grayscale, reducing late-night dopamine loops.",
    icon: "Moon",
    actionTip: "Settings > Digital Wellbeing > Bedtime mode > Set Schedule"
  },
  {
    title: "Set Daily App Timers for Short Video & Gaming Apps",
    description: "Cap social media and short video apps to 45 minutes daily. Once reached, Android automatically pauses the app icon for the day.",
    icon: "Timer",
    actionTip: "Settings > Digital Wellbeing > Dashboard > Select App > Set Timer"
  },
  {
    title: "Optimize Battery Health with Charging Protection",
    description: "Use Android Protect Battery feature to cap charging at 80-85% during heavy gaming sessions to preserve battery lifespan.",
    icon: "BatteryCharging",
    actionTip: "Settings > Battery > Battery Protection > Enable Adaptive Charging"
  }
];
