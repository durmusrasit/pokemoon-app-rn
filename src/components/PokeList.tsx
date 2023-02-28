import {FlatList, View} from 'react-native';
import {List} from 'react-native-paper';

function PokeList(): JSX.Element {
  const pokeData = [
    {name: 'abc', height: 1.4, wight: 5.2, types: ['abc', 'def']},
  ];

  const renderItem = () => <List.Item title={'test'} />;

  return (
    <View style={{margin: 4}}>
      <FlatList data={pokeData} renderItem={renderItem} />
    </View>
  );
}

export default PokeList;
