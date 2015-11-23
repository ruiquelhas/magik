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
Get the list of file types that match the buffer signature. If the input is not a buffer or the buffer signature is invalid, it results in an error.

#### Examples

```js
const Magik = require('magik');

const png = new Buffer([0x89, 0x50]);
Magik.guess(png, (err, types) => {
  console.log(types); // ['png']
});

const unknown = new Buffer([0x00, 0x00]);
Magik.guess(unknown, (err, types) => {
  console.log(types); // []
});

const input = {};
Magik.guess(input, (err, types) => {
  console.log(err); // [Error: invalid input type]
});

const invalid = new Buffer([0xFF]);
Magik.guess(invalid, (err, types) => {
  console.log(err); // [Error: invalid file signature]
});
```

## Supported File Types
Currently, the following file types are supported:

* `gz`, `gzip`
* `pdf`
* `asf`, `wma`, `wmv`
* `mp4`, `mpeg4`
* `7z`
* `bz`, `bz2`, `bzip`
* `bmp`
* `iso`
* `aif`, `aifc`, `aiff`, `iff`, `snd`
* `gif`
* `mp3`, `mpeg1`, `mpeg2`
* `tif`, `tiff`
* `oga`, `ogg`, `ogv`
* `pkzip`, `zip`
* `avi`, `wav`
* `flac`
* `3g2`, `3gp`
* `tar`
* `dmg`
* `png`
* `doc`, `xls`, `ppt`
* `jpg`, `jpeg`

[coveralls-img]: https://coveralls.io/repos/ruiquelhas/magik/badge.svg
[coveralls-url]: https://coveralls.io/github/ruiquelhas/magik
[david-img]: https://david-dm.org/ruiquelhas/magik.svg
[david-url]: https://david-dm.org/ruiquelhas/magik
[fury-img]: https://badge.fury.io/js/magik.svg
[fury-url]: https://badge.fury.io/js/magik
[travis-img]: https://travis-ci.org/ruiquelhas/magik.svg
[travis-url]: https://travis-ci.org/ruiquelhas/magik
