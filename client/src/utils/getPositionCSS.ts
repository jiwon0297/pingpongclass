interface getpositionCSSProps {
  pos: any;
}

const getPositionCSS = (pos: getpositionCSSProps): string => {
  return Object.entries(pos)
    .map(([key, value]) =>
      ['top', 'left', 'right', 'bottom'].includes(key)
        ? `${key}: ${value};`
        : '',
    )
    .join('');
};

export default getPositionCSS;
