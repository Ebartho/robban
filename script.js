let wrapper = $("#wrapper")
let husplustext = $("#husplustext")
let husinfo1 = $("#husinfo1")
let husinfo2 = $("#husinfo2")
let husinfo3 = $("#husinfo3")

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
    husinfo1.show();
    husinfo1.css('position', 'absolute')
    husinfo1.css('top', '500px')
    husinfo1.css('left', '500px')
    console.log("Klick 1 fungerar")
});
$("#hus2").on("click", function () {
    husinfo2.show();
    husinfo2.css('position', 'absolute')
    husinfo2.css('position', 'absolute')
    console.log("Klick 2 fungerar")
});
$("#hus3").on("click", function () {
    husinfo3.show();
    husinfo3.css('position', 'absolute')
    husinfo3.css('position', 'absolute')
    console.log("Klick 3 fungerar")
});

