$(document).ready(function() {
  if (window.File && window.FileReader && window.FileList && window.Blob) {
      // Great success! All the File APIs are supported.
      document.getElementById('file').addEventListener('change', handleFiles, false); // Añade un punto de escucha que invocará a la función handleFiles cuando se produzca un cambio en el campo de subida de ficheros
  } else {
      alert('The File APIs are not fully supported in this browser.');
  }
});
async function handleFiles(e) {
  if (e.target.files[0].type !== 'text/plain') {
    alert ("Formato no válido");
  } else {
    var txtArr = [];
    var fr = new FileReader();
    fr.onload = function() {
      // By lines
      var lines = String(this.result).split('\n');
      txtArr = [...lines];
    }

    fr.readAsText(file.files[0]);
  }

  document.getElementById("calcular").addEventListener("click", (_) => {
    calculate(txtArr);
  });

}

function calculate(txtArr) {
  let allTerms = [];
  let termsPerDoc = [];
  let processedText = [];
  for (let i = 0; i < txtArr.length; i++) {
    processedText.push(txtArr[i].replace(/\.|,/g, ""));
    termsPerDoc.push(processedText[i].split(' '));
  }
  
  for (let i = 0; i < termsPerDoc.length; i++) {
    for (let j = 0; j < termsPerDoc[i].length; j++) {
      if ((allTerms.indexOf(termsPerDoc[i][j]) == -1) && (termsPerDoc[i][j] !== "")) {
        allTerms.push(termsPerDoc[i][j].toLowerCase());
      }
    }      
  }
  console.log(allTerms);
}