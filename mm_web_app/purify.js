const purify = require("purify-css");
const content = [
  "./pages/*/*.js",
  "./components/*/*.js", 
  "./containers/*/*.js"
];
const css = ["./static/vendors/css/*.css"];

const options = {
  output: "./static/vendors/purecss/combined.min.pure.css",
  minify: true,
  info: true,
  whitelist: ["*nprogress*"]
};

purify(content, css, options);
