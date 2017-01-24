/*eslint no-shadow: "off"*/
/*eslint no-unused-vars: "off"*/
/*eslint eqeqeq: "off"*/
import fs from 'fs';

const Right = x =>
({
  chain: f => f(x),
  map: f => Right(f(x)),
  fold: (l, r) => r(x),
  inspect: () => `Right(${x})`
});

const Left = x =>
({
  chain: f => Left(x),
  map: f => Left(x),
  fold: (l, r) => l(x),
  inspect: () => `Left(${x})`
});

const fromNullable = x =>
    x != null ? Right(x) : Left(null);

const tryCatch = f => {
  try {
    return Right( f() );
  } catch (e) {
    return Left(e);
  }
};

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
