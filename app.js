document.getElementById('case-plus').addEventListener('click' , function(){
  const caseInput = document.getElementById('case-number');
  const caseInputText = caseInput.value;
  const caseNumber = parseInt(caseInputText)
 caseInput.value = caseNumber + 1;
})