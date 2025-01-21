let imgBox = document.getElementById("imgBox");
let imgGen = document.getElementById("imgGen");
let qrText = document.getElementById("qrText");
let downloadBtn = document.getElementById("downloadBtn");

function genrate(){
    if(qrText.value.length>0){
        imgGen.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
        imgGen.onload = function () {
            downloadBtn.style.display = 'block';
        };
        imgBox.classList.add("showimg");
        downloadBtn.onclick = function () {
            downloadQRCode(imgGen.src, 'QRCode.png');
        };
    }
    else{
        qrText.classList.add("error");
        setTimeout(()=>{
            qrText.classList.remove("error")
        },1000);
    }
  
}
function downloadQRCode(url, filename) {
    let a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}