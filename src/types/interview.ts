
export interface InterviewQuestion {
  id: number;
  question: string;
  strengths?: string;
  improvements?: string;
  score?: number;
}

export interface PerformanceMetric {
  name: string;
  score: number;
}

export interface RadarMetric {
  category: string;
  value: number;
}

export interface InterviewReport {
  id: string;
  title: string;
  type: "one-way" | "live";
  date: string;
  score?: number;
  status: "completed" | "ready" | "scheduled";
  jobRole?: string;
  performanceData?: PerformanceMetric[];
  radarData?: RadarMetric[];
  questionsData?: InterviewQuestion[];
}
