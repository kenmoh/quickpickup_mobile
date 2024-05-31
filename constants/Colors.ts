

const tintColorLight = '#0000CD';
const tintColorDark = '#fff';

export type themeMode = "dark" | "light";
type ThemeProps = {
  text: string;
  background: string;
  icon: string;
  tabIconDefault: string;
  tabIconSelected: string;
  inputBackground: string
  borderolor: string
  
};

type ColorProps = {
  primaryBtnColor: string;
  secondaryBtnColor: string;
  blackBtnColor: string;
  light: ThemeProps;
  dark: ThemeProps;
  error: string
  pickUpColor: string
  pendingColor: string,
  success: string,
  delivered: string
}



export const Colors: ColorProps = {
  primaryBtnColor: tintColorLight,
  secondaryBtnColor: tintColorDark,
  blackBtnColor: tintColorDark,
  pickUpColor: "#f1dca7",
  error: '#ff5e5b',
  pendingColor: "#fae1dd",
  success: "#b9fbc0",
  delivered: '#81b0ff',
  light: {
    text: '#11181C',
    background: '#fff',
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
    inputBackground: '#fff',
    borderolor: '#eee',
    
  },
  dark: {
    text: '#fff',
    background: '#14202B',
    icon: '#9BA1A6',
    tabIconDefault: '#ddd',
    tabIconSelected: tintColorDark,
    inputBackground: '#0c1821',
    borderolor: '#2f4550',
    
    
  },
};
