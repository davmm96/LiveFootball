package com.livefootball;

import android.Manifest;
import android.app.DownloadManager;
import android.content.Context;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.net.Uri;
import android.os.AsyncTask;
import android.os.Build;
import android.os.Environment;
import android.util.Log;

import androidx.annotation.NonNull;
import androidx.core.app.ActivityCompat;
import androidx.core.content.ContextCompat;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.modules.core.PermissionAwareActivity;
import com.facebook.react.modules.core.PermissionListener;

import java.io.BufferedInputStream;
import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class ImageManager extends ReactContextBaseJavaModule implements PermissionListener {

    public ImageManager(@NonNull ReactApplicationContext reactContext) {
        super(reactContext);
    }

    private String name = "";
    private String url = "" ;
    private Promise promise;

    @NonNull
    @Override
    public String getName() {
        return "ImageManager";
    }

    @Override
    public boolean onRequestPermissionsResult(int requestCode, String[] permissions, int[] grantResults) {
        if (grantResults[0] == PackageManager.PERMISSION_GRANTED) {
            download(name, url);
            promise.resolve(null);
        }
        else
        {
            promise.reject(new Throwable("PERMISSION DENIED"));
        }

        return true;
    }

    @ReactMethod
    public void downloadImage(String name, String url, Promise promise) {

        this.name = name;
        this.url = url;
        this.promise = promise;

        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M){
            if(getReactApplicationContext().checkSelfPermission(Manifest.permission.WRITE_EXTERNAL_STORAGE) == PackageManager.PERMISSION_GRANTED){
                download(name, url);
                promise.resolve(null);
            }
            else{
                PermissionAwareActivity activity = (PermissionAwareActivity) getCurrentActivity();

                if (activity == null) {
                    promise.reject(new Throwable("NO ACTIVITY"));
                }

                activity.requestPermissions(new String[]{Manifest.permission.WRITE_EXTERNAL_STORAGE},1, this);
            }
        }
        else{
            download(name, url);
            promise.resolve(null);
        }
    }

    private void download(String name, String url) {

        File directory = new File(Environment.DIRECTORY_PICTURES);
        String nameFile = name+".png";

        if (!directory.exists()) {
            directory.mkdirs();
        }

        DownloadManager downloadManager = (DownloadManager) getReactApplicationContext().getSystemService(Context.DOWNLOAD_SERVICE);
        Uri uri = Uri.parse(url);
        DownloadManager.Request request = new DownloadManager.Request(uri);

        request.setAllowedNetworkTypes(DownloadManager.Request.NETWORK_MOBILE | DownloadManager.Request.NETWORK_WIFI);
        request.setTitle("Team");
        request.setDestinationInExternalPublicDir(directory.toString(),nameFile);
        request.setNotificationVisibility(DownloadManager.Request.VISIBILITY_VISIBLE_NOTIFY_COMPLETED);

        downloadManager.enqueue(request);
    }

}