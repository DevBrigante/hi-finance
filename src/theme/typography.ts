import { StyleSheet } from "react-native";

export const fontFamily = {
  medium: "Gabarito_500Medium",
  semiBold: "Gabarito_600SemiBold",
  bold: "Gabarito_700Bold",
  extraBold: "Gabarito_800ExtraBold",
} as const;

export const typography = StyleSheet.create({
  display: {
    fontFamily: fontFamily.extraBold,
    fontSize: 40,
    lineHeight: 40,
    letterSpacing: -1.4,
  },
  h1: {
    fontFamily: fontFamily.bold,
    fontSize: 28,
    lineHeight: 32,
    letterSpacing: -0.7,
  },
  h2: {
    fontFamily: fontFamily.bold,
    fontSize: 20,
    lineHeight: 25,
    letterSpacing: -0.3,
  },
  h3: {
    fontFamily: fontFamily.bold,
    fontSize: 17,
    lineHeight: 21,
    letterSpacing: -0.17,
  },
  body: { fontFamily: fontFamily.medium, fontSize: 16, lineHeight: 24 },
  label: { fontFamily: fontFamily.semiBold, fontSize: 15 },
  caption: { fontFamily: fontFamily.medium, fontSize: 13, lineHeight: 18 },
  micro: { fontFamily: fontFamily.semiBold, fontSize: 11.5 },
  overline: {
    fontFamily: fontFamily.bold,
    fontSize: 12,
    letterSpacing: 1.44,
    textTransform: "uppercase",
  },
});
