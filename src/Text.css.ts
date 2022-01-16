import { style, styleVariants } from '@vanilla-extract/css';
import { createTextStyle } from '@capsizecss/vanilla-extract';
import fontMetrics from '@capsizecss/metrics/dMSans';
import { mediaQueries, theme } from '.';
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
  base: {},
  variants: {
    color: {},
    size: {
      xSmall: [xSmallText],
      small: [smallText],
      medium: [mediumText],
      large: [largeText],
    },
    rounded: {
      true: { borderRadius: 999 },
    },
  },
  defaultVariants: {
    size: 'medium',
  },
});

export type TextVariants = RecipeVariants<typeof textStyles>;
