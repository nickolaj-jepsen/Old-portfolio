import Typography from 'typography';
import oceanBeach from 'typography-theme-ocean-beach';
import colors from '../constants/color';

oceanBeach.headerColor = colors.foreground;
oceanBeach.googleFonts = [
  {
    name: 'Roboto Slab',
    styles: ['300', '400', '700'],
  },
  {
    name: 'Roboto',
    styles: ['300', '400', '400i', '700'],
  },
];

oceanBeach.overrideThemeStyles = () => ({
  blockquote: {
    borderLeftColor: colors.primary,
  },

  'blockquote cite': {
    color: colors.foreground,
  },

  a: {
    color: colors.primary,
    textShadow: 'none',
    backgroundImage: 'none',
    textDecoration: 'underline',
  },
});

const typography = new Typography(oceanBeach);

export default typography;
