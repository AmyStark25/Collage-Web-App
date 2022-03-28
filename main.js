var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start() {
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}

recognition.onresult = function(event) {
    console.log(event);
    var content = event.results[0][0].transcript;
    console.log(content);
    document.getElementById("textbox").innerHTML = content;
}

Webcam.set({
    height : 250,
    width : 360,
    image_format:'png',
    png_quality:90
});

camera = document.getElementById("camera");


setTimeout(function(){
    img_id = "selfie1";
    takeSnapshot();
    var synth = window.speechSynthesis;
    speak_data = "Taking your next selfie in five seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
}, 5000);

setTimeout(function(){
    img_id = "selfie2";
    takeSnapshot();
    var synth = window.speechSynthesis;
    speak_data = "Taking your next selfie in five seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);

}, 1000);

setTimeout(function(){
    img_id = "selfie3";
    takeSnapshot();
    var synth = window.speechSynthesis;
    speak_data = "Taking your next selfie in five seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
}, 10000);

function takeSnapshot(){

    console.log(img_id);

    Webcam.snap(function(data_uri){
        if(img_id=="selfie1"){
            document.getElementById("result1").innerHTML='<img id="selfie1 src="'+data_uri+'">';
        }
        if(img_id=="selfie2"){
            document.getElementById("result2").innerHTML='<img id="selfie2 src="'+data_uri+'">';
        }
        if(img_id=="selfie3"){
            document.getElementById("result3").innerHTML='<img id="selfie3 src="'+data_uri+'">';
        }
        
    });
}

function save(){
    link = document.getElementById("link");
    image = document.getElementById("selfie_image").src;
    link.href = image;
    link.click();
}
