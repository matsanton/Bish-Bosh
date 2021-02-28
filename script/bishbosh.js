
// Get input elements
const elLoopSize = document.getElementById('loop-size');
const elBishDivisor = document.getElementById('bish-num');
const elBoshDivisor = document.getElementById('bosh-num');
const elButton = document.querySelector('button');

// get output elements
const elError = document.querySelector('#error-msg');
const elResults = document.querySelector('#results');

elButton.addEventListener('click', calculate);

function calculate() {
   elError.style.visibility = 'hidden';
   const txtLoopSize = elLoopSize.value.trim();
   const txtBishNum = elBishDivisor.value.trim();
   const txtBoshNum = elBoshDivisor.value.trim();
   if (txtLoopSize.length == 0 || txtBishNum.length == 0 || txtBoshNum.length == 0) {
      elError.textContent = 'Please enter values in all fields';
      elError.style.visibility = 'visible';
      return;
   }
   const loopSize = parseInt(txtLoopSize);
   const bishNum = parseInt(txtBishNum);
   const boshNum = parseInt(txtBoshNum);
   if (isNaN(loopSize) || isNaN(bishNum) || isNaN(boshNum)) {
      elError.textContent = 'Please enter only numeric values';
      elError.style.visibility = 'visible';
      return;
   }
   if (loopSize < 1) {
      elError.textContent = 'Please enter a postive value for the loop size';
      elError.style.visibility = 'visible';
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
   // remove last characters (', ') and write output string 
   const outputAdjusted = output.slice(0, -2);
   elResults.textContent = outputAdjusted;
}


