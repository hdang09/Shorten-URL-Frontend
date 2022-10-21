import classyRoundedPattern from '../../assets/qr/pattern/classy-rounded.png';
import classyPattern from '../../assets/qr/pattern/classy.png';
import dotsPattern from '../../assets/qr/pattern/dots.png';
import defaultPattern from '../../assets/qr/pattern/default.png';
import extraRoundedPattern from '../../assets/qr/pattern/extra-rounded.png';
import roundedPattern from '../../assets/qr/pattern/rounded.png';
import squareCornerSquare from '../../assets/qr/corners/corner-square/square.png';

import dotCornerSquare from '../../assets/qr/corners/corner-square/dot.png';
import extraRoundedCornerSquare from '../../assets/qr/corners/corner-square/extra-rounded.png';
import SquareCornerDot from '../../assets/qr/corners/corner-dot/square.png';
import DotCornerDot from '../../assets/qr/corners/corner-dot/dot.png';

export const FRAMES = [
    { image: defaultPattern, type: '' },
    { image: classyRoundedPattern, type: 'classy-rounded' },
    { image: classyPattern, type: 'classy' },
    { image: dotsPattern, type: 'dots' },
    { image: extraRoundedPattern, type: 'extra-rounded' },
    { image: roundedPattern, type: 'rounded' },
];

export const CORNERS_SQUARES = [
    { image: squareCornerSquare, type: 'square' },
    { image: dotCornerSquare, type: 'dots' },
    { image: extraRoundedCornerSquare, type: 'extra-rounded' },
];
export const CORNERS_DOTS = [
    { image: SquareCornerDot, type: 'square' },
    { image: DotCornerDot, type: 'dots' },
];
