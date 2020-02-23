// // Check off specific todos by clicking
    $("ul").on("click", "li", function(){
        $(this).toggleClass("completed");
    });

// Click on X to remove li
    $("ul").on("click", "span", function(e){
        $(this).parent().fadeOut(500, function(){
            $(this).remove();
        });
        event.stopPropagation();
    });

// Add listener to text form
    $("input[type='text']").keypress(function(event){
        if(event.which === 13){
            // grabbing new todo text from input
            var todoText = $(this).val();
            $(this).val("");
            // create a new li and add to ul
            $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span>" + todoText + "</li>");
            $("input[type='text']").css("border-radius", "0");
        }
    });

// Add listener to plus button
    $(".fa-plus").click(function (e) { 
        $("input[type='text']").fadeToggle(500);
        e.preventDefault();
    });