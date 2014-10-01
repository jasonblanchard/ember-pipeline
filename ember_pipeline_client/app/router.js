import Ember from 'ember';

var Router = Ember.Router.extend({
  location: EmberPipelineClientENV.locationType
});

Router.map(function() {
  this.route('posts');
});

export default Router;
