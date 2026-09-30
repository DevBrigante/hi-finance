import { useColorScheme } from "react-native";
import { darkColors, lightColors } from "./colors";

export function useThemeColors() {
  const isDark = useColorScheme() === "dark";
  const colors = isDark ? darkColors : lightColors;

  return { colors, isDark };
}
