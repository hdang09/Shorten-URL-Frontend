function hexToRgb(hex) {
    // eslint-disable-next-line prefer-destructuring
    let newHex = hex.split('#')[1];
    let bigint = parseInt(newHex, 16);
    let r = (bigint >> 16) & 255;
    let g = (bigint >> 8) & 255;
    let b = bigint & 255;

    return `${r},${g},${b}`;
}

export default hexToRgb;
