import { posts, users } from './data';

const mockFetch = (url) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        json: () => {
          if (url === 'https://dummyjson.com/users?select=firstName,lastName,image') {
            return Promise.resolve(users);
          }
          if (url.includes('/posts') && url.includes('https://dummyjson.com/users/')) {
            return Promise.resolve(posts);
          }
        },
      });
    }, 1000);
  });
}
export default mockFetch;
