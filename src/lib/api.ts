/**
 * Centralized API utility for Pure Path Infotech
 */

// Retrieve and sanitize base API URL
const BASE_URL =
  ((import.meta as any).env?.VITE_API_URL as string) ||
  ((import.meta as any).env?.NEXT_PUBLIC_API_URL as string) ||
  'http://127.0.0.1:8000';

export const API_BASE_URL = BASE_URL.replace(/\/$/, '');

export interface HealthStatus {
  connected: boolean;
  message: string;
  details?: string;
}

/**
 * Checks the Django backend health status by calling GET /api/v1/health/
 */
export async function checkBackendHealth(): Promise<HealthStatus> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/v1/health/`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    });

    if (!response.ok) {
      return {
        connected: false,
        message: 'Backend Unavailable',
        details: `HTTP error! Status: ${response.status}`,
      };
    }

    const data = await response.json();
    
    // Check for correct Django REST framework output as specified in instructions
    if (data && data.status === 'success') {
      return {
        connected: true,
        message: data.message || 'Pure Path Infotech API is running',
      };
    } else {
      return {
        connected: false,
        message: 'Invalid Response Format',
        details: 'The backend responded but did not return the expected success envelope.',
      };
    }
  } catch (err: any) {
    return {
      connected: false,
      message: 'Backend Offline',
      details: err instanceof Error ? err.message : 'Network error or CORS issue',
    };
  }
}
