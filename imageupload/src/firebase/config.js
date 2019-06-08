import firebase from 'firebase/app';
import 'firebase/storage';

  // Initialize Firebase
  var config = {
          apiKey: "AIzaSyDL0fC_R-jv1ARw4bdCKQFwiVsVmO7xxP4",
          authDomain: "image-video-audio-uploader.firebaseapp.com",
          databaseURL: "https://image-video-audio-uploader.firebaseio.com",
          projectId: "image-video-audio-uploader",
          storageBucket: "image-video-audio-uploader.appspot.com",
          messagingSenderId: "703143950566"
        };
        firebase.initializeApp(config);
      
        const storage = firebase.storage();

        export {
            storage, firebase as default
        }


