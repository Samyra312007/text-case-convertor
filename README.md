# text-case-converter

Convert text between different case styles — `camelCase`, `PascalCase`, `snake_case`, `kebab-case`, `CONSTANT_CASE`, `dot.case`, and more.


[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Install

```bash
npm install text-case-converter
```

## Usage

```js
const { convertCase, detectCase } = require('text-case-converter');

// Convert to any case
convertCase('helloWorld', 'snake');    // "hello_world"
convertCase('hello_world', 'camel');   // "helloWorld"
convertCase('hello world', 'pascal');  // "HelloWorld"
convertCase('helloWorld', 'kebab');    // "hello-world"
convertCase('hello world', 'constant');// "HELLO_WORLD"
convertCase('helloWorld', 'dot');      // "hello.world"
convertCase('HELLO_WORLD', 'lower');   // "hello world"
convertCase('hello world', 'upper');   // "HELLO WORLD"
convertCase('hello world', 'capital'); // "Hello World"

// Detect the case style of a string
detectCase('helloWorld');   // "camel"
detectCase('HelloWorld');   // "pascal"
detectCase('hello_world');  // "snake"
detectCase('hello-world');  // "kebab"
```

## API

### `convertCase(text, targetCase)`

Converts `text` to the specified `targetCase`.

| Target Case    | Example Output           |
|----------------|--------------------------|
| `camel`        | `helloWorld`             |
| `pascal`       | `HelloWorld`             |
| `snake`        | `hello_world`            |
| `kebab`        | `hello-world`            |
| `constant`     | `HELLO_WORLD`            |
| `dot`          | `hello.world`            |
| `lower`        | `hello world`            |
| `upper`        | `HELLO WORLD`            |
| `capital`      | `Hello World`            |

Throws if `text` is not a non-empty string or `targetCase` is unsupported.

### `detectCase(text)`

Detects the case style of the input. Returns one of: `camel`, `pascal`, `snake`, `kebab`, `constant`, `dot`, `lower`, `upper`, `capital`, or `unknown`.

### `splitWords(text)`

Splits a string into an array of lowercase words.

```js
splitWords('helloWorld');   // ['hello', 'world']
splitWords('hello_world');  // ['hello', 'world']
splitWords('hello-world');  // ['hello', 'world']
```

### `joinWords(words, separator, transform)`

Joins an array of words with the given separator and optional transform:

- `'lower'` (default) — all lowercase
- `'upper'` — all uppercase
- `'capitalize'` — first letter of each word uppercase

```js
joinWords(['hello', 'world'], '_', 'upper'); // "HELLO_WORLD"
```

## Supported Input Formats

The converter automatically detects and parses the following input styles:

| Input Style      | Example           |
|------------------|-------------------|
| camelCase        | `helloWorld`      |
| PascalCase       | `HelloWorld`      |
| snake_case       | `hello_world`     |
| kebab-case       | `hello-world`     |
| CONSTANT_CASE    | `HELLO_WORLD`     |
| dot.case         | `hello.world`     |
| lowercase        | `hello world`     |
| UPPERCASE        | `HELLO WORLD`     |
| Capitalized      | `Hello World`     |

## Test

```bash
npm test
```

## License

MIT
