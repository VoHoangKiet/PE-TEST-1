import { View, TextInput, Button, Text } from "react-native";
import { styles } from "../screens/style";
import { useState } from "react";

interface InputTaskProps {
  placeholder: string;
  onSubmitEditing: (text: string) => void;
}

export const InputTask: React.FC<InputTaskProps> = ({
  placeholder,
  onSubmitEditing,
}) => {
  const [title, setTitle] = useState<string>("");
  const [error, setError] = useState<string>("");
  const handleAdd = () => {
    if(!title.trim()) {
        setError('Please Enter a task !');
        return
    }
    setError('')
    onSubmitEditing(title)
    setTitle('')
  }
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={title}
        onChangeText={setTitle}
        onSubmitEditing={handleAdd}
      />
      <Button
        title="ADD TODO"
        onPress={handleAdd}
      />
      {error ? <Text style={styles.errorText}>{error}</Text>: null}
    </View>
  );
};