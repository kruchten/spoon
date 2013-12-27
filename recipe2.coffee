$ ->
    $.getJSON "recipe.json", (recipe) ->
        $("body").append [

            $("<h1>").text(recipe.title)

            $("<h2>").text("Ingredients")
            $("<ul>").append do -> 
                for i in recipe.ingredients
                    $("<li>").text(i.quantity + " of " + i.thing) 

            $("<h2>").text("Steps")
            $("<ul>").append do -> 
                for i in recipe.steps
                    $("<li>").text(i)
                    
        ]