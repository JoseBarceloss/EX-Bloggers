import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Post from '../components/Post';
import { posts } from '../data';
import { PostType } from '../types';
import '../styles/Posts.css';

export default function Posts() {
  // Extrai o parâmetro "id" da rota usando o hook useParams
  const { id } = useParams <{ id: string }>();

  // Filtra os posts com base no ID do usuário extraído dos parâmetros de rota
  const userPosts: PostType[] = posts.filter((post) => post.userId === Number(id));

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
