import { API_BASE_URL } from './api';

export interface ChatMessage {
  sender: 'user' | 'bot';
  text: string;
}

/**
 * Chatbot API layer to handle messages.
 * POST /api/chatbot/
 */
export async function sendChatMessage(
  messageText: string,
  history: ChatMessage[]
): Promise<{ text: string }> {
  // Map history to standard chat role-content structure for backend LLM
  const formattedHistory = history.map((h) => ({
    role: h.sender === 'user' ? 'user' : 'assistant',
    content: h.text
  }));

  const response = await fetch(`${API_BASE_URL}/api/chatbot/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({
      message: messageText,
      history: formattedHistory,
    }),
  });

  if (!response.ok) {
    throw new Error(`Chat API server returned error status ${response.status}`);
  }

  const data = await response.json();
  
  if (data && typeof data.reply === 'string') {
    return {
      text: data.reply
    };
  } else {
    throw new Error('Invalid response format received from Chat API');
  }
}

