import Color from 'color';

import * as colorVars from './colors';
import * as durationVars from './durations';
import * as easingVars from './easings';
import * as sizeVars from './sizes';
import * as weightVars from './weights';
import * as widthVars from './widths';


export const colors = walk(colorVars);
export const durations = walk(durationVars);
export const easings = walk(easingVars);
export const sizes = walk(sizeVars);
export const weights = walk(weightVars);
export const widths = walk(widthVars);


function walk(vars) {
  return Object.keys(vars).reduce(unwrap.bind(vars), { });
}

function unwrap(memo, key) {
  memo[key] = this[key];

  if (memo[key] instanceof Color) {
    memo[key] = memo[key].rgbString();
  }
  
  return memo;
}