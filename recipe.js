$(function() {
    $.getJSON("recipe.json", function(recipe) {
        $("body").append(
            $("<div>")
                .append($("<h1>").text(recipe.title))

                .append($("<h2>").text("Ingredients"))
                .append((function(){

                    var ingredients = $("<ul>");
                    recipe.ingredients.forEach(function(i){
                        ingredients.append($("<li>").text( i.quantity + " of " + i.thing ));
                    });
                    return ingredients;

                })())

                .append($("<h2>").text("Steps"))
                .append((function(){

                    var steps = $("<ol>");

                    recipe.steps.forEach(function(i){
                        steps.append($("<li>").text(i));
                    });
                    return steps;

                })())
        );
    });
});