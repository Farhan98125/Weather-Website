# Weather App Deployment Guide

## Vercel Deployment

This weather app is configured to deploy on Vercel. Follow these steps to deploy successfully:

### 1. Environment Variables

Before deploying, you need to set up the following environment variable in your Vercel project:

**Variable Name:** `WEATHER_API_KEY`
**Value:** Your WeatherAPI.com API key

To get an API key:
1. Go to [WeatherAPI.com](https://www.weatherapi.com/)
2. Sign up for a free account
3. Copy your API key from the dashboard

### 2. Setting Environment Variables in Vercel

1. Go to your Vercel dashboard
2. Select your project
3. Go to Settings → Environment Variables
4. Add the variable:
   - **Name:** `WEATHER_API_KEY`
   - **Value:** Your actual API key
   - **Environment:** Production (and Preview if needed)

### 3. Deploy

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically deploy using the `vercel.json` configuration

### 4. Troubleshooting

If you get a 404 error:
- Make sure the environment variable is set correctly
- Check that the API key is valid
- Verify the deployment completed successfully

### Security Notes

- The API key is now stored securely in environment variables
- API calls are routed through a serverless function to protect the key
- CORS is properly configured for the API endpoint 