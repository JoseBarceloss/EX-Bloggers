import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Post from '../components/Post';
import { posts, users } from '../data';
import { PostType, UserType } from '../types';
import '../styles/Posts.css';

export default function Posts() {
  // Extrai o parâmetro "id" da rota usando o hook useParams
  const { id } = useParams <{ id: string }>();

  // Filtra os posts com base no ID do usuário extraído dos parâmetros de rota
  const userPosts: PostType[] = posts.filter((post) => post.userId === Number(id));

  // Encontra o nome do usuário a partir do ID e define um título padrão caso não haja correspondência
  const foundUser = users.find((user: UserType) => user.id === Number(id));
  const userTitle = foundUser ? `Posts by ${foundUser.firstName} ${foundUser.lastName} `
    : 'No Posts for this User';

  return (
    <div data-testid="posts-page">
      <Header />
      <h1>{userTitle}</h1>
      <div className="posts-list">
        {userPosts.map((post) => (
          <Post key={ post.id } postData={ post } />
        ))}
      </div>
    </div>
  );
}
