import { BASIC, PLUM, PEAR } from "./themes/themes";
import THEMES from "./constants/theme";

const getTheme = (themeName) => {
  switch (themeName) {
    case THEMES.PLUM:
      return PLUM;
    case THEMES.PEAR:
      return PEAR;
    default:
      return BASIC;
  }
};
export default getTheme;
