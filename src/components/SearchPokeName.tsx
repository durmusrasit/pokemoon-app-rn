import {View} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import {styles} from '../styles';

function SearchPokeName(): JSX.Element {
  return (
    <View style={styles.searchContainer}>
      <TextInput
        placeholder="Type here..."
        mode="outlined"
        right={
          <TextInput.Icon
            icon={() => (
              <Button mode="text" style={{borderColor: '#000000'}}>
                Search
              </Button>
            )}
          />
        }
      />
    </View>
  );
}

export default SearchPokeName;
