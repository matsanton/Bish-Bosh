
// Get input elements
const elButton = document.querySelector('button');
const elLoopSize = document.getElementById('loop-size');
const elBishDivisor = document.getElementById('bish-num');
const elBoshDivisor = document.getElementById('bosh-num');

// get output elements
const elStatus = document.querySelector('#status');
const elResults = document.querySelector('#results');
const elInformation = elResults.firstElementChild;
const elResult = elResults.lastElementChild;

elButton.addEventListener('click', calculate);

function calculate() {
   elStatus.style.display = 'none';
   const txtLoopSize = elLoopSize.value.trim();
   const txtBishNum = elBishDivisor.value.trim();
   const txtBoshNum = elBoshDivisor.value.trim();

   if (txtLoopSize.length == 0 || txtBishNum.length == 0 || txtBoshNum.length == 0) {
      elStatus.textContent = 'Please enter values in all fields';
      elStatus.style.display = 'block';
      return;
   }
   const loopSize = parseInt(txtLoopSize);
   const bishNum = parseInt(txtBishNum);
   const boshNum = parseInt(txtBoshNum);
   if (isNaN(loopSize) || isNaN(bishNum) || isNaN(boshNum)) {
      elStatus.textContent = 'Please enter only numeric values';
      elStatus.style.display = 'block';
      return;
   }
   if (loopSize < 1) {
      elStatus.textContent = 'Please enter a postive value for the loop size';
      elStatus.style.display = 'block';
      return;
   }
   let output = '';
   for (let n = 1; n <= loopSize; n++) {
      if ((n % bishNum == 0) && (n % boshNum == 0))
         output += 'Bish-Bosh, ';
      else if (n % boshNum == 0)
         output += 'Bosh, ';
      else if (n % bishNum == 0)
         output += 'Bish, ';
      else
         output += n + ', ';
   }
   // remove last character (,) and write output string 
   const outputAdjusted = output.slice(0, -2);
   elResult.textContent = outputAdjusted;
}


