import {HeaderProps} from '../types';
import {useColorScheme, View, Text} from 'react-native';
import {styles} from '../styles';

function Header({title}: HeaderProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.headerContainer}>
      <Text
        style={[
          styles.headerTitle,
          {
            color: isDarkMode ? '#FFFFFFF' : '#000000',
          },
        ]}>
        {title}
      </Text>
    </View>
  );
}

export default Header;
