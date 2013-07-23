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
var btn1 = new MenuButton({purpose: 'pin', slot: 1});
var btn2 = new MenuButton({purpose: 'pin', slot: 2});
var btn3 = new MenuButton({purpose: 'pin', slot: 3});
var btn4 = new MenuButton({purpose: 'pin', slot: 4});
var btn5 = new MenuButton({purpose: 'pin', slot: 5});
var btn6 = new MenuButton({purpose: 'pin', slot: 6});
var btn7 = new MenuButton({purpose: 'pin', slot: 7});
var btn8 = new MenuButton({purpose: 'pin', slot: 8});
var btnView1 = new ATMButtonView({model: btn1, el: $('.panel')});
var btnView2 = new ATMButtonView({model: btn2, el: $('.panel')});
var btnView3 = new ATMButtonView({model: btn3, el: $('.panel')});
var btnView4 = new ATMButtonView({model: btn4, el: $('.panel')});
var btnView5 = new ATMButtonView({model: btn5, el: $('.panel')});
var btnView6 = new ATMButtonView({model: btn6, el: $('.panel')});
var btnView7 = new ATMButtonView({model: btn7, el: $('.panel')});
var btnView8 = new ATMButtonView({model: btn8, el: $('.panel')});

/*
var op1 = new MenuOption({
  label: 'Enter PIN'
});

var menuOpView = new MenuOptionView({model: op1, el: $('.monitor')});
*/

