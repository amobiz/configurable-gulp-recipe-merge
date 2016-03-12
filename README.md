# gulp-ccr-merge

Merge multiple streams into one interleaved stream. A cascading configurable gulp recipe for [gulp-chef](https://github.com/gulp-cookery/gulp-chef).

## Install

``` bash
$ npm install --save-dev gulp-chef gulp-ccr-merge
```

## Recipe

Async Streams (from [gulp-cheatsheet](https://github.com/osscafe/gulp-cheatsheet) p.2)

## Ingredients

* [merge-stream](https://github.com/grncdr/merge-stream)

## Type

[Stream Processor](https://github.com/gulp-cookery/gulp-chef#writing-stream-processor)

## Usage

``` javascript
var gulp = require('gulp');
var chef = require('gulp-chef');

var meals = chef({
    'async-streams': {
        src: 'css/',
        dest: 'css/',
        merge: {
            '.less': {
                plugin: 'gulp-less',
                src: 'first.less'
            },
            '.autoprefixer': {
                plugin: 'gulp-autoprefixer',
                src: 'second.css'
            }
        }
    },
});

gulp.registry(meals);
```

## License
[MIT](https://opensource.org/licenses/MIT)

## Author
[Amobiz](https://github.com/amobiz)
