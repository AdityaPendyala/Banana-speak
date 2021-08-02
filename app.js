var btnTrans=document.querySelector("#btn-translate");
var txtinput=document.querySelector("#txt-area");
var outputtxt=document.querySelector("#output");
function clickHandler()
{
    outputtxt.innerText="lol "+txtinput.value;
};
btnTrans.addEventListener("click", clickHandler)