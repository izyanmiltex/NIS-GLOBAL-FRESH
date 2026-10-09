export interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  badge: string;
  iconName: string;
  items: string[];
  metricsHighlight: string;
}

export interface ClientSegment {
  id: string;
  title: string;
  icon: string;
  description: string;
  bulletPoints: string[];
  focus: string;
  tag: string;
}

export interface WorkflowStage {
  id: string;
  stepNumber: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  kpi: string;
}

export interface FitCriterion {
  type: 'fit' | 'not-fit';
  title: string;
  points: string[];
}
