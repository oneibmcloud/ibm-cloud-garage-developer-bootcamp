import {Right, Left} from './functional-types';
/*eslint no-shadow: "off"*/

describe('either example collection', () => {
  describe('get preferences', () => {
    const user = {premium: null, preferences: 'the user preferences'};
    const loadPrefs = preferences => `loadPrefs(${preferences})`;
    const defaultPrefs = {prefs: 'default prefs'};

    describe('imperative', () => {
      const getPrefs = user => {
        if (user.premium) return loadPrefs(user.preferences);
        else return defaultPrefs;
      };

      it('user is premium', () => {
        user.premium = 'premium';
        getPrefs(user).should.deepEqual('loadPrefs(the user preferences)');
      });

      it('does not have a user', () => {
        user.premium = null;
        getPrefs(user).should.deepEqual({prefs: 'default prefs'});
      });
    });

    describe('functional', () => {
      const getPrefs = user =>
      (user.premium ? Right(user) : Left('not premium'))
      .map(u => u.preferences)
      .fold(() => defaultPrefs, p => loadPrefs(p));

      it('user is premium', () => {
        user.premium = 'premium';
        getPrefs(user).should.deepEqual('loadPrefs(the user preferences)');
      });

      it('does not have a user', () => {
        user.premium = null;
        getPrefs(user).should.deepEqual({prefs: 'default prefs'});
      });
    });
  });

});
