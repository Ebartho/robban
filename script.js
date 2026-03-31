let wrapper = $("#wrapper")
let husplustext = $("#husplustext")
let husinfo1 = $("#husinfo1")
let husinfo2 = $("#husinfo2")
let husinfo3 = $("#husinfo3")
let graybackground = $("#graybackground")
let husinfo1Open = false
let husinfo2Open = false
let husinfo3Open = false

husinfo1.hide()
husinfo2.hide()
husinfo3.hide()
graybackground.hide()
graybackground.css('z-index', '0')
husinfo1.css('position', 'absolute')
husinfo1.css('left', '500px')
husinfo1.css('bottom', '100px')
husinfo2.css('position', 'absolute')
husinfo2.css('left', '500px')
husinfo2.css('bottom', '100px')
husinfo3.css('position', 'absolute')
husinfo3.css('left', '500px')
husinfo3.css('bottom', '100px')
wrapper.css('height', '100vh');
wrapper.css('grid-template-areas', 'rubrik husbild info')
wrapper.css('grid-template-rows', '15% 75% 0% 10%')
if($( document ).width() <= '1200'){
    wrapper.css('height', '250vh')
    graybackground.css('height', '250vh')
    wrapper.css('grid-template-rows', '10% 80% 0% 10%')
    $("#huswrapper").css('flex-direction', 'column')
    $("#huswrapper").css('justify-content', 'center')
    $("#huswrapper").css('align-items', 'center')
    $("#huswrapper").css('margin-bottom', '0px')
    $("#rubrik").css('width', '80%')
    husinfo1.css('width', '80%')
    husinfo1.css('height', '65%')
    husinfo2.css('width', '80%')
    husinfo2.css('height', '65%')
    husinfo3.css('width', '80%')
    husinfo3.css('height', '65%')
    $('.storbild').css('width', '100%')
    husinfo1.css('left', '10%')
    husinfo1.css('bottom', '20%')
    husinfo2.css('left', '10%')
    husinfo2.css('top', '80%')
    husinfo3.css('left', '10%')
    husinfo3.css('top', '140%')


}
$("#closeKnapp1").on("click", function (){
    if(husinfo1Open){
        husinfo1.hide()
        husinfo1Open = false
        graybackground.hide()
    } 
});
$("#closeKnapp2").on("click", function (){
    if(husinfo2Open){
        husinfo2.hide()
        husinfo2Open = false
        graybackground.hide()
    } 
});
$("#closeKnapp3").on("click", function (){
    if(husinfo3Open){
        husinfo3.hide()
        husinfo3Open = false
        graybackground.hide()
    } 
});
$("#hus1").on("click", function () {
    husinfo2.hide()
    husinfo3.hide()

    graybackground.show()
    husinfo1.show();
    console.log("Klick 1 fungerar")
    husinfo1Open = true
});
$("#hus2").on("click", function () {
    husinfo1.hide()
    husinfo3.hide()
    husinfo2Open = true

    graybackground.show()
    husinfo2.show();
    console.log("Klick 2 fungerar")
});
$("#hus3").on("click", function () {
    husinfo1.hide()
    husinfo2.hide()
    husinfo3Open = true

    graybackground.show()
    husinfo3.show();
    console.log("Klick 3 fungerar")
});


