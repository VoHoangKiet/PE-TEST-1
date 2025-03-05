import { View, Button, FlatList, Text } from "react-native";
import { styles } from "../screens/style";
import { Todo } from "../modules/Todos";

interface ListTaskProps {
  items: Todo[];
  onPressItem: (id: number) => void;
}

export const ListTask: React.FC<ListTaskProps> = ({ items, onPressItem }) => {
  return (
    <FlatList
      data={items}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.todoItem}>
          <Text>{item.title}</Text>
          <Button
            title="REMOVE"
            onPress={() => onPressItem(item.id)}
          />
        </View>
      )}
    />
  );
};
