'use strict';

const fs = require('fs');
const path = require('path');

const source = path.join(__dirname, '..', 'signatures.json');

console.warn('This package is deprecated and not actively developed anymore. You can use `file-type` (https://github.com/sindresorhus/file-type) as an alternative.');

exports.guess = function (buffer, callback) {

    if (!(buffer instanceof Buffer)) {
        return callback(new Error('invalid input type'));
    }

    if (buffer.length < 2) {
        return callback(new Error('invalid file signature'));
    }

    fs.readFile(source, 'utf8', (err, data) => {

        if (err) {
            return callback(err);
        }

        const signature = buffer.slice(0, 2).toString('hex');
        const types = JSON.parse(data)[signature] || [];

        return callback(null, types);
    });
};
