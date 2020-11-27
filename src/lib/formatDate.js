export default date => {
    const str = new Date(date)
        .toLocaleDateString("en-US", {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    return str === 'Invalid Date' ? undefined : str;
};
