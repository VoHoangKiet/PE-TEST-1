import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { User } from "../modules/UserManagers";

interface AddUserProps {
  onAddUser: (user: User) => void;
}

const AddUserComponent: React.FC<AddUserProps> = ({ onAddUser }) => {
  const [user, setUser] = useState<User>({
    id: "",
    email: "",
    password: "",
    username: "",
  });
  const setDataUser = (field: keyof User, value: string) => {
    setUser((prevUser) => ({
      ...prevUser,
      [field]: value,
    }));
  };

  const addUser = (): void => {
    if (user.username && user.email && user.password) {
      onAddUser(user);
      setDataUser("email", "");
      setDataUser("password", "");
      setDataUser("username", "");
    } else {
      alert("Please fill out all fields");
    }
  };

  return (
    <View style={styles.formContainer}>
      <Text style={styles.header}>Add User</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter name"
        value={user.username}
        onChangeText={(value) => setDataUser("username", value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter email"
        value={user.email}
        onChangeText={(value) => setDataUser("email", value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter password"
        value={user.password}
        onChangeText={(value) => setDataUser("password", value)}
        secureTextEntry
      />
      <Button color={"#2a9d8f"} title="ADD USER" onPress={addUser} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    color: "#086f63",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  formContainer: {
    marginBottom: 20,
    backgroundColor: "#fff",
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 8,
  },
});

export default AddUserComponent;
