import React, { useReducer } from "react";
import { View } from "react-native";
import { styles } from "./style";
import { actionCreators, initialState, reducer } from "../modules/Todos";
import { TitleTask, InputTask, ListTask } from "../components";

const TodoList = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <View style={styles.container}>
      <TitleTask>To do List Task</TitleTask>
      <InputTask placeholder="Enter a new task" onSubmitEditing={(title) => dispatch(actionCreators.add(title))}/>
      <ListTask
      items={state.items}
      onPressItem={(id) => dispatch(actionCreators.remove(id))}
      />
    </View>
  );
};

export default TodoList;
