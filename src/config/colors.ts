// Color configuration for Le Grand Legal Summit website
// This file contains all the colors used across the website for easy theming

export const colors = {
  // Primary brand colors
  primary: {
    main: '#201918', // Primary blue - used for buttons, icons, accents, underlines
  },

  // Secondary brand colors
  secondary: {
    main: '#BC9C22', // Dark navy blue - used for backgrounds, text, navigation
  },

  // Background colors
  background: {
    primary: '#F7F7F7', // Light gray - used for section backgrounds
    secondary: '#FFFFFF', // White - used for card backgrounds
    dark: '#1B263B', // Dark navy - used for dark sections
    overlay: 'rgba(0, 0, 0, 0.6)', // Black overlay with 60% opacity
  },

  // Text colors
  text: {
    primary: '#1B263B', // Primary text color
    secondary: '#4A4A4A', // Secondary text color
    muted: '#C0C0C0', // Muted text color
    light: '#FFFFFF', // Light text color (on dark backgrounds)
    accent: '#2E86AB', // Accent text color
  },

  // Social media colors
  social: {
    youtube: {
      default: '#4A4A4A',
      hover: '#ef4444', // red-500
    },
    instagram: {
      default: '#4A4A4A',
      hover: '#ec4899', // pink-500
      gradient:
        'linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d)',
    },
    linkedin: {
      default: '#4A4A4A',
      hover: '#2563eb', // blue-600
    },
    whatsapp: {
      default: '#4A4A4A',
      hover: '#22c55e', // green-500
    },
  },

  // State colors
  state: {
    hover: '#2E86AB/20', // Hover state color
    focus: '#2E86AB', // Focus state color
    active: '#1B263B', // Active state color
    disabled: '#C0C0C0', // Disabled state color
  },

  // Utility colors
  utility: {
    white: '#FFFFFF',
    black: '#000000',
    transparent: 'transparent',
    gray: {
      50: '#f9fafb',
      300: '#d1d5db',
      400: '#9ca3af',
      500: '#6b7280',
    },
  },

  // Border colors
  border: {
    primary: '#C0C0C0', // Primary border color
    secondary: '#4A4A4A', // Secondary border color
    accent: '#2E86AB', // Accent border color
    focus: '#2E86AB', // Focus border color
  },

  // Button colors
  button: {
    primary: {
      background: '#2E86AB',
      backgroundHover: '#2E86AB/80',
      text: '#FFFFFF',
      textHover: '#FFFFFF',
    },
    secondary: {
      background: '#F7F7F7',
      backgroundHover: '#FFFFFF',
      text: '#1B263B',
      textHover: '#2E86AB',
    },
  },

  // Card colors
  card: {
    background: '#FFFFFF',
    backgroundSecondary: '#F7F7F7',
    border: 'transparent',
    shadow: 'rgba(0, 0, 0, 0.1)',
  },

  // Form colors
  form: {
    background: '#FFFFFF',
    border: '#C0C0C0',
    borderFocus: '#2E86AB',
    text: '#1B263B',
    placeholder: '#4A4A4A',
    label: '#1B263B',
    error: '#ef4444',
    success: '#22c55e',
  },

  // Video modal colors
  modal: {
    backdrop: 'rgba(0, 0, 0, 0.8)',
    background: '#FFFFFF',
    text: '#1B263B',
    closeButton: '#FFFFFF',
    closeButtonHover: '#d1d5db',
  },

  // Loader colors
  loader: {
    primary: '#2E86AB',
    secondary: 'transparent',
  },
} as const;

// Export individual color palettes for specific use cases
export const brandColors = colors.primary;
export const textColors = colors.text;
export const backgroundColors = colors.background;
export const socialColors = colors.social;
export const utilityColors = colors.utility;

// Export the complete color configuration
export default colors;
