export type Todo = {
  id: number;
  title: string;
};

export type State = {
  items: Todo[];
};

export type Action =
  | { type: "ADD_TODO"; payload: Todo }
  | { type: "REMOVE_TODO"; payload: number };

export const randomId = () => Math.floor(Math.random() * 1000); // Generate a random ID
export const createItem = (title: string) => ({ id: randomId(), title });

// reducer function
export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case "REMOVE_TODO":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};

export const actionCreators = {
  add: (title: string): Action => ({
    type: "ADD_TODO",
    payload: createItem(title),
  }),
  remove: (id: number): Action => ({ type: "REMOVE_TODO", payload: id }),
};

export const initialState: State = {
  items: [
    createItem("Learn React Native"),
    createItem("Learn TypeScript"),
    createItem("Learn Redux"),
    createItem("Learn React Navigation"),
  ],
};
