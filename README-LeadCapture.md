# Lead Capture System

This project includes an AI-powered lead capture system that dynamically generates follow-up questions based on user inquiries and enables appointment scheduling through calendar integration.

## Features

- **Dynamic Lead Form**: Collects user information and generates personalized follow-up questions
- **Gemini AI Integration**: Uses Google's Gemini AI for generating relevant follow-up questions
- **Google Calendar Integration**: Schedule appointments using Google Calendar API
- **Firebase Storage**: Real-time data storage in Firestore

## Setup Instructions

### 1. Environment Variables

Add the following environment variables to your `.env` file:

```bash
# Firebase Configuration
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
VITE_FIREBASE_APP_ID=your_firebase_app_id
VITE_FIREBASE_MEASUREMENT_ID=your_firebase_measurement_id

# Gemini API (AI Service)
VITE_GEMINI_API_KEY=AIzaSyCMyhqJyvevcD6FS97RvPeNgd8j0nVBaJE

# Google Calendar API
VITE_CALENDAR_API_URL=https://www.googleapis.com/calendar/v3
VITE_CALENDAR_API_KEY=AIzaSyDO6ehAw-2JiA0wnT4d-jzmJoHUvRRmVAc
```

### 2. Firebase Configuration

1. Set up a Firestore database in your Firebase project
2. Create a `leads` collection with the following structure:

```typescript
interface Lead {
  id: string;
  name: string;
  email: string;
  inquiry: string;
  followUpAnswer?: string;
  appointmentDate?: Date;
  createdAt: Date;
}
```

### 3. Gemini AI Integration

The system uses Google's Gemini AI through the GenKit library:

```bash
npm i --save genkit @genkit-ai/googleai
```

The provided Gemini API key is already configured in the service.

### 4. Google Calendar API Integration

The system is configured to work with the Google Calendar API:

1. The API key is already configured in the environment variables
2. The calendar service uses the 'primary' calendar by default
3. You can customize business hours and appointment duration in the `calendarService.ts` file

## Usage

The lead capture form is accessible at the `/contact` route. The form flow is as follows:

1. User fills out initial form with name, email, and inquiry
2. Gemini AI generates a follow-up question based on the inquiry
3. User answers the follow-up question
4. User schedules an appointment using the Google Calendar integration
5. All data is stored in Firebase Firestore

## Components

- `LeadCaptureForm.tsx`: Main form component with multi-step flow
- `AppointmentScheduler.tsx`: Calendar booking interface
- `genkitService.ts`: Service for AI-powered question generation using Gemini
- `calendarService.ts`: Google Calendar integration for scheduling appointments
- `firebaseUtils.ts`: Firebase integration for data storage

## Data Flow

1. Initial form submission → Firebase + Gemini AI
2. Follow-up answer → Firebase update
3. Appointment scheduling → Google Calendar API + Firebase update

## Customization

- Modify the form styling in `LeadCaptureForm.tsx`
- Adjust the Gemini prompt in `genkitService.ts` to generate different types of follow-up questions
- Customize the appointment scheduling interface in `AppointmentScheduler.tsx`
- Configure business hours and slot duration in `calendarService.ts` 