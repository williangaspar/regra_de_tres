var app = {
  // Application Constructor
  initialize: function() {
    document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
  },


  onDeviceReady: function() {
    this.receivedEvent('deviceready');
  },

  // Update DOM on a Received Event
  receivedEvent: function(id) {

  }
};

app.initialize();
