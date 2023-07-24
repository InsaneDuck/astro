import Colors from '@/components/theming/Colors';
import {useColorScheme} from 'react-native';

/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */

type UseThemeColorProps = {
  color: { light?: string; dark?: string };
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark;
};

export const useThemeColor = (
  props: { light?: string; dark?: string },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark,
) => {
  //gets theme from system and if nothing is returned it returns light
  const theme = useColorScheme() ?? "light";
  const colorFromProps = props[theme];

  return colorFromProps ? colorFromProps : Colors[theme][colorName];
};
