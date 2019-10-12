
# odict - object dictionary

Bunch of helper functions for working with objects as dictionaries.

*These methods work on all enumerable properties, including inherited.*

## Import

Import all functions into `odict` namespace:

``` lang-js
import * as odict from "odict";
```

Or import only needed functions:

``` lang-js
import {isDict, isEmpty, reduce, map, iterable} from "odict";
```

## Usage

For example object like this:

``` lang-js
const people = {
  "a": "Igor",
  "b": "Mike",
  "c": "Luke"
};
```

### isDict

Check if value is dictionary:

``` lang-js
isDict(people); // true
isDict([1, 2]); // false
```

### isEmpty

Check dictionary for emptiness:

``` lang-js
isEmpty(people); // false
isEmpty({    }); // true
```

### reduce

Reduce dictionary, which works very much like [Array.prototype.reduce()][1]:

``` lang-js
const reducer = (acc, value, key) => (acc.push(`${key} - ${value}`), acc);
reduce(people, reducer, []); // ["a - Igor", "b - Mike", "c - Luke"]
```

### map

Map dictionary, which works very much like [Array.prototype.map()][2]:

``` lang-js
const mapper = (value, key) => `${key} - ${value}`;
map(people, mapper); // ["a - Igor", "b - Mike", "c - Luke"]
```

### iterable

Create generator:

``` lang-js
for (const [key, value] of iterable(people)) console.log(`${key} - ${value}`);
// Outputs: a - Igor\b - Mike\c - Luke
```


  [1]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
  [2]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
