function run(){

    let HtmlCode = document.getElementById("HTML_code").value;
    let CssCode = document.getElementById("CSS_code").value;
    let JsCode = document.getElementById("JS_code").value;
    let Output = document.getElementById("output");
 
    Output.contentDocument.body.innerHTML = HtmlCode + "<style>" + CssCode + "</style>";
    Output.contentWindow.eval(JsCode);
}

function speak(){
    var msg = "This Button is disabled You ASSHOLE";
    let utterancy = new SpeechSynthesisUtterance(msg);
    msg.volume = 1;
    msg.rate = 1;
    msg.pitch = 2;
    speechSynthesis.speak(utterancy);
}
