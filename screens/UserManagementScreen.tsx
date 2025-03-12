import React, { useEffect, useReducer, useState } from "react";
import {
  View,
  Text,
  Button,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import AddUserComponent from "../components/AddUser";
import {
  actionCreators,
  initialState,
  reducer,
  User,
} from "../modules/UserManagers";
import EditUserComponent from "../components/EditUser";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";

type UsersManagementScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "UserManagement"
>;

interface UsersManagementScreenProps {
  navigation: UsersManagementScreenNavigationProp;
}

const UserManagementScreen: React.FC<UsersManagementScreenProps> = ({
  navigation,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [userToEdit, setUserToEdit] = useState<User>();
  const editUser = (id: string): void => {
    const userToEdit = state.users.find((user) => user.id === id);
    if (userToEdit) {
      setUserToEdit(userToEdit);
    }
  };
  const navigateToUserDetail = (id: string): void => {
    navigation.navigate("UserDetail", {
      user: state.users.find((user) => user.id === id) as User,
    });
  };
  const handleUpdateUser = (user: User) => {
    dispatch(actionCreators.update(user));
    setUserToEdit(undefined)
  }
  return (
    <View style={styles.container}>
      {!userToEdit ? (
        <AddUserComponent
          onAddUser={(user) => dispatch(actionCreators.add(user))}
        />
      ) : (
        <EditUserComponent
          onUpdateUser={handleUpdateUser}
          user={userToEdit}
        />
      )}
      <FlatList
        data={state.users}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.userItem}>
            <View>
              <TouchableOpacity onPress={() => navigateToUserDetail(item.id)}>
                <Text style={{ fontWeight: "bold", fontSize: 18 }}>
                  {item.username}
                </Text>
              </TouchableOpacity>
              <Text>{item.email}</Text>
            </View>
            <View style={styles.buttonsContainer}>
              <Button
                color={"#2a9d8f"}
                onPress={() => editUser(item.id)}
                title="EDIT"
              />
              <Button
                color={"red"}
                onPress={() => dispatch(actionCreators.remove(item.id))}
                title="DELETE"
              />
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f0f0f0",
    padding: 20,
    flex: 1,
  },
  userItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    marginBottom: 10,
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  buttonsContainer: {
    flexDirection: "column",
    gap: 5,
  },
  editButton: {
    color: "blue",
    marginRight: 10,
  },
  deleteButton: {
    color: "red",
  },
});

export default UserManagementScreen;
