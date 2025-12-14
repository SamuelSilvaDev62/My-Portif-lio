import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";

const apiKey = process.env.API_KEY || ''; // Ensure this is set in your environment
const ai = new GoogleGenAI({ apiKey });

// System instruction to give the AI a persona
const SYSTEM_INSTRUCTION = `
Você é a I.A. assistente do portfólio do Samuel Silva. Seu nome é "AURA" (Advanced User Response Agent).
Responda de forma curta, técnica e com uma personalidade gamer/futurista.
Use termos como "Dados carregados", "Compilando resposta", "Acesso concedido".
Seu objetivo é destacar as habilidades do desenvolvedor (React, TypeScript, Node.js, Tailwind, Design de UI/UX).
Se perguntarem sobre projetos, mencione que eles podem ver a grade de projetos na tela principal e cite alguns exemplos como "Inglês Prático" ou "Portal Region".
Seja prestativo, mas mantenha o roleplay de uma IA de um sistema cyberpunk.
Não invente projetos que não existem, fale de forma genérica sobre "sistemas de alta complexidade" se não tiver detalhes.
`;

let chatSession: Chat | null = null;

export const initializeChat = () => {
  if (!chatSession) {
    chatSession = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
  }
  return chatSession;
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  try {
    const session = initializeChat();
    const result: GenerateContentResponse = await session.sendMessage({ message });
    return result.text || "Erro: Dados corrompidos na transmissão.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Erro crítico no sistema neural. Tente novamente mais tarde.";
  }
};