import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
    },
    title: {
      fontSize: 24,
      fontWeight: "bold",
      marginBottom: 20,
    },
    input: {
      borderWidth: 1,
      borderColor: "#ccc",
      padding: 10,
      marginBottom: 10,
    },
    todoItem: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      padding: 10,
      borderBottomWidth: 1,
      borderBottomColor: "#ccc",
    },
    errorText: {
        color: 'red'
    }
  });