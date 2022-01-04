/**
 * ユーザープロフィール
 */
import { VFC } from "react";
import { User } from "./types/user";

type Props = {
  user: User;
};

export const UserProfile: VFC<Props> = (props) => {
  const { user } = props;
  return (
    <dl>
      <dt>名前</dt>
      <dd>{user.name}</dd>
      <dt>趣味</dt>
      {/* <dd>{user.hobbies.join(" / ")}</dd> */}
      {/* ドットの前に?があるのは、オプショナルチェーン */}
      <dd>{user.hobbies?.join(" / ")}</dd>
    </dl>
  );
};

// オプショナルチェーン
// user.hobbiesは配列を想定しているが、必須項目ではないので、
// もし指定がなければアプリが落ちてしまう。(joinできないため)
// そこで、"?."をつけてオプショナルチェーンとする。
// オブジェクトの要素が存在しない場合は、join()へ渡らない。
