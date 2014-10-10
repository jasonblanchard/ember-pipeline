import Ember from 'ember';

export default Ember.Controller.extend({

  post: Ember.computed.alias('model'),

  actions: {
    updatePost: function() {
      var self = this;
      var post = self.get('post');

      post.save().then(function() {
        self.transitionTo('post', post);
      });
    }
  }
});
