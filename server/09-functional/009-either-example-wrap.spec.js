/* eslint-disable no-empty */
/*eslint no-shadow: "off"*/

import fs from 'fs';
import {tryCatch, fromNullable} from './functional-types';

describe('wrap examples', () => {
  describe('imperative', () => {
    const wrapExamples = example => {
      if (example.previewPath) {
        try {
          example.preview = fs.readFileSync(example.previewPath);
        } catch (e) {}
      }
      return example;
    };

    it('wraps examples', () => {
      const example = {previewPath: 'server/08-functional/config.json'};
      (typeof wrapExamples(example).preview).should.equal('object');
    });

    it('does not wrap examples', () => {
      const example = {};
      (typeof wrapExamples(example).preview).should.equal('undefined');
    });
  });

  describe('functional', () => {
    const readFile = x => tryCatch(() => fs.readFileSync(x));

    const wrapExamples = example => (
      fromNullable(example.previewPath)
      .chain(readFile)
      .fold(() => example, x => Object.assign(example, {preview: x}))
    );

    it('wraps examples', () => {
      const example = {previewPath: 'server/08-functional/config.json'};
      (typeof wrapExamples(example).preview).should.equal('object');
    });

    it('does not wrap examples', () => {
      const example = {};
      (typeof wrapExamples(example).preview).should.equal('undefined');
    });
  });
});
