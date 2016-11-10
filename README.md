## Canvas Game Template

__What's this for?__

Use this template to get started building games (or anything really) using
the canvas. It uses gulp with Sass, Webpack and http-server, so you can
worry less about building it and more about coding it.

__Pre-requirements:__  

Node.js with NPM.  
An enthusiasm to create.

__Usage:__

`npm install -g gulp` - Install Gulp.  
`npm install` - Install other dependencies.  
`npm run build` - Package js, concatenate library js files, compress js,
compile Sass, and copy files to dist folder.  
`npm run server` - Run the test server, serving files under the `dist/`
directory to `http://127.0.0.1:3000`.  
`npm run watch` - Watches file changes. For files under `src/js/`, it will
run js tasks. For files under `src/sass` is will compile to css. For any
other file, it will copy the file to the relative path in the `dist/` directory
so it can be used on the test server.

Now that you've learned the basics, you can head over can head over to
[HTML5GameEngine.com](https://html5gameengine.com/) to find a nice game
library/engine to use.

Once you're done creating, your `/dist/` directory should be all you need
to copy to your web server.

---

This is by no means complete so suggestions and pull requests are welcome.
