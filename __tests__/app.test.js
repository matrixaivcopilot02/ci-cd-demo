const  request = require('supertest');
const app = require('../app');

describe('App', () => {
    it('should respond to GET /', async () => {
        const response = await request(app).get('/');
        expect(response.status).toBe(200);
    });
});
const request = require('supertest');
const app = require('../app');
describe('App', () => {
    it('should respond with Hello World!', async () => {
        const response = await request(app).get('/');
        expect(response.text).toBe('Hello World!');
    });

    it('should return status 200 for GET /', async () => {
        const response = await request(app).get('/');
        expect(response.status).toBe(200);
    });
});