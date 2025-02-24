define(['handlebars'], function(Handlebars) {

this["JST"] = this["JST"] || {};

Handlebars.registerPartial("partial", Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<span>Canada</span>";
},"useData":true}));

this["JST"]["test/fixtures/one.hbs"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "<p>Hello, my name is "
    + container.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext||{}),{"name":"name","hash":{},"data":data}) : helper)))
    + ". I live in "
    + ((stack1 = container.invokePartial(partials.partial,depth0,{"name":"partial","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</p>";
},"usePartial":true,"useData":true});

return this["JST"];

});
