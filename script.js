let wrapper = $("#wrapper")

$("#husplustext" ).hide();
wrapper.css('height', '100vh')
wrapper.css('grid-template-rows', '15% 70% 15%')
wrapper.css('grid-template-areas', 'rubrik husbild info')
if($( document ).width() <= '1200'){
    wrapper.css('height', '220vh')
    wrapper.css('grid-template-rows', '10% 80% 10%')
    $("#huswrapper").css('flex-direction', 'column')
    $("#huswrapper").css('justify-content', 'center')
    $("#huswrapper").css('align-items', 'center')
    $("#huswrapper").css('margin-bottom', '0px')

}

$("#hus1").on("click", function () {
    $("#husplustext" ).show();
    $(this).css('position', 'absolute')
    $(this).css('position', 'absolute')
    console.log("Klick 1 fungerar")
});
$("#hus2").on("click", function () {
    $(this).css(
        console.log("Klick 2 fungerar")
        
    )
});
$("#hus3").on("click", function () {
    $(this).css(
        console.log("Klick 3 fungerar")
        
    )
});

