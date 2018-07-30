# Angular-Starter
Angular Starter with Webpack Compilation

I created this because I use Angular a lot and was tired of copying and pasting from my random projects.

Includes Angular 6, Webpack 4, and Bootstrap 4.

## Development
1. Install the packages with `npm i`
2. Start the webpack dev server with `npm run dev`
3. Access the web page at `http://localhost:9000`

### Notes
- Since I often run a backend server while developing the frontend, all `/api` endpoints are proxied to `http://localhost:8080`
- Transpiled javascript files are emitted to `lib` to keep the `src` directory clean.
- Angular routes are lazy-loaded.

## Production
1. Start the build with `npm run build`
2. Output is emitted to `bin`