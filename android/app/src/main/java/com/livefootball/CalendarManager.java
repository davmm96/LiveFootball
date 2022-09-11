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

public class CalendarManager extends ReactContextBaseJavaModule {

    public CalendarManager(@NonNull ReactApplicationContext reactContext)
    {
        super(reactContext);
    }

    @NonNull
    @Override
    public String getName() {
        return "CalendarManager";
    }

    @ReactMethod
    public void addGame(String game, String dateISO, Promise promise)
    {
        String dateFormat = "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'";
        SimpleDateFormat sdf = new SimpleDateFormat(dateFormat);

        Date date = null;
        try
        {
            date = sdf.parse(dateISO);
        }
        catch (ParseException e)
        {
            date = new Date();
        }

        Intent intent = new Intent(Intent.ACTION_EDIT);
        intent.setType("vnd.android.cursor.item/event");
        intent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
        intent.putExtra("beginTime", date.getTime());
        intent.putExtra("allDay", false);
        intent.putExtra("endTime", date.getTime()+90*60*1000);
        intent.putExtra("title", game);
        getReactApplicationContext().startActivity(intent);

        promise.resolve(null);
    }
}
