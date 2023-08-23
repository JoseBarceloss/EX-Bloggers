import Header from '../components/Header';
import Post from '../components/Post';
import { posts } from '../data';
import { PostType } from '../types';
import '../styles/Posts.css';

export default function Posts() {
  const userPosts: PostType[] = []; // TODO: recebe os posts do usuário selecionado

  return (
    <div data-testid="posts-page">
      <Header />
      <h1>Posts</h1>
      <div className="posts-list">
        {userPosts.map((post) => (
          <Post key={ post.id } postData={ post } />
        ))}
      </div>
    </div>
  );
}
