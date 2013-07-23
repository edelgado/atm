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
    enabled: 'yes',
    slot: 'a'
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
  tpl: _.template($('#atm-button-template').html()),

  events: {
    'click div': 'doAction'
  },

  // Called when the view is first created
  initialize: function () {
    this.render();
  },

  // Re-render the titles of the todo item.
  render: function() {
    this.$el.html(this.tpl(this.model.toJSON()));
    return this;
  },

  doAction: function(e) {
    console.log('clicked on ' + e.target);
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