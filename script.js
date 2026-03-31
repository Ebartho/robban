let wrapper = $("#wrapper")
let husplustext = $("#husplustext")
let husinfo1 = $("#husinfo1")
let husinfo2 = $("#husinfo2")
let husinfo3 = $("#husinfo3")
let greybackground = $("#graybackground")
let husinfo1Open = false
let husinfo2Open = false
let husinfo3Open = false

husinfo1.hide()
husinfo2.hide()
husinfo3.hide()

wrapper.css('height', '100vh');
wrapper.css('grid-template-areas', 'rubrik husbild info')
wrapper.css('grid-template-rows', '15% 75% 0% 10%')
if($( document ).width() <= '1200'){
    wrapper.css('height', '220vh')
    wrapper.css('grid-template-rows', '10% 80% 0% 10%')
    $("#huswrapper").css('flex-direction', 'column')
    $("#huswrapper").css('justify-content', 'center')
    $("#huswrapper").css('align-items', 'center')
    $("#huswrapper").css('margin-bottom', '0px')
    $("#rubrik").css('width', '80%')

}
$("#closeKnapp1").on("click", function (){
    if(husinfo1Open){
        husinfo1.hide()
        husinfo1Open = false
        greybackground.hide()
    } 
});
$("#closeKnapp2").on("click", function (){
    if(husinfo2Open){
        husinfo2.hide()
        husinfo2Open = false
        greybackground.hide()
    } 
});
$("#closeKnapp3").on("click", function (){
    if(husinfo3Open){
        husinfo3.hide()
        husinfo3Open = false
        greybackground.hide()
    } 
});
$("#hus1").on("click", function () {
    husinfo2.hide()
    husinfo3.hide()

    greybackground.show()
    husinfo1.show();
    husinfo1.css('position', 'absolute')
    husinfo1.css('left', '500px')
    husinfo1.css('bottom', '50px')
    console.log("Klick 1 fungerar")
    husinfo1Open = true
});
$("#hus2").on("click", function () {
    husinfo1.hide()
    husinfo3.hide()
    husinfo2Open = true

    greybackground.show()
    husinfo2.show();
    husinfo2.css('position', 'absolute')
    husinfo2.css('left', '500px')
    husinfo2.css('bottom', '50px')
    console.log("Klick 2 fungerar")
});
$("#hus3").on("click", function () {
    husinfo1.hide()
    husinfo2.hide()
    husinfo3Open = true

    greybackground.show()
    husinfo3.show();
    husinfo3.css('position', 'absolute')
    husinfo3.css('left', '500px')
    husinfo3.css('bottom', '50px')
    console.log("Klick 3 fungerar")
});


