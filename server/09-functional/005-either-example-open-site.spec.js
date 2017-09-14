/*eslint no-shadow: "off"*/
import {fromNullable} from './functional-types';

describe('either example collection', () => {
  describe('open site', () => {
    let currentUser;
    const showLogin = () => 'showLogin()';
    const renderPage = (currentUser) => `renderPage(${currentUser})`;

    describe('imperative', () => {
      const openSite = () => {
        if (currentUser) return renderPage(currentUser);
        else return showLogin();
      };

      it('has user', () => {
        currentUser = 'wil';
        openSite().should.equal('renderPage(wil)');
      });

      it('does not have a user', () => {
        currentUser = null;
        openSite().should.equal('showLogin()');
      });
    });

    describe('functional', () => {
      const openSite = () =>
        fromNullable(currentUser)
        .fold(showLogin, renderPage);

      it('has user', () => {
        currentUser = 'wil';
        openSite().should.equal('renderPage(wil)');
      });

      it('does not have a user', () => {
        currentUser = null;
        openSite().should.equal('showLogin()');
      });
    });
  });
});
