export const ConstantColors = {
  downVote: "#fd7e14",
  iosBlue: "#007AFF",
  iosRed: "#FF3B30",
  lemmyGreen: "#00bc8c",
  reply: "#6610f2",
  save: "#198754",
  tintColorDark: "#fff",
  tintColorLight: "#2f95dc",
  upVote: "#0d6efd",
};
export default {
  light: {
    background: "#fff",
    borderColor: "#eee",
    tabIconDefault: "#ccc",
    tabIconSelected: ConstantColors.tintColorLight,
    text: "#000",
    tint: ConstantColors.tintColorLight,
  },
  dark: {
    background: "#000",
    borderColor: "#1c1c1c",
    tabIconDefault: "#ccc",
    tabIconSelected: ConstantColors.tintColorDark,
    text: "#fff",
    tint: ConstantColors.tintColorDark,
  },
};
