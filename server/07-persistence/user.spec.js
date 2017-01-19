/*eslint no-underscore-dangle: "off"*/
/*eslint no-undefined: "off"*/

import {connection} from '../../test-helper-mongo';
import {User} from './user';
import R from 'ramda';

const {prop, compose} = R;

const shouldResolveToNull = () => User.findOne({name: 'Joe'})
    .should.finally.equal(null);

const shouldResolveToWil = () => User.find()
    .then(users => users[0].name.should.equal('wil'));

describe('mongoDB schema', () => {

  it('has working spec infrastructure', () => {
    true.should.be.true();
  });

  it('has a live connection', () => {
    connection.readyState.should.equal(1);
  });

  describe('can create', () => {
    it('user Joe', () => {
      const joe = new User({name: 'Joe'});
      joe.isNew.should.be.true();
      return joe.save().should.eventually.equal(joe);
    });
  });

  describe('can read (find)', () => {
    let joe;

    beforeEach(() => {
      joe = new User({name: 'Joe'});
      return joe.save().should.finally.equal(joe);
    });

    it('Joe via Model.find() ', () => {
       return User.find()
           .then(users => users[0]._id.toString().should.equal(
               joe._id.toString()));
    });
  });


  describe('can update', () => {
    let joe;

    beforeEach( () => {
      joe = new User({name: 'Joe', likes: 0});
      return joe.save().should.finally.equal(joe);
    });

    it('Joe via instance.set() and instance.save()', () => {
      joe.set({name: 'wil'});
      return joe.save().then(shouldResolveToWil);
    });

    it('Joe via instance.update()', () => {
      return joe.update({name: 'wil'}).then(shouldResolveToWil);
    });

    it('Joe via model.update()', () => {
      return User.update({name: 'Joe'}, {name: 'wil'}).then(shouldResolveToWil);
    });

    it('Joe via model.findOneAndUpdate()', () => {
      return User.findOneAndUpdate({name: 'Joe'}, {name: 'wil'}).then(shouldResolveToWil);
    });

    it('Joe via model.findByIdAndUpdate()', () => {
      return User.findOneAndUpdate(joe._id, {name: 'wil'}).then(shouldResolveToWil);
    });

    it('Joe via model.update($inc)', () => {
      return User.update({name: 'Joe'}, {$inc: {likes: 10}})
          .then( () => User.findOne({name: 'Joe'}))
          .then((user) => user.likes.should.equal(10));
    });
  });

  describe('can delete (remove)', () => {
    let joe;

    beforeEach( () => {
      joe = new User({name: 'Joe'});
      return joe.save().should.finally.equal(joe);
    });

    it('Joe via instance.remove()', () => {
      return joe.remove().then(shouldResolveToNull);
    });

    it('Joe via Model.remove()', () => {
      return User.remove({name: 'Joe'}).then(shouldResolveToNull);
    });

    it('Joe via Model.findOneAndRemove()', () => {
      return User.findOneAndRemove({name: 'Joe'}).then(shouldResolveToNull);
    });

    it('Joe via Model.findByIdAndRemove()', () => {
      return User.findByIdAndRemove({_id: joe._id}).then(shouldResolveToNull);
    });
  });

  describe('can validate', () => {
    const extractMessageFrom = compose(
        prop('message'), prop('name'), prop('errors'));

    it('required fields', () => {
      const user = new User({name: undefined});
      extractMessageFrom(user.validateSync(null)).should.equal('Name is required.');
      extractMessageFrom(user.validateSync('name')).should.equal('Name is required.');
    });

    it('field lengths', () => {
      const user = new User({name: '1'});

      extractMessageFrom(user.validateSync(null)).should.equal(
          'Name must be longer than 2.');

      extractMessageFrom(user.validateSync('name')).should.equal(
          'Name must be longer than 2.');
    });

    it('and prevent invalid record insert', () => {
      const user = new User({name: undefined});

      return user.save().catch( validation => extractMessageFrom(validation)
          .should.equal('Name is required.'));
    });
  });

  describe('can manage sub documents:', () => {
    it('create', () => {
      const joe = new User({
        name: 'Joe',
        posts: [{title: 'post-title'}]
      });

      joe.isNew.should.be.true();
      return joe.save()
          .then(() => User.findOne({name: 'Joe'}))
          .then(user => user.posts[0].title.should.equal('post-title'));
    });

    it('remove', () => {
      const joe = new User({
        name: 'Joe',
        posts: [{title: 'post-title'}]
      });

      joe.isNew.should.be.true();
      return joe.save()
          .then(() => User.findOne({name: 'Joe'}))
          .then(user => {
            user.posts[0].remove();
            return user.save();
          })
          .then(() => User.findOne({name: 'Joe'}))
          .then(user => user.posts.length.should.equal(0));
    });

    it('add', () => {
      const joe = new User({
        name: 'Joe',
        posts: []
      });

      joe.isNew.should.be.true();
      return joe.save()
          .then(() => User.findOne({name: 'Joe'}))
          .then(user => {
            user.posts.push({title: 'post-title'});
            return user.save();
          })
          .then(() => User.findOne({name: 'Joe'}))
          .then(user => user.posts[0].title.should.equal('post-title'));
    });
  });

  describe('can expose derived virtual properties like:', () => {
    it('postCount', () => {
      const joe = new User({
        name: 'Joe',
        posts: [{title: 'post-title'}]
      });

      joe.isNew.should.be.true();
      return joe.save()
          .then(() => User.findOne({name: 'Joe'}))
          .then(() => joe.postCount.should.equal(1));
    });
  });
});
