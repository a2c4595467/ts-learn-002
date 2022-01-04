import { useState } from "react";
import axios from "axios";
import { Todo } from "./Todo";
import { TodoType } from "./types/todo";
import { Text } from "./Text";
import { UserProfile } from "./UserProfile";
import { User } from "./types/user";
import "./styles.css";

// types/todo.ts へ移管
// type TodoType = {
//   userId: number;
//   id: number;
//   title: string;
//   completed: boolean;
// };

export default function App() {
  //const [todos, setTodos] = useState<any>([]);

  // TodoType型の配列を指定する
  const [todos, setTodos] = useState<Array<TodoType>>([]);

  const onClickFetchData = () => {
    // axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
    //   setTodos(res.data);
    // });

    axios
      .get<Array<TodoType>>("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        setTodos(res.data);
      });
  };

  const user: User = {
    name: "aaaa",
    hobbies: ["釣り", "キャンプ", "バイク"]
  };

  return (
    <div className="App">
      <UserProfile user={user} />
      <Text color="red" fontSize="18px" />
      <button onClick={onClickFetchData}>データ取得</button>
      {todos.map((todo) => (
        // JSONデータでは"userid"ではなく"userId"なので、undefinedエラーとなる
        // <Todo title={todo.title} userid={todo.userid} />

        // 正しく"userId"を指定したので、エラー回避
        <Todo
          key={todo.id}
          title={todo.title}
          userId={todo.userId}
          completed={todo.completed}
        />
      ))}
    </div>
  );
}
