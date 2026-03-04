// ═══════════════════════════════════════════════
// DARK GREEN + NEON GREEN DESIGN SYSTEM
// The "Terminal Genesis" Theme
// ═══════════════════════════════════════════════

export const theme = {
    colors: {
        // Core backgrounds
        void: '#040a04',         // Deepest black-green
        abyss: '#081208',        // Primary bg
        surface: '#0d1a0d',      // Card surfaces
        elevated: '#122412',     // Elevated cards / hover
        glass: 'rgba(13, 26, 13, 0.75)',

        // Neon accent system
        neon: '#39ff14',          // Primary neon green
        neonMuted: '#2bcc10',     // Slightly toned
        neonSubtle: 'rgba(57, 255, 20, 0.15)',
        neonGlow: 'rgba(57, 255, 20, 0.4)',
        neonBorder: 'rgba(57, 255, 20, 0.12)',

        // Secondary accents
        emerald: '#10b981',
        cyan: '#06d6a0',
        mint: '#a7f3d0',

        // Text hierarchy
        textPrimary: '#d4edda',
        textSecondary: '#8fbc8f',
        textMuted: '#4a6741',
        textGhost: '#2d4a2d',

        // States
        success: '#39ff14',
        warning: '#fbbf24',
        error: '#ef4444',

        // Gradients
        gradientNeon: 'linear-gradient(135deg, #39ff14 0%, #06d6a0 50%, #10b981 100%)',
        gradientDark: 'linear-gradient(180deg, #040a04 0%, #081208 50%, #0d1a0d 100%)',
        gradientCard: 'linear-gradient(145deg, rgba(13,26,13,0.9) 0%, rgba(8,18,8,0.95) 100%)',
        gradientGlow: 'radial-gradient(ellipse at center, rgba(57,255,20,0.08) 0%, transparent 70%)',
    },

    fonts: {
        heading: "'Inter', -apple-system, sans-serif",
        body: "'Inter', -apple-system, sans-serif",
        mono: "'Fira Code', 'Consolas', monospace",
    },

    spacing: {
        xs: '0.25rem',
        sm: '0.5rem',
        md: '1rem',
        lg: '1.5rem',
        xl: '2rem',
        '2xl': '3rem',
        '3xl': '4rem',
        '4xl': '6rem',
        '5xl': '8rem',
    },

    radius: {
        sm: '6px',
        md: '10px',
        lg: '16px',
        xl: '24px',
        '2xl': '32px',
        full: '9999px',
    },

    shadows: {
        card: '0 4px 24px rgba(0, 0, 0, 0.4), 0 0 1px rgba(57, 255, 20, 0.1)',
        cardHover: '0 8px 40px rgba(0, 0, 0, 0.5), 0 0 30px rgba(57, 255, 20, 0.08)',
        neonSm: '0 0 8px rgba(57, 255, 20, 0.3)',
        neonMd: '0 0 20px rgba(57, 255, 20, 0.2), 0 0 40px rgba(57, 255, 20, 0.1)',
        neonLg: '0 0 30px rgba(57, 255, 20, 0.3), 0 0 60px rgba(57, 255, 20, 0.15)',
        inset: 'inset 0 1px 0 rgba(57, 255, 20, 0.05)',
    },

    transitions: {
        fast: '150ms cubic-bezier(0.4, 0, 0.2, 1)',
        base: '300ms cubic-bezier(0.4, 0, 0.2, 1)',
        slow: '500ms cubic-bezier(0.4, 0, 0.2, 1)',
        spring: '600ms cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    },

    breakpoints: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
    },
};

// Card stack config
export const CARD_STACK = {
    stickyOffset: 80,    // px from top
    cardGap: 8,          // px between stacked cards
    scaleStep: 0.02,     // scale reduction per card behind
    borderRadius: '24px',
};
