import { TodoType } from "./types/todo";
import { VFC } from "react";

// types/todo.ts へ移管
// type TodoType = {
//   userId: number;
//   title: string;
//   //completed: boolean;
//   completed?: boolean; // ?は必須ではないオプション
// };

//export const Todo = (props) => {
//export const Todo = (props: TodoType) => {

// Pickを用いた指定方法(必要な要素を指定する)
//export const Todo = (props: Pick<TodoType, "userId" | "title" | "completed">) => {

// Omit を用いた指定方法(省略する要素を指定する)
//export const Todo = (props: Omit<TodoType, "id">) => {

// VFCによる記述
export const Todo: VFC<Omit<TodoType, "id">> = (props) => {
  // completedは必須ではないので、初期値を設定しておく
  const { title, userId, completed = false } = props;

  const completeMark = completed ? "[完]" : "[未]";
  // useridは要素にないので、エラー発生
  //return <p>{`${completeMark} ${title}(ユーザー：${userid})`}</p>;

  // 正しくはuserIdだったので、ここではエラー回避
  return <p>{`${completeMark} ${title}(ユーザー：${userId})`}</p>;
};
