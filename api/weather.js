export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { city } = req.query;

  if (!city) {
    return res.status(400).json({ error: 'City parameter is required' });
  }

  const API_KEY = process.env.WEATHER_API_KEY;
  const API_BASE_URL = 'https://api.weatherapi.com/v1/forecast.json';

  if (!API_KEY) {
    return res.status(500).json({ error: 'Weather API key not configured' });
  }

  try {
    const response = await fetch(
      `${API_BASE_URL}?key=${API_KEY}&q=${encodeURIComponent(city)}&days=7&aqi=yes&alerts=no`
    );

    if (!response.ok) {
      throw new Error(`Weather API responded with status: ${response.status}`);
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error('Weather API error:', error);
    res.status(500).json({ error: 'Failed to fetch weather data' });
  }
} 