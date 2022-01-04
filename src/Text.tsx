/**
 * コンポーネント自体の型定義
 */
//import { FC } from "react";
import { VFC } from "react";

type Props = {
  color: string;
  fontSize: string;
};

// export const Text = (props: Props) => {
//   const { color, fontSize } = props;
//   return <p style={{ color, fontSize }}>テキストです</p>;
// };

// FC .. Functional Component
// FCは暗黙的にchildrenを含むが、含まない"VFC"が存在している。
// FCはReact18からchildrenを含まなくなるので注意。
export const Text: VFC<Props> = (props) => {
  const { color, fontSize } = props;
  return <p style={{ color, fontSize }}>テキストです</p>;
};
