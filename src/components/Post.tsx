import { PostType } from '../types';

type Props = {
  postData: PostType
};

export default function Post({ postData: { title, body } }: Props) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  );
}
