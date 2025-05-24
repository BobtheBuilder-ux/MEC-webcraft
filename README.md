# Welcome to MEC-webcraft

## Project info

**Name**: MEC-webcraft

## How can I edit this code?

There are several ways of editing your application.

**Use your preferred IDE**

To work locally using your own IDE, you can clone this repo and push changes.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd MEC-webcraft

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can you deploy this project?

The project can be deployed to any hosting platform that supports static sites. Common options include:
- Vercel
- Netlify
- GitHub Pages
- AWS S3
- Firebase Hosting

## Custom Domain Setup

To set up a custom domain:

1. Purchase a domain from a domain registrar
2. Configure DNS settings according to your hosting provider's instructions
3. Add SSL certificate for HTTPS (many hosting providers handle this automatically)
4. Update environment variables with new domain

## Secret Management

This project uses environment variables for secret management. Follow these steps to set up:

### Development Environment
1. Copy `.env.example` to `.env` in the root directory
2. Copy `server/.env.example` to `server/.env`
3. Fill in your development credentials

### Production Environment
1. Copy `.env.example` to `.env.production` in the root directory
2. Copy `server/.env.example` to `server/.env.production`
3. Fill in your production credentials
4. Never commit `.env` or `.env.production` files to version control

### API Keys Security
- Frontend environment variables (VITE_*) will be embedded in the client-side build
- Keep sensitive credentials like GOOGLE_PRIVATE_KEY in server-side environment only
- Use appropriate access restrictions and API key permissions

## Environment Variables

### Frontend Variables
- `VITE_API_URL`: Valid URL (e.g., https://api.mecwebcraft.com/api)
- `VITE_FIREBASE_API_KEY`: Firebase API key format (starts with 'AIza')
- `VITE_FIREBASE_AUTH_DOMAIN`: Valid URL domain
- `VITE_FIREBASE_PROJECT_ID`: Lowercase letters, numbers, and hyphens only
- `VITE_FIREBASE_STORAGE_BUCKET`: Valid storage bucket URL
- `VITE_FIREBASE_MESSAGING_SENDER_ID`: Valid numeric ID
- `VITE_FIREBASE_APP_ID`: Valid Firebase app ID
- `VITE_FIREBASE_MEASUREMENT_ID`: Valid measurement ID
- `VITE_CALENDAR_API_URL`: Valid URL
- `VITE_CALENDAR_API_KEY`: Firebase API key format
- `VITE_GEMINI_API_KEY`: Valid API key

### Backend Variables
- `PORT`: Number between 1 and 65535
- `NODE_ENV`: Must be 'development', 'production', or 'test'
- `EMAIL_USER`: Valid email address
- `EMAIL_PASSWORD`: Non-empty string
- `GOOGLE_CALENDAR_ID`: Valid calendar ID (email format)
- `GOOGLE_SERVICE_ACCOUNT_EMAIL`: Valid email address
- `GOOGLE_PRIVATE_KEY`: Non-empty private key string

### Validation
The project includes automated environment variable validation that runs during the build process. To manually validate your environment variables:
```bash
npm run validate:env
```

This will check both frontend (.env.production) and backend (server/.env.production) environment files for:
- Presence of required variables
- Correct format of values
- Valid URLs and email addresses
- Proper API key formats
- Valid port numbers and environment names
