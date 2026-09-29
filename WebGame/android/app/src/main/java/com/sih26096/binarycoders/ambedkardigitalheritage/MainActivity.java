package com.sih26096.binarycoders.ambedkardigitalheritage;

import android.annotation.SuppressLint;
import android.os.Build;
import android.os.Bundle;
import android.view.View;
import android.view.WindowManager;
import android.webkit.WebSettings;
import android.webkit.WebChromeClient;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.webkit.WebResourceRequest;
import android.widget.FrameLayout;
import android.app.Activity;
import android.graphics.Color;

/**
 * Offline WebView host for the Ambedkar Digital Heritage Journey.
 * The entire game ships in assets/www — no network access at runtime.
 */
public class MainActivity extends Activity {

    private WebView web;

    @SuppressLint("SetJavaScriptEnabled")
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        getWindow().addFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON);
        getWindow().setStatusBarColor(Color.parseColor("#05070D"));
        getWindow().setNavigationBarColor(Color.parseColor("#05070D"));

        FrameLayout root = new FrameLayout(this);
        root.setBackgroundColor(Color.parseColor("#05070D"));

        web = new WebView(this);
        web.setBackgroundColor(Color.parseColor("#05070D"));
        web.setOverScrollMode(View.OVER_SCROLL_NEVER);

        WebSettings s = web.getSettings();
        s.setJavaScriptEnabled(true);
        s.setDomStorageEnabled(true);
        s.setDatabaseEnabled(true);
        s.setAllowFileAccess(true);
        s.setAllowContentAccess(true);
        s.setLoadWithOverviewMode(true);
        s.setUseWideViewPort(true);
        s.setBuiltInZoomControls(false);
        s.setDisplayZoomControls(false);
        s.setSupportZoom(false);
        s.setMediaPlaybackRequiresUserGesture(false);
        s.setCacheMode(WebSettings.LOAD_NO_CACHE);
        // the game ships an embedded content bundle; these keep any incidental
        // local resource reads working from the file:// origin
        s.setAllowFileAccessFromFileURLs(true);
        s.setAllowUniversalAccessFromFileURLs(true);
        s.setGeolocationEnabled(false);
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            s.setSafeBrowsingEnabled(false);
        }
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
            s.setMixedContentMode(WebSettings.MIXED_CONTENT_NEVER_ALLOW);
        }

        web.setWebViewClient(new WebViewClient() {
            @Override
            public boolean shouldOverrideUrlLoading(WebView view, WebResourceRequest request) {
                // keep everything in-app; the game is fully offline
                return true;
            }
            @Override
            public void onPageFinished(WebView view, String url) {
                view.setVisibility(View.VISIBLE);
            }
        });
        web.setWebChromeClient(new WebChromeClient());
        web.setBackgroundColor(Color.parseColor("#05070D"));

        root.addView(web, new FrameLayout.LayoutParams(
                FrameLayout.LayoutParams.MATCH_PARENT,
                FrameLayout.LayoutParams.MATCH_PARENT));
        setContentView(root);

        web.loadUrl("file:///android_asset/www/index.html");
    }

    @Override
    public void onBackPressed() {
        if (web != null) {
            web.evaluateJavascript(
                "(function(){try{window.__dhjAndroidBack&&window.__dhjAndroidBack()}catch(e){}})()",
                null);
        }
        super.onBackPressed();
    }
}
