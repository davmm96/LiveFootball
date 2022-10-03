package com.livefootball;

import android.content.Intent;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class ToastManager extends ReactContextBaseJavaModule {

    public ToastManager(@NonNull ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @NonNull
    @Override
    public String getName() {
        return "ToastManager";
    }

    @ReactMethod
    public void addGame(String game, Promise promise) {

        promise.resolve(game);
    }

}