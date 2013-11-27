node-pastebin
=============

A simple lib to post to pastebin

installation
=============

`npm install pastebin`

usage
=============

```
var pastebin = require('./src/pastebin')('DEVKEY');
pastebin.new({title: 'test', content: 'kikou42'}, function (err, ret) {
        if (err)
            console.log(err);
        else
            console.log(ret);
    });
```

You need at least indicate a `content` and you can add:

`title` Title of you content

`privacy` public = 0, unlisted = 1, private = 2

`expire`

    N = Never
    10M = 10 Minutes
    1H = 1 Hour
    1D = 1 Day
    1W = 1 Week
    2W = 2 Weeks
    1M = 1 Month

Test.
=============

`npm test`

## License

The MIT License (MIT)

Copyright (c) 2013 Niels Freier

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.


[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/stumpyfr/node-pastebin/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

