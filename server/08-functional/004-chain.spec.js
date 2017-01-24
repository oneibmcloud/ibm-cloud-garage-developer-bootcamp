/*eslint no-shadow: "off"*/
/*eslint no-unused-vars: "off"*/

import {Right, Left, tryCatch} from './functional-types';
import fs from 'fs';

describe('composable error handling', () => {
  it('getPort', () => {
    const getPort = () =>
      tryCatch(() => fs.readFileSync('server/08-functional/config.json'))
      .chain(c => tryCatch(() => JSON.parse(c)))
      .fold(e => 3000, c => c.port);

    getPort().should.equal(8888);
  });

  it('getPort with error', () => {
    const getPort = () =>
      tryCatch(() => fs.readFileSync('server/08-functional/config-error.json'))
      .chain(c => tryCatch(() => JSON.parse(c)))
      .fold(e => 3000, c => c.port);

    getPort().should.equal(3000);
  });
});
