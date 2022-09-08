// React TS Base Styles
import borders from "assets/theme/base/borders";

// React TS Helper Functions
import pxToRem from "assets/theme/functions/pxToRem";

const { borderRadius } = borders;

// types
type CardMediaTypes = any;

const cardMedia: CardMediaTypes = {
  styleOverrides: {
    root: {
      borderRadius: borderRadius.xl,
      margin: `${pxToRem(16)} ${pxToRem(16)} 0`,
    },

    media: {
      width: "auto",
    },
  },
};

export default cardMedia;
