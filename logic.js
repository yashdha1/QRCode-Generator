const url = document.querySelector(".url");
const generate = document.querySelector(".generate");
const downloadBtn = document.querySelector(".download");
let size = document.querySelector("#sizes");
const imgBox = document.querySelector(".qrImg");
 
generate.addEventListener("click", (evt) => {
  evt.preventDefault();
  if (url.value !== "") {
    generateQr(url.value, size.value);
  } else {
    alert("Please enter the URL in URL box!");
  }
});

// downloadBtn.addEventListener('click', () => {
//   let img = document.querySelector('.qrImg img');
//   let canvas = document.querySelector('.qrImg canvas');

//   console.log(img) ; 
//   console.log(canvas) ; 

//   if (img !== null) {
//     let imgAtrr = img.getAttribute('src');
//     downloadBtn.setAttribute("href", imgAtrr);
//   } else{
//     downloadBtn.setAttribute("href", canvas.toDataURL());
//   }
// });


const generateQr = (url, size) => {
  imgBox.innerHTML = ""; // Clear previous QR code
  var qrcodeX = new QRCode(imgBox, {
    text: url,
    height: size,
    width: size,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H,
  });
};


downloadBtn.addEventListener('click', () => {
  const img = document.querySelector('.qrImg img');
  if (img) {
    const imgSrc = img.getAttribute('src');
    downloadImage(imgSrc);
  } else {
    alert("No image found to download.");
  }
});

function downloadImage(imgSrc) {
  const link = document.createElement('a');
  link.href = imgSrc;
  link.download = 'qr_code.png'; // Set desired filename
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

