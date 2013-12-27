$(function() {
    $.getJSON("recipe.json", function(recipe) {
        $("body").append(
            $("<h1>").text(recipe.title),
            $("<h2>").text("Ingredients"),
            $("<ul>").append(
                $.map(recipe.ingredients, function(i){ 
                    return $("<li>").text( i.quantity + " of " + i.thing ); 
                })
            ),
            $("<h2>").text("Steps"),
            $("<ul>").append(
                $.map(recipe.steps, function(i){
                    return $("<li>").text(i); 
                })
            )
        );
    });
});
