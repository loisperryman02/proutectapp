const mongoose = require('mongoose');
const User = require('../User'); // adjust the path to your User model
require('dotenv').config();

describe('User Database Test', () => {
  before((done) => {
    mongoose.connect(process.env.MONGODB_URI);
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error'));
    db.once('open', () => {
      console.log('We are connected to the User database.');
      done();
    });
  });

  describe('Create a new user', () => {
    it('should insert new user in the database', (done) => {
      const testUser = new User({
        name: 'Test User',
        username: 'testuser',
        password: 'password'
      });

      testUser.save((err, user) => {
        expect(err).to.be.null;
        expect(user).to.be.an('object');
        expect(user).to.have.property('username', 'testuser');
        done();
      });
    });
  });

  after((done) => {
    mongoose.connection.db.dropDatabase(() => {
      mongoose.connection.close(done);
    });
  });
});
