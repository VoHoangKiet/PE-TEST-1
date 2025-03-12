import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { User } from "../modules/UserManagers";

interface EditUserProps {
  user: User;
  onUpdateUser: (user: User) => void;
}

const EditUserComponent: React.FC<EditUserProps> = (props) => {
  const { onUpdateUser } = props;
  const [user, setUser] = useState<User>(props.user);
  const setDataUser = (field: keyof User, value: string) => {
    setUser((prevUser) => ({
      ...prevUser,
      [field]: value,
    }));
  };

  const updateUser = (): void => {
    if (user.username && user.email && user.password) {
      onUpdateUser(user);
      setDataUser("email", "");
      setDataUser("password", "");
      setDataUser("username", "");
    } else {
      alert("Please fill out all fields");
    }
  };

  return (
    <View style={styles.formContainer}>
      <Text style={styles.header}>Edit User</Text>
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
      <Button color={"red"} title="UPDATE USER" onPress={updateUser} />
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

export default EditUserComponent;
