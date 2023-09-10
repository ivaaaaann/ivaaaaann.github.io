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
} as const;

export const color = {
  background: '#fff',
  base: '#3a3d40',
  border: '#3a3d40',
  primary: '#244382',
  hover: '#c45a8d',
  focus: '#c45a8d',
};
