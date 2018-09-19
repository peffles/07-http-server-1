'use strict';

const server = require('../lib/server'); //eslint-disable-line
const superagent = require('superagent');
const cowsay = require('cowsay');

beforeAll(() => server.start(5000));
afterAll(() => server.stop());

describe('Request to API', () => {
  describe('GET /', () => {
    it('should give a response of 200', () => {
      return superagent.get(':5000/')
        .then((res) => {
          expect(res.status).toEqual(200);
        });
    });
  });

  describe('GET /cowsay', () => {
    const mockCow = cowsay.say({ text: 'Cow say: Wyatt is coolio' });
    const mockHtml = `
        <!DOCTYPE html>
        <html>
          <head>
            <title> Cowsay </title>
          </head>
          <body>
            <h1> Cowsay </h1>
            <pre>
              ${mockCow}
            </pre>
          </body>
        </html>
        `;
    it('should respond with a status of 200 and return the cow html', () => {
      return superagent.get(':3000/cowsay')
        .query({ text: 'Cow say: Wyatt is coolio' })
        .then((res) => {
          expect(res.status).toEqual(200);
          expect(res.text).toEqual(mockHtml);
        });
    });
  });

  // describe('POST /api/cowsay', () => {
  //   it('should return status 200 for a successful post', () => {
  //     return superagent.post(':3000/api/cowsay')
  //       .send({ name: 'Wyatt' })
  //       .then((res) => {
  //         expect(res.status).toEqual(200);
  //         expect(res.body.name).toEqual('Wyatt');
  //       });
  //   });
  // });

  // describe('Invalid request to API', () => {
  //   describe('GET /cowsay', () => {
  //     it('should catch error with 400 status code for not sending text in query', () => {
  //       return superagent.get(':3000/cowsay')
  //         .query({})
  //         .then(() => {})
  //         .catch((err) => {
  //           expect(err.status).toEqual(undefined);
  //           expect(err).toBeTruthy();
  //         });
  //     });
  //   });
  // });
});
