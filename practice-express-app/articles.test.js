const request = require('supertest');
const app = require('./index');

describe('POST /articles', () => {
  const validArticle = {
    title: 'Test Article',
    body: 'This is the article body.',
    authorId: 'f47ac10b-58cc-4372-a567-0e02b2c3d479',
  };

  it('returns 201 with the created article for valid input', async () => {
    const res = await request(app).post('/articles').send(validArticle);

    expect(res.status).toBe(201);
    expect(res.body.title).toBe(validArticle.title);
    expect(res.body.body).toBe(validArticle.body);
    expect(res.body.authorId).toBe(validArticle.authorId);
    expect(res.body.id).toBeDefined();
    expect(res.body.createdAt).toBeDefined();
  });

  it('returns 400 when title is missing', async () => {
    const res = await request(app)
      .post('/articles')
      .send({ body: 'Some body', authorId: validArticle.authorId });

    expect(res.status).toBe(400);
    expect(res.body.error).toMatch(/title/i);
  });

  it('returns 400 when body is missing', async () => {
    const res = await request(app)
      .post('/articles')
      .send({ title: 'A Title', authorId: validArticle.authorId });

    expect(res.status).toBe(400);
    expect(res.body.error).toMatch(/body/i);
  });

  it('returns 400 when authorId is not a valid UUID', async () => {
    const res = await request(app)
      .post('/articles')
      .send({ title: 'A Title', body: 'Some body', authorId: 'not-a-uuid' });

    expect(res.status).toBe(400);
    expect(res.body.error).toMatch(/authorId/i);
  });

  it('returns 400 when title exceeds 200 characters', async () => {
    const res = await request(app)
      .post('/articles')
      .send({ title: 'a'.repeat(201), body: 'Some body', authorId: validArticle.authorId });

    expect(res.status).toBe(400);
    expect(res.body.error).toMatch(/title/i);
  });
});
