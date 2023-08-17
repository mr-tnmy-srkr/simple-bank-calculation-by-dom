function  getInputFieldValueById(inputId) {
  const inputField = document.getElementById(inputId);
  const inputFieldValueString = inputField.value;
  const inputFieldValue = parseFloat(
    parseFloat(inputFieldValueString).toFixed(2)
  );
  inputField.value = '';
  return inputFieldValue;
}

function getTextElementValueById(elementId){
    const textElement = document.getElementById(elementId);
    const textElementValueString = textElement.innerText;
  const textElementValue = parseFloat(textElementValueString);
return textElementValue;
}

function setTextElementValueById(elementId,newValue){
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;

}

document.getElementById('btn-logout').addEventListener("click", function (){
    window.location.href = 'index.html';
  });