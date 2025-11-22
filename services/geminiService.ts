import { GoogleGenAI, Type } from "@google/genai";
import { PrescriptionAnalysis } from "../types";

const SYSTEM_INSTRUCTION = `
You are Pharmi, a friendly and highly skilled AI pharmacist assistant. 
Your goal is to accurately transcribe and interpret handwritten or printed medical prescriptions to ensure patient safety.

Key Responsibilities:
1. Identify if the image is a medical prescription.
2. Extract the patient's name and date if visible.
3. List all medications found, including name, dosage (mg, ml, etc.), frequency, and specific intake instructions.
4. Analyze for safety: Check for common drug interactions or unusually high dosages based on general medical knowledge.
5. Provide a confidence score (0-100) based on legibility.
6. If the handwriting is illegible or ambiguous, flag it in safety alerts.

Tone: Professional, clinical, yet warm and reassuring. Use clear, simple language accessible to elderly patients.
`;

export const analyzePrescriptionImage = async (base64Image: string): Promise<PrescriptionAnalysis> => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    throw new Error("API Key is missing");
  }

  const ai = new GoogleGenAI({ apiKey });

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: {
        parts: [
          {
            inlineData: {
              mimeType: "image/jpeg",
              data: base64Image,
            },
          },
          {
            text: "Analyze this image. Extract prescription details. If it is not a prescription, set isValidPrescription to false.",
          },
        ],
      },
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            isValidPrescription: { type: Type.BOOLEAN },
            patientName: { type: Type.STRING },
            date: { type: Type.STRING },
            summary: { type: Type.STRING, description: "A friendly, one-sentence summary of what the doctor ordered from Pharmi's perspective." },
            medications: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  name: { type: Type.STRING },
                  dosage: { type: Type.STRING },
                  frequency: { type: Type.STRING },
                  instructions: { type: Type.STRING },
                  warning: { type: Type.STRING },
                },
                required: ["name", "instructions"],
              },
            },
            safetyAlerts: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
            },
            confidenceScore: { type: Type.NUMBER },
          },
          required: ["isValidPrescription", "medications", "safetyAlerts", "confidenceScore", "summary"],
        },
      },
    });

    const text = response.text;
    if (!text) {
      throw new Error("No response text from Gemini");
    }

    return JSON.parse(text) as PrescriptionAnalysis;

  } catch (error) {
    console.error("Gemini Analysis Error:", error);
    throw new Error("Failed to process the prescription. Please try again.");
  }
};