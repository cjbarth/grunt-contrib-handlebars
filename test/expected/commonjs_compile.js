module.exports = function(Handlebars) {

this["JST"] = this["JST"] || {};

this["JST"]["test/fixtures/commonjs.html"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<section class=\"main-app\">\n    <h1>Some title</h1>\n    <p>I've been compiled with CommonJS support</p>\n</section>\n";
},"useData":true});

return this["JST"];

};
