const generateYears = () => {
    let years = [];
    for (let i = 2022; i <= 2030; i++) {
        years.push({
            label: i,
            key: i,
            disabled: new Date().getFullYear() < i,
        });
    }
};
generateYears();

const generateMonths = (date) => {
    let months = [];
    for (let i = 1; i <= 12; i++) {
        months.push({
            label: i,
            key: i,
            disabled: new Date().getFullYear() === date.year && new Date().getMonth() < i - 1,
        });
    }
};
generateMonths();

export { generateMonths, generateYears };
