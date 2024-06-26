import { View, Text, StyleSheet } from 'react-native';
import { color } from './theme';
import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

export default function Cards() {

  const { theme } = useContext(ThemeContext);
  let activeTheme = color[theme.mode];

  return (
    <View style={[styles.container, {backgroundColor: activeTheme.primary}]}>
      <Text style={{color: activeTheme.secondary}}>Cards Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
