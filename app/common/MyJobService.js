const ad = require("tns-core-modules/utils/utils").ad;
const toast = require("nativescript-toast");

const context = ad.getApplicationContext();

android.app.job.JobService.extend("com.tns.notifications.MyJobService", {
    onStartJob: function(params) {       
        console.log("Job execution ...");

        toast.makeText("Hello World").show();
        
        return false;
    },
    
    onStopJob: function() {
        console.log("Stopping job ...");
    }
});