import { HexColor, RGBAColor, RGBColor } from "@/types/theme";

// Helper function to convert hex color to RGB
const hexToRgb = (hex: HexColor): [number, number, number] => {
  const hexValue = hex.slice(1);
  const bigint = parseInt(hexValue, 16);
  return [
    (bigint >> 16) & 255, // Red
    (bigint >> 8) & 255, // Green
    bigint & 255, // Blue
  ];
};

// Helper function to parse RGB or RGBA strings
const parseRgb = (color: RGBColor | RGBAColor): [number, number, number] => {
  const values = color.match(/\d+/g);
  return values
    ? [parseInt(values[0]), parseInt(values[1]), parseInt(values[2])]
    : [0, 0, 0];
};

// Function to adjust brightness (positive value to lighten, negative to darken)
const adjustBrightness = (
  r: number,
  g: number,
  b: number,
  amount: number
): [number, number, number] => {
  return [
    Math.min(255, Math.max(0, r + amount)),
    Math.min(255, Math.max(0, g + amount)),
    Math.min(255, Math.max(0, b + amount)),
  ];
};

// Convert RGB back to hex
const rgbToHex = (r: number, g: number, b: number): HexColor => {
  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}` as HexColor;
};

type GenerateBorderColorArgs = {
  backgroundColor: HexColor | RGBAColor | RGBColor;
  isLightContrast: boolean;
};

export const generateBorderColor = ({
  backgroundColor,
  isLightContrast,
}: GenerateBorderColorArgs): HexColor => {
  // Parse color to RGB values
  let rgb: [number, number, number];
  if (backgroundColor.startsWith("#")) {
    rgb = hexToRgb(backgroundColor as HexColor);
  } else {
    rgb = parseRgb(backgroundColor as RGBColor | RGBAColor);
  }

  // Adjust brightness: lighten for dark backgrounds, darken for light backgrounds
  const brightnessAdjustment = isLightContrast ? -30 : 30;
  const [r, g, b] = adjustBrightness(
    rgb[0],
    rgb[1],
    rgb[2],
    brightnessAdjustment
  );

  // Convert adjusted RGB back to Hex and return as the border color
  return rgbToHex(r, g, b);
};
