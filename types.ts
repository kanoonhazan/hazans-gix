export interface Project {
  id: string;
  title: string;
  summary: string;
  tags: string[];
  thumbnail?: string; // URL placeholder
}

export interface CaseStudySection {
  content: string;
  bulletPoints?: string[];
}

export interface CaseStudyDetail extends Project {
  snapshot: {
    summary: string;
    context: string;
    role: string;
  };
  problem: {
    content: string;
  };
  constraints: CaseStudySection;
  decisions: CaseStudySection;
  solution: CaseStudySection;
  impact: CaseStudySection;
  gallery?: string[];
  reflection: CaseStudySection;
}