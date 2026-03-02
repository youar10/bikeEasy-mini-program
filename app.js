// app.js for the BikeEasy mini program

App({
  onLaunch: function() {
    // Code to execute when the app launches
    console.log('BikeEasy Mini Program Launched');
  },
  onShow: function() {
    // Code to execute when the app is displayed
    console.log('BikeEasy Mini Program is now showing');
  },
  onHide: function() {
    // Code to execute when the app is hidden
    console.log('BikeEasy Mini Program is now hidden');
  },
  onError: function(error) {
    // Code to handle app errors
    console.error('Error occurred in BikeEasy Mini Program:', error);
  }
});