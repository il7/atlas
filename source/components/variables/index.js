import colors from './variables/colors';
import durations from './variables/durations';
import easings from './variables/easings';
import sizes from './variables/sizes';
import weights from './variables/weights';
import widths from './variables/widths';

const defs = {
  colors: colors,
  durations: durations,
  easings: easings,
  sizes: sizes,
  weights: weights,
  widths: widths
};

export default const variables = 
  Object.keys(defs).reduce(walk, { });

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