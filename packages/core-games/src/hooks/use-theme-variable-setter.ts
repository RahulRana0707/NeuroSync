import { Theme } from "@/types/theme";
import { useEffect } from "react";

export const useThemeVariableSetter = ({ theme }: { theme: Theme }) => {
  useEffect(() => {
    const root = document.documentElement;
    const {
      backgroundColor,
      textColor,
      fontFamily,
      accentColor,
      borderColor,
      boxShadowColor,
      isLightContrast,
      shades,
    } = theme;

    root.style.setProperty("--background-color", backgroundColor);
    root.style.setProperty("--text-color", textColor);
    root.style.setProperty("--font-family", fontFamily);
    root.style.setProperty("--border-color", borderColor);
    root.style.setProperty("--accent-color", accentColor);
    root.style.setProperty("--box-shadow-color", boxShadowColor);
    root.style.setProperty(
      "--is-light-contrast",
      isLightContrast ? "true" : "false"
    );
    root.style.setProperty("--shades-100", shades[100]);
    root.style.setProperty("--shades-200", shades[200]);
    root.style.setProperty("--shades-300", shades[300]);
    root.style.setProperty("--shades-400", shades[400]);
    root.style.setProperty("--shades-500", shades[500]);
    root.style.setProperty("--shades-600", shades[600]);
    root.style.setProperty("--shades-700", shades[700]);
    root.style.setProperty("--shades-800", shades[800]);
    root.style.setProperty("--shades-900", shades[900]);
  }, [theme]);

  return null;
};
