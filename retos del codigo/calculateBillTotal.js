const calculateBillTotal= (preTaxAndTipAmount) => {
    // your code here
    let tax = preTaxAndTipAmount * 0.095 ;
    let tip = preTaxAndTipAmount * 0.150 ; {
        return preTaxAndTipAmount + tax + tip;
    }
  }
  
  module.exports = calculateBillTotal;