import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { RootStackParamList } from "../App";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type DetailsScreenProps = NativeStackScreenProps<RootStackParamList, 'UserDetail'>;

const UserDetailsScreen:React.FC<DetailsScreenProps> = ({ route }) => {
  const { user } = route.params;
  const navigate = useNavigation();
  
  return (
    <View style={styles.container}>
      <View style={styles.detailsContainer}>
        <Text style={styles.header}>🧝User Details</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>📌Name:</Text>
          <Text style={styles.labelValue}>{user?.username}</Text>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>📧Email:</Text>
          <Text style={styles.labelValue}>{user?.email}</Text>
        </View>
        <Button
          title="Back"
          onPress={() => navigate.goBack()}
          color={"#2a9d8f"}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
  },
  header: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#2a9d8f",
  },
  detailsContainer: {
    width: "80%",
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  inputContainer: {
    marginBottom: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  label: {
    fontSize: 16,
    color: "#333",
  },
  labelValue: {
    fontSize: 16,
    color: "#333",
    fontWeight: "bold",
  },
});

export default UserDetailsScreen;
