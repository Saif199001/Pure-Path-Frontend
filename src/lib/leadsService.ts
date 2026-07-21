import { API_BASE_URL } from './api';

export interface LeadPayload {
  name: string;
  email: string;
  phone: string;
  interested_service: string;
  message: string;
}

export interface ContactPayload {
  fullName: string;
  businessName: string;
  email: string;
  phone: string;
  needs: string[];
  budget?: string;
  message: string;
}

/**
 * Parses error responses to return user-friendly, clean error messages.
 */
async function parseErrorResponse(response: Response): Promise<string> {
  let message = '';
  try {
    const errorData = await response.json();
    if (errorData) {
      if (typeof errorData === 'string') {
        message = errorData;
      } else if (errorData.message) {
        message = errorData.message;
      } else if (errorData.detail) {
        message = errorData.detail;
      } else if (errorData.error) {
        message = errorData.error;
      } else if (typeof errorData === 'object') {
        const messages: string[] = [];
        for (const key of Object.keys(errorData)) {
          const val = errorData[key];
          const friendlyKey = key.replace(/_/g, ' ');
          if (Array.isArray(val)) {
            messages.push(`${friendlyKey}: ${val.join(' ')}`);
          } else if (typeof val === 'string') {
            messages.push(`${friendlyKey}: ${val}`);
          }
        }
        if (messages.length > 0) {
          message = messages.join(' | ');
        }
      }
    }
  } catch (e) {
    // Response not JSON
  }

  switch (response.status) {
    case 400:
      return message || 'The submitted data was invalid. Please check your fields.';
    case 401:
      return 'Unauthorized access. Please try again.';
    case 403:
      return 'Access forbidden. Please contact support.';
    case 404:
      return 'The requested resource was not found.';
    case 429:
      return 'Too many requests. You have exceeded our inquiry limit. Please try again later.';
    case 500:
    case 503:
      return 'Our server is temporarily unavailable. Please try again shortly or contact us on WhatsApp.';
    default:
      return message || `Server returned error code ${response.status}`;
  }
}

/**
 * Clean API service layer to dispatch lead inquiries to the Django backend.
 * POST /api/leads/
 */
export async function submitLead(payload: LeadPayload): Promise<{ success: boolean; message: string }> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/leads/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errMsg = await parseErrorResponse(response);
      return { success: false, message: errMsg };
    }

    const data = await response.json();
    return {
      success: true,
      message: data.message || 'Lead inquiry sent successfully.'
    };
  } catch (error: any) {
    console.error('API lead submission failed:', error);
    return {
      success: false,
      message: 'Network connection failed. Please check your internet connection and try again.'
    };
  }
}

/**
 * Clean API service layer to dispatch contact inquiries to the Django backend.
 * POST /api/contact/
 */
export async function submitContact(payload: ContactPayload): Promise<{ success: boolean; message: string }> {
  try {
    // Map internal UI payload to django REST API request fields:
    // full_name, business_name, email, phone, services, project_budget, project_details
    const mappedPayload = {
      full_name: payload.fullName,
      business_name: payload.businessName,
      email: payload.email,
      phone: payload.phone,
      services: payload.needs,
      project_budget: payload.budget || '',
      project_details: payload.message,
    };

    const response = await fetch(`${API_BASE_URL}/api/contact/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(mappedPayload),
    });

    if (!response.ok) {
      const errMsg = await parseErrorResponse(response);
      return { success: false, message: errMsg };
    }

    const data = await response.json();
    return {
      success: true,
      message: data.message || 'Contact inquiry sent successfully.'
    };
  } catch (error: any) {
    console.error('API contact submission failed:', error);
    return {
      success: false,
      message: 'Network connection failed. Please check your internet connection and try again.'
    };
  }
}

