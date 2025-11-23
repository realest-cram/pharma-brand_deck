/**
 * AI Features have been disabled for the static showcase deployment.
 * This file is kept as a placeholder for future backend integration.
 */

export const analyzePrescriptionImage = async (base64Image: string): Promise<any> => {
  console.warn("AI Analysis features are disabled in the GitHub Pages version.");
  return {
    isValidPrescription: false,
    summary: "AI features disabled.",
    medications: [],
    safetyAlerts: [],
    confidenceScore: 0
  };
};