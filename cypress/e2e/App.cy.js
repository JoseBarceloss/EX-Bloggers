import { posts, users } from "../mock/data";

const setup = (endpoint = '') => {
  cy.visit(`http://localhost:5173/${endpoint}`);
}

describe('1 - Crie as rotas para a aplicação', () => {
  it('Ao entrar na rota / é renderizado apenas o componente <Users />', () => {
    setup();
    cy.get('[data-testid="users-page"]').should('exist');
    cy.get('[data-testid$="-page"]').should('have.length', 1);
  });

  it('Ao entrar na rota /about é renderizado apenas o componente <About />', () => {
    setup('about');
    cy.get('[data-testid="about-page"]').should('exist');
    cy.get('[data-testid$="-page"]').should('have.length', 1);
  });

  it('Ao entrar na rota /posts é renderizado apenas o componente <Posts />', () => {
    setup('posts/id');
    cy.get('[data-testid="posts-page"]').should('exist');
    cy.get('[data-testid$="-page"]').should('have.length', 1);
  });

  it('Ao entrar em uma rota não existente é renderizado o componente <NotFound />', () => {
    setup('not-found');
    cy.get('[data-testid="not-found-page"]').should('exist');
    cy.get('[data-testid$="-page"]').should('have.length', 1);
  });
})

describe('2- Crie dois NavLink dentro do componente Header', () => {
  beforeEach(setup);

  it('O primeiro NavLink deve possuir o texto "Home" e a rota "/"', () => {
    cy.get('a').contains(/home/i).should('have.attr', 'href', '/');
  });

  it('O segundo NavLink deve possuir o texto "About" e a rota "/about"', () => {
    cy.get('a').contains(/about/i).should('have.attr', 'href', '/about');
  });
})

describe('3 - Crie um link para a página de posts de um usuário', () => {
  beforeEach(setup);

  it('O link deve possuir o texto "Posts" e a rota "/posts/id"', () => {
    for (let id = 1; id <= users.length; id++) {
      cy.get(`a[href="/posts/${id}"]`).should('exist');
    }
  });
});

describe('4 - Exiba os posts de um usuário', () => {
  it('O componente <Posts /> deve renderizar apenas os posts do primeiro usuário', () => {
    setup('posts/1');

    const othersPosts = posts.filter((post) => post.userId !== 1);
    othersPosts.forEach((post) => {
      cy.get('h1').should('not.contain', post.title);
    });

    const userPosts = posts.filter((post) => post.userId === 1);
    userPosts.forEach((post) => {
      cy.contains(post.title);
    });
  });

  it('O componente <Posts /> deve renderizar os posts do usuário', () => {
    users.forEach((user) => {
      setup(`posts/${user.id}`);

      const userPosts = posts.filter((post) => post.userId === user.id);
      userPosts.forEach((post) => {
        cy.contains(post.title);
      });
    })
  });
});
