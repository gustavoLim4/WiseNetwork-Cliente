import theme from "../theme";

const COLOR_START = theme.palette.primary.main;
const COLOR_END = theme.palette.secondary.main;

export const getMainGradient = () => {
    return `linear-gradient(90deg, ${COLOR_START} 0%, ${COLOR_START} 40%, ${COLOR_END} 100%)`;
};