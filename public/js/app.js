App = Ember.Application.create();

App.Router.map(function() {
  this.resource('about');
  this.resource('posts', function() {
    this.resource('post', { path: ':post_id' });
  });
});

App.PostsRoute = Ember.Route.extend({
  model: function() {
    // return posts
    return $.getJSON('http://tomdale.net/api/get_recent_posts/?callback=?').then(function(data) {
      return data.posts.map(function(post) {
        post.body = post.content;
        return post;
      });
    });
  }
});

App.PostRoute = Ember.Route.extend({
  model: function(params) {
    // return posts.findBy('id', params.post_id);
    return $.getJSON('http://tomdale.net/api/get_recent_posts/?id='+params.post_id+'&callback=?').then(function(data) {
      data.post.body = data.post.content;
      return data.post;
    });
  }
});

App.PostController = Ember.ObjectController.extend({
  isEditing: false,

  actions: {
    edit: function() {
      this.set('isEditing', true);
    },

    doneEditing: function() {
      this.set('isEditing', false);
    }
  }
});

Ember.Handlebars.helper('format-date', function(date) {
  return moment(date).fromNow();
});

var showdown = new Showdown.converter();

Ember.Handlebars.helper('format-markdown', function(input) {
  return new Handlebars.SafeString(showdown.makeHtml(input));
});

var posts = [{
  id: '1',
  title: "I'm using Ember on Rails 4",
  author: { name: "AJ"},
  date: new Date('12-27-2012'),
  excerpt: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  body: "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
}, {
  id: '2',
  title: "Ember is a framework for ambitious web applications",
  author: { name: "Joseph"},
  date: new Date('12-24-2012'),
  excerpt: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  body: "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
}];