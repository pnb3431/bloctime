var app = angular.module("sampleApp", ["firebase"]);

app.controller("SampleCtrl", function($scope, $firebaseObject) {
  var ref = firebase.database().ref();
  // download the data into a local object
  $scope.data = $firebaseObject(ref);
  // putting a console.log here won't work, see below
});

var app = angular.module("sampleApp", ["firebase"]);
app.controller("SampleCtrl", function($scope, $firebaseObject) {
  var ref = firebase.database().ref().child("data");
  // download the data into a local object
  var syncObject = $firebaseObject(ref);
  // synchronize the object with a three-way data binding
  // click on `index.html` above to see it used in the DOM!
  syncObject.$bindTo($scope, "data");
});

var app = angular.module("sampleApp", ["firebase"]);
app.controller("SampleCtrl", function($scope, $firebaseArray) {
  var ref = firebase.database().ref().child("messages");
  // create a synchronized array
  // click on `index.html` above to see it used in the DOM!
  $scope.messages = $firebaseArray(ref);
});

var app = angular.module("sampleApp", ["firebase"]);
app.controller("SampleCtrl", function($scope, $firebaseArray) {
  var ref = firebase.database().ref().child("messages");
  // create a synchronized array
  $scope.messages = $firebaseArray(ref);
  // add new items to the array
  // the message is automatically added to our Firebase database!
  $scope.addMessage = function() {
    $scope.messages.$add({
      text: $scope.newMessageText
    });
  };
  // click on `index.html` above to see $remove() and $save() in action
});

app.controller("SampleCtrl", function($scope, $firebaseAuth) {
  var auth = $firebaseAuth();

  // login with Facebook
  auth.$signInWithPopup("facebook").then(function(firebaseUser) {
    console.log("Signed in as:", firebaseUser.uid);
  }).catch(function(error) {
    console.log("Authentication failed:", error);
  });
});