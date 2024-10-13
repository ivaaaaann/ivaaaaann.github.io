import { defineProperties } from '@vanilla-extract/sprinkles';
import { fonts, space } from './token';
import { vars } from './vars.css';

export const primitiveProperties = {
  overflow: {
    hidden: 'hidden',
    scroll: 'scroll',
    visible: 'visible',
  },
  outline: {
    none: 'none',
  },
  boxSizing: {
    'border-box': 'border-box',
  },
  position: {
    absolute: 'absolute',
    relative: 'relative',
    fixed: 'fixed',
    sticky: 'sticky',
  },
  display: {
    none: 'none',
    block: 'block',
    inline: 'inline',
    'inline-block': 'inline-block',
    flex: 'flex',
    'inline-flex': 'inline-flex',
  },
  width: {
    full: '100%',
  },
  height: {
    full: '100%',
  },
  alignItems: {
    normal: 'normal',
    stretch: 'stretch',
    'flex-start': 'flex-start',
    center: 'center',
    'flex-end': 'flex-end',
    baseline: 'baseline',
  },
  justifyContent: {
    'flex-start': 'flex-start',
    center: 'center',
    'flex-end': 'flex-end',
    'space-between': 'space-between',
    'space-around': 'space-around',
    'space-evenly': 'space-evenly',
  },
  flexDirection: {
    row: 'row',
    column: 'column',
    'row-reverse': 'row-reverse',
    'column-reverse': 'column-reverse',
  },
  flexWrap: {
    wrap: 'wrap',
    nowrap: 'nowrap',
  },
  textAlign: {
    inherit: 'inherit',
    start: 'start',
    center: 'center',
    end: 'end',
    justify: 'justify',
  },
  textDecoration: {
    none: 'none',
    underline: 'underline',
  },
  whiteSpace: {
    normal: 'normal',
    nowrap: 'nowrap',
    'pre-wrap': 'pre-wrap',
  },
  fontSize: Object.assign({}, vars.fontSize),
  fontFamily: {
    heading: fonts.heading,
    base: fonts.base,
    light: fonts.light,
  },
  fontSize: Object.assign({}, vars.fontSize),
  gap: space,
  paddingTop: space,
  paddingBottom: space,
  paddingLeft: space,
  paddingRight: space,
  marginTop: space,
  marginBottom: space,
  marginLeft: space,
  marginRight: space,
} as const;

export const definedPrimitiveProperties = defineProperties({
  properties: primitiveProperties,
  shorthands: {
    padding: ['paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'],
    paddingX: ['paddingLeft', 'paddingRight'],
    paddingY: ['paddingTop', 'paddingBottom'],
    margin: ['marginTop', 'marginBottom', 'marginLeft', 'marginRight'],
    marginX: ['marginLeft', 'marginRight'],
    marginY: ['marginTop', 'marginBottom'],
  },
});
