# test-background-service

Nativescript Vue Background Service Execution

1. Copy Manifest.xml in App_Resource/Android/main
2. In the Manifest.xml inside App_Resource add this line.
```
<service 
				android:name="com.tns.notifications.MyJobService"
				android:permission="android.permission.BIND_JOB_SERVICE" 
				android:enabled="true"
				android:exported="true" />
```
3. In webpack.config
```
const appComponents = [
        "tns-core-modules/ui/frame",
        "tns-core-modules/ui/frame/activity",
        resolve(__dirname, "app/common/MyJobService") //Add this line, your Service
    ];
``
