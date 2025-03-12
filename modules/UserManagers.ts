export type User = {
  id: string;
  username: string;
  email: string;
  password: string;
};

export type State = {
  users: User[];
};

export type Action =
  | { type: "ADD_USER"; payload: User }
  | { type: "REMOVE_USER"; payload: string }
  | { type: "UPDATE_USER"; payload: User };

export const randomId = () => Math.floor(Math.random() * 1000).toString();
export const createUser = (user: User) => ({ ...user, id: randomId() });

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "ADD_USER":
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case "REMOVE_USER":
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload),
      };
    case "UPDATE_USER":
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.payload.id ? { ...user, ...action.payload } : user
        ),
      };
    default:
      return state;
  }
};

export const actionCreators = {
  add: (user: User): Action => ({
    type: "ADD_USER",
    payload: createUser(user),
  }),
  remove: (id: string): Action => ({ type: "REMOVE_USER", payload: id }),
  update: (user: User): Action => ({
    type: "UPDATE_USER",
    payload: user,
  }),
};

export const initialState: State = {
  users: [
    {
      id: randomId(),
      username: "john_doe",
      email: "john@example.com",
      password: "password123",
    },
    {
      id: randomId(),
      username: "jane_doe",
      email: "jane@example.com",
      password: "password456",
    },
  ],
};
