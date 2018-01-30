# GifTastic
A Front-End Giphy Clone for searching for your favorite Gifs!

**Live Demo**: https://lets-get-giftasticyl.herokuapp.com/

<img src="assets/images/screenshot.png" alt="GifTastic Screenshot" align="center" />

Table of Contents
-------

- [Getting Started](#getting-started)
- [Technologies](#technologies)
- [Obtaining API Keys](#obtaining-api-keys)
- [Project Structure](#project-structure)
- [Support](#support)
- [Contributing](#contributing)
- [License](#license)

Getting Started
---------------

The easiest way to get started is to clone the repository:

```bash
# Get the latest snapshot
git clone --depth=1 https://github.com/wrainaud/GifTastic.git myproject

# Change directory
cd myproject

# Create your `Config.js` for your API Keys
touch config.js

```
Technologies
-------

- HTML5
- CSS3
    - Bootstrap
- Javascript
- jQuery
- AJAX
- APIs
    - Giphy API

Obtaining API Keys
-------
<img src="https://cdn-images-1.medium.com/max/979/1*cHv3GloBXiaWQ1Y8TVW7Ew.png" width="200">

- Visit <a href="https://developers.giphy.com/" target="_blank">Giphy Developers</a>
- Sign up for an account <a href="https://giphy.com/join" target="_blank"> Here </a>
- After you've logged in click the `Create an App` button and enter your App Name and Description into the fields provided. 
- Once you have your API Key, add this line to the `config.js` file: `GIPHY_API_Key: '{API KEY GOES HERE}'`
<hr>

Project Structure
-------
```
|-- assets/
|  |-- css/
|     |-- style.css                  // Local CSS Styles
|  |-- images/                             
|  |-- js/                             
|     |-- jayess.js                 // Methods for getting and setting the weather from Giphy API
| 
| -- index.html                     // Main HTML page with structure
```

Support
-------

Please [open an issue](https://github.com/wrainaud/GifTastic/issues/new) for support.

Contributing
-------

Please contribute using [Github Flow](https://guides.github.com/introduction/flow/). Create a branch, add commits, and [open a pull request](https://github.com/wrainaud/GifTastic/compare/).

License
-------

The MIT License (MIT)

Copyright (c) 2017-2018 William J. Rainaud

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.  

