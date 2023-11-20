import { Dimensions } from "react-native";

// ---------------------------------------------------------------------

const WINDOW_HEIGHT = Dimensions.get("window").height;
const WINDOW_WIDTH = Dimensions.get("window").width;

// ---------------------------------------------------------------------

export const RPH = (percentage: number) => (WINDOW_HEIGHT * percentage) / 100;

export const RPW = (percentage: number) => (WINDOW_WIDTH * percentage) / 100;

export const WHAT_PERCENT_OF = (TheBigNumber: number, TheSmallNumber: number) =>
  (TheSmallNumber / TheBigNumber) * 100;

export const RP_IMAGE_H = (
  originWith: number,
  originHight: number,
  newWidth: number
) => {
  var imageResponsiveHight = newWidth * (originHight / originWith);
  return imageResponsiveHight;
};

export const RP_IMAGE_W = (
  originWith: number,
  originHight: number,
  newHeight: number
) => {
  var imageResponsiveWidth = newHeight * (originWith / originHight);
  return imageResponsiveWidth;
};
