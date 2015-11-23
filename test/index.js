'use strict';

const fs = require('fs');

const Lab = require('lab');
const Code = require('code');
const sinon = require('sinon');

const lab = exports.lab = Lab.script();
const Magik = require('../lib');

lab.experiment('Magik', () => {

    lab.test('returns error if the input is not a buffer', (done) => {

        const signature = {};

        Magik.guess(signature, (err, type) => {

            Code.expect(err).to.not.be.null();
            Code.expect(err).to.be.an.instanceOf(Error);
            Code.expect(err.message).to.equal('invalid input type');
            Code.expect(type).to.not.exist();
            return done();
        });
    });

    lab.test('returns error if the buffer signature is invalid', (done) => {

        const signature = new Buffer([0x00]);

        Magik.guess(signature, (err, type) => {

            Code.expect(err).to.not.be.null();
            Code.expect(err).to.be.an.instanceOf(Error);
            Code.expect(err.message).to.equal('invalid file signature');
            Code.expect(type).to.not.exist();
            return done();
        });
    });

    lab.test('returns error if the signature dictionary cannot be loaded', (done) => {

        const signature = new Buffer([0xff, 0xd8]);
        const error = new Error('foobar');

        sinon.stub(fs, 'readFile');
        fs.readFile.yieldsAsync(error);

        Magik.guess(signature, (err) => {

            Code.expect(err).to.equal(error);
            fs.readFile.restore();
            return done();
        });
    });

    lab.test('returns empty list if the buffer signature is unknown', (done) => {

        const signature = new Buffer([0x00, 0x00]);

        Magik.guess(signature, (err, type) => {

            Code.expect(err).to.be.null();
            Code.expect(type).to.be.an.array().and.to.be.empty();
            return done();
        });
    });

    lab.test('returns list of file types that match the buffer signature', (done) => {

        const signature = new Buffer([0x89, 0x50]);

        Magik.guess(signature, (err, type) => {

            Code.expect(err).to.be.null();
            Code.expect(type).to.deep.equal(['png']);
            return done();
        });
    });
});
