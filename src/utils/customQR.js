// Helper functions
export const onDownloadClick = (type, qrCode) => {
    qrCode.download({
        extension: type,
    });
};

export const handleSetLogoSize = (e, qrCode) => {
    qrCode.update({
        imageOptions: {
            ...qrCode.imageOptions,
            imageSize: e.target.value,
        },
    });
};

export const changeSingleColor = (inputColor, option, qrCode) => {
    // Remove gradient color
    if (qrCode._options[option].gradient) {
        qrCode.update({
            [option]: {
                ...qrCode._options[option],
                gradient: null,
            },
        });
    }

    qrCode.update({
        [option]: {
            ...qrCode._options[option],
            color: inputColor,
        },
    });
};

export const changeGradientColor = (offset, color, option, qrCode) => {
    // Remove single color
    if (!qrCode._options[option].gradient) {
        qrCode.update({
            [option]: {
                ...qrCode._options[option],
                gradient: {
                    ...qrCode._options[option].gradient,
                    colorStops: [
                        { offset: 0, color: '#000' },
                        { offset: 1, color: '#000' },
                    ],
                },
            },
        });
    }

    const newArray = qrCode._options[option].gradient.colorStops.map(
        (item) => (item.color = item.offset === offset ? color : item.color),
    );
    qrCode.update(newArray);
};
