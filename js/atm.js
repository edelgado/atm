var ATM = Backbone.Model.extend({
  defaults: {
    secret: '1234',
    balance: 1000
  }
});

var MenuOption = Backbone.Model.extend({
  defaults: {
    label: 'Option'
  }
});

var MenuButton = Backbone.Model.extend({
  defaults: {
    slot: 99,
    purpose: null
  }
});

var CC = Backbone.Model.extend({
  defaults: {
    kind: 'visa',
    status: 'active'
  }
});

var ATMOptionView = Backbone.View.extend({

  // Cache the template function for a single item.
  tpl: _.template($('#atm-option-template').html()),

  // Called when the view is first created
  initialize: function () {
  },

  // Re-render the titles of the todo item.
  render: function() {
    this.$el.html(this.tpl(this.model.toJSON()));
    return this;
  }

});

var ATMButtonView = Backbone.View.extend({

  // Cache the template function for a single item.
  btnTpl: _.template($('#atm-button-template').html()),
  lblTpl: _.template($('#atm-option-template').html()),

  events: {
    'click div.key': 'doAction'
  },

  // Called when the view is first created
  initialize: function () {
    this.render();
  },

  // Re-render the titles of the todo item.
  render: function() {
    switch (this.model.get('purpose')) {
      case 'pin':
        console.log('Rendering a PIN button');
        this.$('#lbl' + this.model.get('slot')).html(this.lblTpl({label:'Enter PIN'}));
        this.$('#btn' + this.model.get('slot')).html(this.btnTpl(this.model.toJSON()));
        //this.$('#message').html('BAM!');
        break;
      case 'deposit':
        
        break;
      case 'withdraw':
        
        break;
      default:
        break;
    }
    
    //this.$el.html(this.tpl(this.model.toJSON()));
    return this;
  },

  doAction: function(e) {
    switch (this.model.get('purpose')) {
      case 'pin':
        console.log('I\'m here to ask for a PIN number!');
        break;
      case 'deposit':
        console.log('I\'m here to do a deposit!');
        break;
      case 'withdraw':
        console.log('I\'m here to do a withdrawal!');
        break;
      default:
        console.log('I\'m here just to sit and look buttony-like!');
        break;
    }
  }
});


var CCView = Backbone.View.extend({

  // Cache the template function for a single item.
  tpl: _.template($('#cc-template').html()),

  // Called when the view is first created
  initialize: function () {
    this.model.bind('change', _.bind(this.render, this));
    this.render();
  },

  // Re-render the sign
  render: function() {
    this.$el.html(this.tpl(this.model.toJSON()));
    return this;
  }

});