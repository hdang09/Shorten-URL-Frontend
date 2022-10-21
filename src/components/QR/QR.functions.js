import qrCode from './QR';

export const changeSingleDotColor = (inputColor) => {
    // Remove gradient color
    if (qrCode._options.dotsOptions.gradient) {
        qrCode.update({
            dotsOptions: {
                ...qrCode._options.dotsOptions,
                gradient: null,
            },
        });
    }

    qrCode.update({
        dotsOptions: {
            ...qrCode._options.dotsOptions,
            color: inputColor,
        },
    });
};

export const changeGradientDotColor = (offset, color) => {
    // Remove single color
    if (!qrCode._options.dotsOptions.gradient) {
        qrCode.update({
            dotsOptions: {
                ...qrCode._options.dotsOptions,
                gradient: {
                    ...qrCode._options.dotsOptions.gradient,
                    colorStops: [
                        { offset: 0, color: '#000' },
                        { offset: 1, color: '#000' },
                    ],
                },
            },
        });
    }

    const newArray = qrCode._options.dotsOptions.gradient.colorStops.map(
        (item) => (item.color = item.offset === offset ? color : item.color),
    );
    qrCode.update(newArray);
};

export const changeSingleCornerSquareColor = (inputColor) => {
    // Remove gradient color
    if (qrCode._options.cornersSquareOptions.gradient) {
        qrCode.update({
            cornersSquareOptions: {
                ...qrCode._options.cornersSquareOptions,
                gradient: null,
            },
        });
    }

    qrCode.update({
        cornersSquareOptions: {
            ...qrCode._options.cornersSquareOptions,
            color: inputColor,
        },
    });
};

export const changeGradientCornerSquareColor = (offset, color) => {
    // Remove single color
    if (!qrCode._options.cornersSquareOptions.gradient) {
        qrCode.update({
            cornersSquareOptions: {
                ...qrCode._options.cornersSquareOptions,
                gradient: {
                    ...qrCode._options.cornersSquareOptions.gradient,
                    colorStops: [
                        { offset: 0, color: '#000' },
                        { offset: 1, color: '#000' },
                    ],
                },
            },
        });
    }

    const newArray = qrCode._options.cornersSquareOptions.gradient.colorStops.map(
        (item) => (item.color = item.offset === offset ? color : item.color),
    );
    qrCode.update(newArray);
};

export const changeSingleCornerDotColor = (inputColor) => {
    // Remove gradient color
    if (qrCode._options.cornersDotOptions.gradient) {
        qrCode.update({
            cornersDotOptions: {
                ...qrCode._options.cornersDotOptions,
                gradient: null,
            },
        });
    }

    qrCode.update({
        cornersDotOptions: {
            ...qrCode._options.cornersDotOptions,
            color: inputColor,
        },
    });
};

export const changeGradientCornerDotColor = (offset, color) => {
    // Remove single color
    if (!qrCode._options.cornersDotOptions.gradient) {
        qrCode.update({
            cornersDotOptions: {
                ...qrCode._options.cornersDotOptions,
                gradient: {
                    ...qrCode._options.cornersDotOptions.gradient,
                    colorStops: [
                        { offset: 0, color: '#000' },
                        { offset: 1, color: '#000' },
                    ],
                },
            },
        });
    }

    const newArray = qrCode._options.cornersDotOptions.gradient.colorStops.map(
        (item) => (item.color = item.offset === offset ? color : item.color),
    );
    qrCode.update(newArray);
};
