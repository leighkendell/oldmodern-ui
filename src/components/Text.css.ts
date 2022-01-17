import { createTextStyle } from '@capsizecss/vanilla-extract';
import fontMetrics from '@capsizecss/metrics/dMSans';
import { mediaQueries, theme } from '../theme.css';
import { recipe, RecipeVariants } from '@vanilla-extract/recipes';

const xSmallText = createTextStyle({
  fontSize: 12,
  leading: 16,
  fontMetrics,
});

const smallText = createTextStyle({
  fontSize: 14,
  leading: 18,
  fontMetrics,
});

const mediumText = createTextStyle({
  fontSize: 16,
  leading: 22,
  fontMetrics,
});

const largeText = createTextStyle(
  {
    fontSize: 16,
    leading: 22,
    fontMetrics,
  },
  {
    '@media': {
      [mediaQueries.small]: {
        fontSize: 18,
        leading: 27,
        fontMetrics,
      },
    },
  }
);

export const textStyles = recipe({
  base: {
    fontFamily: theme.fonts.body,
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
    size: {
      xSmall: [xSmallText],
      small: [smallText],
      medium: [mediumText],
      large: [largeText],
    },
    weight: {
      normal: {
        fontWeight: theme.fontWeights.normal,
      },
      bold: {
        fontWeight: theme.fontWeights.bold,
      },
    },
  },
  defaultVariants: {
    size: 'medium',
    color: 'primary',
    weight: 'normal',
  },
});

export type TextVariants = RecipeVariants<typeof textStyles>;
