import { colors } from './src/config/colors';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Primary brand colors
        primary: {
          main: colors.primary.main,
        },
        // Secondary brand colors
        secondary: {
          main: colors.secondary.main,
        },
        // Background colors
        background: {
          primary: colors.background.primary,
          secondary: colors.background.secondary,
          dark: colors.background.dark,
          overlay: colors.background.overlay,
        },
        // Text colors
        text: {
          primary: colors.text.primary,
          secondary: colors.text.secondary,
          muted: colors.text.muted,
          light: colors.text.light,
          accent: colors.text.accent,
        },
        // Social media colors
        social: {
          youtube: {
            default: colors.social.youtube.default,
            hover: colors.social.youtube.hover,
          },
          instagram: {
            default: colors.social.instagram.default,
            hover: colors.social.instagram.hover,
          },
          linkedin: {
            default: colors.social.linkedin.default,
            hover: colors.social.linkedin.hover,
          },
          whatsapp: {
            default: colors.social.whatsapp.default,
            hover: colors.social.whatsapp.hover,
          },
        },
        // State colors
        state: {
          hover: colors.state.hover,
          focus: colors.state.focus,
          active: colors.state.active,
          disabled: colors.state.disabled,
        },
        // Utility colors
        utility: {
          white: colors.utility.white,
          black: colors.utility.black,
          transparent: colors.utility.transparent,
          gray: colors.utility.gray,
        },
        // Border colors
        border: {
          primary: colors.border.primary,
          secondary: colors.border.secondary,
          accent: colors.border.accent,
          focus: colors.border.focus,
        },
        // Button colors
        button: {
          primary: {
            background: colors.button.primary.background,
            backgroundHover: colors.button.primary.backgroundHover,
            text: colors.button.primary.text,
            textHover: colors.button.primary.textHover,
          },
          secondary: {
            background: colors.button.secondary.background,
            backgroundHover: colors.button.secondary.backgroundHover,
            text: colors.button.secondary.text,
            textHover: colors.button.secondary.textHover,
          },
        },
        // Card colors
        card: {
          background: colors.card.background,
          backgroundSecondary: colors.card.backgroundSecondary,
          border: colors.card.border,
          shadow: colors.card.shadow,
        },
        // Form colors
        form: {
          background: colors.form.background,
          border: colors.form.border,
          borderFocus: colors.form.borderFocus,
          text: colors.form.text,
          placeholder: colors.form.placeholder,
          label: colors.form.label,
          error: colors.form.error,
          success: colors.form.success,
        },
        // Modal colors
        modal: {
          backdrop: colors.modal.backdrop,
          background: colors.modal.background,
          text: colors.modal.text,
          closeButton: colors.modal.closeButton,
          closeButtonHover: colors.modal.closeButtonHover,
        },
        // Loader colors
        loader: {
          primary: colors.loader.primary,
          secondary: colors.loader.secondary,
        },
      },
    },
  },
  plugins: [],
};
