/* ATM module using the "Module Export" pattern, importing jQuery's $ */
var atm = (function ($) {

  // Private varibales:
	var my = {},
		balance = 1000,
		secret = 1234,
		loggedIn = false;

  // Private methods:
	function enableButton(slot, label) {
		$('#lbl-' + slot).html(label);
		$('#lbl-ln-' + slot).addClass('active');
		$('#key-' + slot).addClass('active');
	}

	function disableButton(slot) {
		$('#lbl-' + slot).html('');
		$('#lbl-ln-' + slot).removeClass('active');
		$('#key-' + slot).removeClass('active');
	}

  // Public methods:
	my.getBalance = function() {
  	return balance;
	}
	
	my.deposit = function(amount) {
	  if (typeof(amount) == 'undefined' || isNaN(amount)) return;
  	balance += Math.abs(amount);
  	return balance;
	}

	my.withdraw = function(amount) {
	  if (typeof(amount) == 'undefined' || isNaN(amount) || balance < amount) return;
  	balance -= Math.abs(amount);
  	return balance;
	}

	my.getPin = function() {
	  var enteredPin = prompt('Hint: 1234');
	  if (enteredPin == secret) {
  	  $('#message').html('Please make a choice...');
  	  enableButton('c', 'Withdraw');
  	  enableButton('d', 'Deposit');
  	  enableButton('g', 'Balance');
  	  enableButton('h', 'Re-Enter PIN');
  	  loggedIn = true;
	  } else {
  	  $('#message').html('Incorrect PIN.');
  	  setTimeout(function(){
    	  $('#message').html('Welcome');
    	  disableButton('c');
    	  disableButton('d');
    	  disableButton('g');
    	  enableButton('h', 'Enter PIN');
  	  }, 1000);
  	  loggedIn = false;
	  }
	}
	
	my.showBalance = function() {
  	$('#message').html('Your balance is: ' + balance);
	}
	
	// Events

	$('#key-c').click(function(e){
	  if (loggedIn) {
  	  var amt = prompt('Amount:');
  	  my.withdraw(amt);
  	  my.showBalance();
	  }
	});

	$('#key-d').click(function(e){
	  if (loggedIn) {
  	  var amt = prompt('Amount:');
  	  my.deposit(amt);
  	  my.showBalance();
	  }
	});	

	$('#key-h').click(function(e){
  	my.getPin();
	});

	$('#key-g').click(function(e){
	  if (loggedIn) {
  	  my.showBalance();
	  }
	});


	return my;
}($));