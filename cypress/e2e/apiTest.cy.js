describe('API Testing with Cypress', () => {

    it('GET - Read a post', () => {
      cy.request('https://jsonplaceholder.typicode.com/posts/1').then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('id', 1);
      });
    });
  
    it('POST - Create a new post', () => {
      cy.request({
        method: 'POST',
        url: 'https://jsonplaceholder.typicode.com/posts',
        body: {
          title: 'New Post',
          body: 'This is a new post for testing.',
          userId: 1,
        },
      }).then((response) => {
        expect(response.status).to.eq(201);
        expect(response.body).to.have.property('title', 'New Post');
      });
    });
  
    it('PUT - Update an existing post', () => {
      cy.request({
        method: 'PUT',
        url: 'https://jsonplaceholder.typicode.com/posts/1',
        body: {
          id: 1,
          title: 'Updated Post',
          body: 'This post has been updated.',
          userId: 1,
        },
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('title', 'Updated Post');
      });
    });
  
    it('DELETE - Delete a post', () => {
      cy.request({
        method: 'DELETE',
        url: 'https://jsonplaceholder.typicode.com/posts/1',
      }).then((response) => {
        expect(response.status).to.eq(200);
      });
    });
  
  });