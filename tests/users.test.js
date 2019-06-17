const mongoose = require('mongoose');
const User = require('../src/models/users');

describe('/users', () => {
  beforeEach((done) => {
    mongoose.connection.dropDatabase(() => {
      done();
    });
  });

  describe('POST /users', () => {
    it('creates a new user in the database', (done) => {
      chai.request(server)
        .post('/users')
        .send({
          firstName: 'John',
          lastName: 'Smith',
          email: 'john.smith@hotmail.com',
          password: '12345678',
        })
        .end((error, res) => {
          expect(error).to.equal(null);
          expect(res.status).to.equal(201);
          User.findById(res.body._id, (err, user) => {
            expect(err).to.equal(null);
            expect(user.firstName).to.equal('John');
            expect(user.lastName).to.equal('Smith');
            expect(user.email).to.equal('john.smith@hotmail.com');
            expect(user.password).to.equal('12345678');
            done();
          });
        });
    });
  });
});
