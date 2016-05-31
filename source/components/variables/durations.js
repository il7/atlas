import scale from 'scale-unit';

const base = scale('s', 0.35);

export const normal = base();
export const fast = base(0.5);
export const slow = base(2);