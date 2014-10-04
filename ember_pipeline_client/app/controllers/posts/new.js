import Ember from 'ember';

export default Ember.Controller.extend({

  post: function() {
    return this.store.createRecord('post');
  }.property(),

  actions: {
    createPost: function() {
      var self = this;

      self.get('post').save().then(function() {
        self.transitionToRoute('post', self.get('post'));
      });
    }
  }

});
