# magik
File signature utilities.

[![NPM Version][fury-img]][fury-url] [![Build Status][travis-img]][travis-url] [![Coverage Status][coveralls-img]][coveralls-url] [![Dependencies][david-img]][david-url]

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
    - [`guess(buffer, fn)`](#guessbuffer-fn)
- [Supported File Types](#supported-file-types)

## Installation
Install via [NPM](https://www.npmjs.org).

```sh
$ npm install magik
```

## Usage

### `guess(buffer, fn)`
Get the list of file types that match the buffer signature. If the input is not a `Buffer` or the buffer signature is invalid, it results in an error.

#### Examples

```js
const Magik = require('magik');

Magik.guess(new Buffer([0x89, 0x50]), (err, types) => {

    console.log(types); // ['png']
});

Magik.guess(new Buffer([0x00, 0x00]), (err, types) => {

    console.log(types); // []
});

Magik.guess({}, (err, types) => {

    console.log(err); // [Error: invalid input type]
});

Magik.guess(new Buffer([0xFF]), (err, types) => {

    console.log(err); // [Error: invalid file signature]
});
```

## Supported File Types

Currently, the following file types are supported:

Category | Type
-------- | ----------
Audio/Video | `3g2`, `3gp`, `aif`, `aifc`, `aiff`, `asf`, `avi`, `flac`, `iff`, `mp3`, `mp4`, `mpeg1`, `mpeg2`, `mpeg4`, `oga`, `ogg`, `ogv`, `snd`, `wav`, `wma`, `wmv`
Compression | `7z`, `bz`, `bz2`, `bzip`, `gz`, `gzip`, `pkzip`, `tar`, `zip`
Documents | `doc`, `pdf`, `ppt`, `xls`
Images | `bmp`, `gif`, `jpg`, `jpeg`, `png`, `tif`, `tiff`
Miscellaneous | `dmg`, `iso`

[coveralls-img]: https://coveralls.io/repos/ruiquelhas/magik/badge.svg
[coveralls-url]: https://coveralls.io/github/ruiquelhas/magik
[david-img]: https://david-dm.org/ruiquelhas/magik.svg
[david-url]: https://david-dm.org/ruiquelhas/magik
[fury-img]: https://badge.fury.io/js/magik.svg
[fury-url]: https://badge.fury.io/js/magik
[travis-img]: https://travis-ci.org/ruiquelhas/magik.svg
[travis-url]: https://travis-ci.org/ruiquelhas/magik
