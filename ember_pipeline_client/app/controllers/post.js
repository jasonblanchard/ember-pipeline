import Ember from 'ember';

export default Ember.ObjectController.extend({

  actions: {
    deletePost: function() {
      var self = this;
      var post = self.get('model');

      post.deleteRecord();
      post.save().then(function() {
        self.transitionToRoute('posts');
      });
    }
  }
});
