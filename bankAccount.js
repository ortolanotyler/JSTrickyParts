function createAccount(initialPin, initialBalance) {
  let pin = initialPin;
  let balance = initialBalance;

  return {
    
checkBalance: function(enteredPin) {
   if (enteredPin === pin) {
        return `Current balance: $${balance}.`;
} else {
        return "Invalid PIN.";
}
},
    
deposit: function(enteredPin, amount) {
 if (enteredPin === pin) {
        balance += amount;
        return `Successfully deposited $${amount}. Current balance: $${balance}.`;
    } else {
        return "Invalid PIN.";
      }
    },
withdraw: function(enteredPin, amount) 
  if (enteredPin === pin) {
        if (amount <= balance) {
          balance -= amount;
          return `Successfully withdrew $${amount}. Current balance: $${balance}.`;
        } else {
          return "Withdrawal amount exceeds account balance. Transaction cancelled.";
        }
      } else {
        return "Invalid PIN.";
      }
    },
changePin: function(oldPin, newPin) {
 if (oldPin === pin) {
        pin = newPin;
        return "PIN successfully changed!";
      } else {
        return "Invalid PIN.";
      }
    },
  };
}

// Create an account with an initial PIN and balance
let account = createAccount("1234", 100);

// Test the account methods
console.log(account.checkBalance("oops")); // "Invalid PIN."
console.log(account.deposit("1234", 250)); // "Successfully deposited $250. Current balance: $350."
console.log(account.withdraw("1234", 300)); // "Successfully withdrew $300. Current balance: $50."
console.log(account.withdraw("1234", 10));  // "Withdrawal amount exceeds account balance. Transaction cancelled."
console.log(account.changePin("1234", "5678")); // "PIN successfully changed!"
