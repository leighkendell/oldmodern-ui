import { createTextStyle } from '@capsizecss/vanilla-extract';
import fontMetrics from '@capsizecss/metrics/dMSans';
import { mediaQueries, theme } from '../theme.css';
import { recipe, RecipeVariants } from '@vanilla-extract/recipes';

const h1 = createTextStyle(
  {
    fontSize: 38,
    leading: 46,
    fontMetrics,
  },
  {
    '@media': {
      [mediaQueries.medium]: {
        fontSize: 48,
        leading: 58,
        fontMetrics,
      },
      [mediaQueries.large]: {
        fontSize: 68,
        leading: 82,
        fontMetrics,
      },
    },
  }
);

const h2 = createTextStyle(
  {
    fontSize: 28,
    leading: 34,
    fontMetrics,
  },
  {
    '@media': {
      [mediaQueries.medium]: {
        fontSize: 32,
        leading: 38,
        fontMetrics,
      },
      [mediaQueries.large]: {
        fontSize: 38,
        leading: 46,
        fontMetrics,
      },
    },
  }
);

const h3 = createTextStyle(
  {
    fontSize: 18,
    leading: 22,
    fontMetrics,
  },
  {
    '@media': {
      [mediaQueries.medium]: {
        fontSize: 20,
        leading: 24,
        fontMetrics,
      },
      [mediaQueries.large]: {
        fontSize: 22,
        leading: 26,
        fontMetrics,
      },
    },
  }
);

export const headingStyles = recipe({
  base: {
    fontFamily: theme.fonts.heading,
    fontWeight: theme.fontWeights.normal,
    display: 'block',
  },
  variants: {
    color: {
      primary: {
        color: theme.colors.black,
      },
      secondary: {
        color: theme.colors.white,
      },
    },
    level: {
      h1: [h1],
      h2: [h2],
      h3: [h3],
    },
  },
  defaultVariants: {
    level: 'h1',
    color: 'primary',
  },
});

export type HeadingVariants = RecipeVariants<typeof headingStyles>;
