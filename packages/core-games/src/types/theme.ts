export type HexColor = `#${string}`;
export type RGBColor = `rgb(${number}, ${number}, ${number})`;
export type RGBAColor =
  `rgba(${number}, ${number}, ${number}, ${number | string})`;

export type Theme = {
  readonly backgroundColor: HexColor | RGBColor | RGBAColor | string;
  readonly textColor: HexColor | RGBColor | RGBAColor;
  readonly fontFamily: string;
  readonly isLightContrast: boolean;
  readonly borderColor: HexColor | RGBColor | RGBAColor;
  readonly accentColor: HexColor | RGBColor | RGBAColor;
  readonly boxShadowColor: HexColor | RGBColor | RGBAColor;
  readonly shades: {
    readonly 100: HexColor | RGBColor | RGBAColor;
    readonly 200: HexColor | RGBColor | RGBAColor;
    readonly 300: HexColor | RGBColor | RGBAColor;
    readonly 400: HexColor | RGBColor | RGBAColor;
    readonly 500: HexColor | RGBColor | RGBAColor;
    readonly 600: HexColor | RGBColor | RGBAColor;
    readonly 700: HexColor | RGBColor | RGBAColor;
    readonly 800: HexColor | RGBColor | RGBAColor;
    readonly 900: HexColor | RGBColor | RGBAColor;
  };
};
