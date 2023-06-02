/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Background
        'primary-bg': '#212121', // Dark gray
        'secondary-bg': '#303030', // Slightly lighter than main background

        // Text
        'primary-text': '#FFFFFF', // White
        'secondary-text': '#A0A0A0', // Light gray

        // Accent Colors
        'accent-blue': '#1DA1F2', // Twitter blue
        'accent-blue-hover': '#0F81BD', // Slightly darker than light blue
        'accent-blue-active': '#0A6388', // Darker than light blue

        // Message Bubbles
        // 'incoming-bubble': '#292929', // Slightly lighter than main background
        // 'outgoing-bubble': '#383838', // Slightly darker than main background
        // 'incoming-text': '#FFFFFF', // White
        // 'outgoing-text': '#FFFFFF', // White

        // Buttons
        'primary-btn': '#1DA1F2', // Twitter blue
        'primary-btn-text': '#FFFFFF', // White
        'secondary-btn': '#383838', // Slightly darker than main background
        'secondary-btn-text': '#FFFFFF', // White

        // Status Indicators
        'online-status': '#17BF63', // Green
        'offline-status': '#D32F2F', // Red
        'busy-status': '#FFC107', // Amber
        'away-status': '#FF5722', // Orange
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class'
    })
  ],
}
