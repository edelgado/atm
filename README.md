ATM Machine Exercise
====================

Uses
----
* HTML5 Bolerplate
* Backbone

Interesting things to do in the console
---------------------------------------

* Turn off the visa credit card sign, by changing its model state: `cc6.set('status','muted');`
* Turn it back on: `cc6.set('status','active');`
* View the balance of the account: `atm.get('balance');`
* Change the purpose of the top-left ATM button: `btn1.set('purpose','deposit')`;

Next Steps
----------
- [ ] Refactor duplicated HTML, by using Backbone collections.
- [ ] Conventience methods to toggle credit cards: `currentCard(ccModel);`
