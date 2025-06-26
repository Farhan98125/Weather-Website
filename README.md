# Weather App 🌤️

A modern, responsive weather application that provides real-time weather information for any location worldwide.

## Features

- 🌍 **Global Weather Data**: Get weather information for any city worldwide
- 📍 **Current Location**: Automatically detect and show weather for your current location
- 🌡️ **Detailed Information**: Temperature, humidity, pressure, visibility, and more
- 🌅 **Sunrise & Sunset**: Daily sunrise and sunset times
- ☀️ **UV Index**: Current UV index with safety recommendations
- 📅 **7-Day Forecast**: Extended weather forecast
- 🕐 **Hourly Forecast**: 24-hour temperature predictions
- 🌙 **Dark Mode**: Toggle between light and dark themes
- 📱 **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices

## Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Weather API**: WeatherAPI.com
- **Icons**: Font Awesome
- **Deployment**: Vercel

## Live Demo

Visit the live application: [Weather App](https://weather-website-psi-ebon.vercel.app/)

## Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/Farhan98125/Weather-Website.git
   cd Weather-Website/Weather-app-main
   ```

2. Get a free API key from [WeatherAPI.com](https://www.weatherapi.com/)

3. Create a `.env` file in the root directory:
   ```
   WEATHER_API_KEY=your_api_key_here
   ```

4. Open `index.html` in your browser or use a local server

## Deployment

For deployment instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md)

## Project Structure

```
Weather-app-main/
├── index.html          # Main HTML file
├── css/
│   ├── style.css      # Main styles
│   └── modal.css      # Modal styles
├── js/
│   ├── main.js        # Main JavaScript functionality
│   └── modal.js       # Modal functionality
├── images/            # Weather icons and images
├── api/
│   └── weather.js     # Serverless API function
├── vercel.json        # Vercel configuration
└── README.md          # This file
```

## API Usage

This app uses the WeatherAPI.com service to fetch weather data. The API calls are securely routed through a serverless function to protect the API key.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Author

**Farhan** - [GitHub Profile](https://github.com/Farhan98125)

---

⭐ If you find this project helpful, please give it a star!
