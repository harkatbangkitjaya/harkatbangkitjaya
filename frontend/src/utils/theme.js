// Theme color definitions for light and dark modes
export const colors = {
    // Background colors
    bg: {
        dark: {
            primary: 'bg-slate-900',
            secondary: 'bg-slate-800',
            tertiary: 'bg-slate-950',
            card: 'bg-slate-800/90',
            hover: 'bg-slate-700',
        },
        light: {
            primary: 'bg-gray-50',
            secondary: 'bg-white',
            tertiary: 'bg-gray-100',
            card: 'bg-white/90',
            hover: 'bg-orange-50',
        }
    },

    // Text colors
    text: {
        dark: {
            primary: 'text-white',
            secondary: 'text-gray-300',
            tertiary: 'text-gray-400',
            muted: 'text-gray-500',
        },
        light: {
            primary: 'text-slate-900',
            secondary: 'text-slate-700',
            tertiary: 'text-slate-600',
            muted: 'text-slate-500',
        }
    },

    // Border colors
    border: {
        dark: 'border-slate-700',
        light: 'border-gray-200',
    },

    // Accent colors (same for both themes)
    accent: {
        orange: 'text-orange-500',
        orangeBg: 'bg-orange-600',
        orangeHover: 'hover:bg-orange-700',
    }
};

// Helper functions
export const getThemeClasses = (isDark, darkClass, lightClass) => {
    return isDark ? darkClass : lightClass;
};
