import colors from './colors';
import durations from './durations';
import easings from './easings';
import sizes from './sizes';
import weights from './weights';
import widths from './widths';

const defs = {
  colors: colors,
  durations: durations,
  easings: easings,
  sizes: sizes,
  weights: weights,
  widths: widths
};

export default variables = Object.keys(defs).reduce(walk, { });

function walk(memo, key, i, all) {
  memo[key] = Object.keys(all[key]).reduce(unwrap, { });
  return memo;
}

function unwrap(memo, key, i, all) {
  memo[key] = all[key];

  // if the value is a scale, unwrap it
  if (typeof memo[key] === 'function') {
    memo[key] = memo[key]();
  }

  return memo;
}