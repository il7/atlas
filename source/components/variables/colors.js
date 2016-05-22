import Color from 'color';

export const light = Color().rgb(247, 245, 240);
export const dark = Color().rgb(41, 38, 35);

export const dark5 = Color(light).mix(dark, 0.05);
export const dark10 = Color(light).mix(dark, 0.10);
export const dark25 = Color(light).mix(dark, 0.25);
export const dark50 = Color(light).mix(dark, 0.50);
export const dark75 = Color(light).mix(dark, 0.75);
export const dark90 = Color(light).mix(dark, 0.90);

export const red = Color().rgb(239, 86, 80);
export const purple = Color().rgb(127, 97, 170);
export const blue = Color().rgb(87, 115, 184);
export const teal = Color().rgb(78, 189, 149);
export const yellow = Color().rgb(242, 202, 21);