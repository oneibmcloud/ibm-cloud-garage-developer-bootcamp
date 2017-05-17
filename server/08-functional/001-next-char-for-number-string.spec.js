describe('next char for number string', () => {
  it('verbose', () => {
    const nextCharForNumberString = str => {
      const trimmed = str.trim();
      const number = parseInt(trimmed);
      const nextNumber = number + 1;
      return String.fromCharCode(nextNumber);
    };

    console.log(nextCharForNumberString(' 64 '));
    nextCharForNumberString(' 64 ').should.equal('A');
  });

  it('inline', () => {
    const nextCharForNumberString = str => {
      return String.fromCharCode(parseInt(str.trim()) + 1);
    };

    console.log(nextCharForNumberString(' 64 '));
    nextCharForNumberString(' 64 ').should.equal('A');
  });

  it('functional', () => {
    const nextCharForNumberString = str =>
    [str]
    .map(s => s.trim())
    .map(s => parseInt(s))
    .map(i => i + 1)
    .map(i => String.fromCharCode(i));

    console.log(nextCharForNumberString(' 64 '));
    nextCharForNumberString(' 64 ').should.deepEqual(['A']);
  });

  it('box', () => {
    const Box = x =>
    ({
      map: f => Box(f(x)),
      inspect: () => `Box(${x})`
    });

    const nextCharForNumberString = str =>
    Box(str)
    .map(s => s.trim())
    .map(s => Number(s))
    .map(i => i + 1)
    .map(i => String.fromCharCode(i));

    console.log(nextCharForNumberString(' 64 ').inspect());
    nextCharForNumberString(' 64 ').inspect().should.deepEqual('Box(A)');
  });

  it('fold', () => {
    const Box = x =>
        ({
          map: f => Box(f(x)),
          fold: f => f(x),
          inspect: () => `Box(${x})`
        });

    const nextCharForNumberString = str =>
        Box(str)
            .map(s => s.trim())
            .map(s => Number(s))
            .map(i => i + 1)
            .fold(i => String.fromCharCode(i));

    nextCharForNumberString(' 64 ').should.equal('A');
  });
});
