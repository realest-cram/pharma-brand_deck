export interface PaletteItem {
  name: string;
  hex: string;
  usage: string;
  textColor: string;
}

export interface TypographySample {
  role: string;
  font: string;
  size: string;
  weight: string;
  sample: string;
}

export type BrandSection = 'identity' | 'system' | 'ui' | 'screens';

// Keep these for the UI showcase mockup
export interface Medication {
  name: string;
  dosage?: string;
  frequency?: string;
  instructions: string;
  warning?: string;
}

export interface PrescriptionAnalysis {
  isValidPrescription: boolean;
  patientName?: string;
  date?: string;
  summary: string;
  medications: Medication[];
  safetyAlerts: string[];
  confidenceScore: number;
}