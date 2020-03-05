const makeNumberedArray = (n) => [...Array(n)].map((_, i) => i);
const matrix = (...dimensions) => {
  const recursiveLoop = (method) => (
    fn,
    innerDimensions = dimensions,
    parentArguments = [],
  ) => {
    const currentDimensionSize = innerDimensions.shift();
    const hasDimensions = innerDimensions.length;

    return hasDimensions
      ? makeNumberedArray(currentDimensionSize)[method]((x) => recursiveLoop(method)(
        fn,
        [...innerDimensions],
        [...parentArguments, x],
      ))
      : makeNumberedArray(currentDimensionSize)[method]((x) => fn([...parentArguments, x]));
  };
  return {
    map: recursiveLoop('map'),
    forEach: recursiveLoop('forEach'),
  };
};

exports.matrix = matrix;
