/* Create an ATM CPU */
var atm = new ATM({});

/* Create credit card neon signs */
var cc1 = new CC({kind: 'star'});
var cc2 = new CC({kind: 'pulse'});
var cc3 = new CC({kind: 'maestro'});
var cc4 = new CC({kind: 'mastercard'});
var cc5 = new CC({kind: 'plus'});
var cc6 = new CC({kind: 'visa'});
/* Next step: create a collection and use a view that expects a collection: var ccs = new CCCollection([cc1, cc2, cc3, cc4, cc5, cc6]); */
var ccView1 = new CCView({model: cc1, el: $('#cc1')});
var ccView2 = new CCView({model: cc2, el: $('#cc2')});
var ccView3 = new CCView({model: cc3, el: $('#cc3')});
var ccView4 = new CCView({model: cc4, el: $('#cc4')});
var ccView5 = new CCView({model: cc5, el: $('#cc5')});
var ccView6 = new CCView({model: cc6, el: $('#cc6')});

/* Create ATM buttons */
var btn1 = new MenuButton({enabled: 'yes', slot: 'a'});
var btnView1 = new ATMButtonView({model: btn1, el: $('#btn1')});
/*
var op1 = new MenuOption({
  label: 'Enter PIN'
});

var menuOpView = new MenuOptionView({model: op1, el: $('.monitor')});
*/

