package de.infoware.mtiplugin;

import android.content.Context;
import android.util.Log;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaInterface;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CordovaWebView;
import org.apache.cordova.PluginResult;
import org.json.JSONArray;
import org.json.JSONException;

import java.text.DecimalFormat;

import de.infoware.android.mti.Api;
import de.infoware.android.mti.ApiListener;
import de.infoware.android.mti.Navigation;
import de.infoware.android.mti.NavigationListener;
import de.infoware.android.mti.enums.ApiError;
import de.infoware.android.mti.enums.Info;
import de.infoware.android.mti.extension.MTIHelper;

public class MtiDemoPlugin extends CordovaPlugin implements ApiListener, NavigationListener {

    private final String TAG = "MtiDemoPlugin";

    private CallbackContext mtiInitCallback;
    private CallbackContext removeDestinationsCallback;
    private CallbackContext appendDestinationCallback;
    private CallbackContext startNavigationCallback;
    private CallbackContext hideServerCallback;

    private CallbackContext routeStartedCallback;
    private CallbackContext routeCalculatedCallback;
    private CallbackContext destinationReachedCallback;
    private CallbackContext coiInfoCallback;

    private static DecimalFormat df = new DecimalFormat("0.00");

    /*
        Gets called the first time a request has been made to the plugin
        Initializes the MTIHelper, and registers the plugin as listener for Api & Navigation, to receive the necessary callbacks
     */
    @Override
    public void initialize(CordovaInterface cordova, CordovaWebView webView) {
        super.initialize(cordova, webView);
        Log.d(TAG, "initialize");

        // The Application Context is needed to initialize the connection to maptrip
        Context context = webView.getContext().getApplicationContext();

        MTIHelper.initialize(context);
        Api.registerListener(this);
        Navigation.registerListener(this);

        Api.enableLogging("", 100, 0, 0, false, true);
    }

    /*
        Every function-call to the MtiDemoPlugin uses this cordova.execute() - function
        The function itself redirects the calls to the respectively function, differentiated by the "action"-string
     */
    @Override
    public boolean execute(
            String action,
            JSONArray args,
            final CallbackContext callbackContext
    ) throws JSONException {
        switch (action) {
            case "mtiInit":
                Log.d(TAG, "mtiInit native called");
                mtiInit(callbackContext);
                return true;
            case "removeDestinations":
                Log.d(TAG, "removeDestinations native called");
                removeDestinations(callbackContext);
                return true;
            case "appendDestination":
                double lat = args.getDouble(0);
                double lng = args.getDouble(1);
                appendDestination(callbackContext, lat, lng);
                return true;
            case "startNavigation":
                Log.d(TAG, "startNavigation native called");
                startNavigation(callbackContext);
                return true;
            case "watchDestinationReached":
                Log.d(TAG, "watchDestination native called");
                watchDestinationReached(callbackContext);
                return true;
            case "showServer":
                Log.d(TAG, "showServer native called");
                showServer();
                callbackContext.success();
                return true;
            case "hideServer":
                Log.d(TAG, "hideServer native called");
                hideServer(callbackContext);
                return true;
            case "watchRouteCalculated":
                Log.d(TAG, "watchRouteCalculated native called");
                watchRouteCalculated(callbackContext);
                return true;
            case "watchRouteStarted":
                Log.d(TAG, "watchRouteStarted native called");
                watchRouteStarted(callbackContext);
                return true;
            case "watchCoiInfo":
                Log.d(TAG, "watchCoiInfo native called");
                watchCoiInfo(callbackContext);
                return true;
            default:
                return false;
        }
    }

    public void mtiInit(CallbackContext callbackContext) {

        // Saving the callback to fulfill / deny later in the mti-callback "initResult"
        mtiInitCallback = callbackContext;

        // Call the Api - function
        Api.init();
    }

    public void removeDestinations(CallbackContext callbackContext) {

        // Saving the callback to fulfill / deny later in the mti-callback "removeAllDestinationCoordinatesResult"
        removeDestinationsCallback = callbackContext;

        // Calling the MTI - function
        Navigation.removeAllDestinationCoordinates();
    }

    public void appendDestination(CallbackContext callbackContext, double lat, double lng) {

        // Saving the callback to fulfill / deny later in the mti-callback "appendDestinationCoordinateResult"
        appendDestinationCallback = callbackContext;

        // Calling the MTI - function
        Navigation.appendDestinationCoordinate(lat, lng);
    }

    public void startNavigation(CallbackContext callbackContext) {

        // Saving the callback to fulfill / deny later in the mti-callback "startNavigationResult"
        startNavigationCallback = callbackContext;

        // Calling the MTI - function
        Navigation.startNavigation();
    }

    public void watchDestinationReached(CallbackContext callbackContext) {

        // Saving the callback to send a response every time a destination is reached
        destinationReachedCallback = callbackContext;
    }

    public void watchRouteCalculated(CallbackContext callbackContext) {

        // Saving the callback to send a response every time a route is finished calculating
        routeCalculatedCallback = callbackContext;
    }

    public void watchRouteStarted(CallbackContext callbackContext) {

        // Saving the callback to send a response every time a route has been started
        routeStartedCallback = callbackContext;
    }

    public void watchCoiInfo(CallbackContext callbackContext) {

        // Saving the callback to send a response every time new crossing / navigation - information is available
        coiInfoCallback = callbackContext;
    }

    public void showServer() {
        // Calling the MTI - function
        Api.showServer();
    }

    public void hideServer(CallbackContext callbackContext) {

        // Saving the callback to fulfill / deny later in the mti-callback "hideServerResult"
        hideServerCallback = callbackContext;

        // Calling the MTI - function
        Api.hideServer();
    }


    /* ApiListener Callbacks */

    @Override
    public void onError(int i, String s, ApiError apiError) {

    }

    @Override
    public void findServerResult(int i, ApiError apiError) {

    }

    @Override
    public void initResult(int i, ApiError apiError) {

        if(mtiInitCallback != null) {
            // Checks the ApiError value, and fulfils / denies it respectively
            if(apiError.getIntVal() == ApiError.OK.getIntVal()) {
                mtiInitCallback.success(apiError.toString());
            } else {
                mtiInitCallback.error(apiError.toString());
            }
        }


        Log.d(TAG, "Init Result: " + apiError.toString());
    }

    @Override
    public void showAppResult(int i, ApiError apiError) {

    }

    @Override
    public void sendTextResult(int i, ApiError apiError) {

    }

    @Override
    public void getMapVersionResult(int i, String s, ApiError apiError) {

    }

    @Override
    public void getMaptripVersionResult(int i, String s, ApiError apiError) {

    }

    @Override
    public void getApiVersionResult(int i, String s, ApiError apiError) {

    }

    @Override
    public void showServerResult(int i, ApiError apiError) {

    }

    @Override
    public void hideServerResult(int i, ApiError apiError) {
        if(hideServerCallback != null) {
            // Checks the ApiError value, and fulfils / denies it respectively
            if(apiError.getIntVal() == ApiError.OK.getIntVal()) {
                hideServerCallback.success(apiError.toString());
            } else {
                hideServerCallback.error(apiError.toString());
            }

        }


        Log.d(TAG, "hideServer Result: " + apiError.toString());
    }

    @Override
    public void stopServerResult(int i, ApiError apiError) {

    }

    @Override
    public void enableNetworkConnectionsResult(int i, ApiError apiError) {

    }

    @Override
    public void setDataUsageMonthlyLimitResult(int i, ApiError apiError) {

    }

    @Override
    public void resetDataUsageMonthlyLimitResult(int i, ApiError apiError) {

    }

    @Override
    public void getDataUsageMonthlyLimitResult(int i, int i1, ApiError apiError) {

    }

    @Override
    public void getDataUsageRemainingQuotaResult(int i, int i1, ApiError apiError) {

    }

    @Override
    public void isNetworkConnectionEnabledResult(int i, boolean b, ApiError apiError) {

    }

    @Override
    public void customFunctionResult(int i, String s, String s1, ApiError apiError) {

    }

    @Override
    public void infoMsg(Info info, int i) {

    }

    /* END ApiListener END*/

    /* NavigationListener Callbacks */
    @Override
    public void statusInfo(double v, double v1, double v2, double v3) {

    }

    @Override
    public void coiInfo(double v, double v1, String s, String s1, double v2) {

    }

    @Override
    public void crossingInfo(double latitude, double longitude, String currentStreetName, String nextStreetName, String nextManeuver, double meterToPoint ) {

        // Gets called every time new crossing / navigation information is available

        // Formats a response string to send back to the ionic-app
        String crossingInfoString = " Next street: " + nextStreetName + " in " + df.format(meterToPoint ) + "m";

        // If the meterToPoint value is less than 0, no navigation is running and there is no need to send new data to the ionic-app
        if(coiInfoCallback != null && meterToPoint  > 0) {
            PluginResult plResult = new PluginResult(PluginResult.Status.OK, crossingInfoString);

            // .setKeepCallback(true) is necessary to reuse the callback, if you want to use it as an observable
            // to tell cordova to remove the callback, .setKeepCallback(false) is necessary
            plResult.setKeepCallback(true);
            coiInfoCallback.sendPluginResult(plResult);
        }
        Log.d(TAG, "DestinationReached Result: " + crossingInfoString);
    }

    @Override
    public void destinationReached(int i) {

        // Gets called every time a destination is reached

        if(destinationReachedCallback != null) {
            PluginResult pluginResult = new PluginResult(PluginResult.Status.OK, i);

            // .setKeepCallback(true) is necessary to reuse the callback, if you want to use it as an observable
            // to tell cordova to remove the callback, .setKeepCallback(false) is necessary
            pluginResult.setKeepCallback(true);
            destinationReachedCallback.sendPluginResult(pluginResult);
        }
        Log.d(TAG, "DestinationReached Result: " + i);
    }

    @Override
    public void insertDestinationCoordinateResult(int i, ApiError apiError) {

    }

    @Override
    public void appendDestinationCoordinateResult(int i, int i1, ApiError apiError) {

        if(appendDestinationCallback != null) {
            // Checks the ApiError value, and fulfils / denies it respectively
            if(apiError.getIntVal() == ApiError.OK.getIntVal()) {
                appendDestinationCallback.success(apiError.toString());
            } else {
                appendDestinationCallback.error(apiError.toString());
            }
        }

        Log.d(TAG, "AppendDestination Result: " + apiError.toString());

    }

    @Override
    public void insertDestinationAddressResult(int i, ApiError apiError) {

    }

    @Override
    public void appendDestinationAddressResult(int i, int i1, ApiError apiError) {

    }

    @Override
    public void insertGeocodedDestinationResult(int i, ApiError apiError) {

    }

    @Override
    public void appendGeocodedDestinationResult(int i, int i1, ApiError apiError) {

    }

    @Override
    public void markDestinationCoordinateAsViaPointResult(int i, ApiError apiError) {

    }

    @Override
    public void getDestinationCoordinateResult(int i, ApiError apiError, double v, double v1) {

    }

    @Override
    public void getDestinationCoordinateCountResult(int i, ApiError apiError, int i1) {

    }

    @Override
    public void getCurrentDestinationResult(int i, ApiError apiError, int i1) {

    }

    @Override
    public void removeAllDestinationCoordinatesResult(int i, ApiError apiError) {
        if(removeDestinationsCallback != null) {
            // Checks the ApiError value, and fulfils / denies it respectively
            if(apiError.getIntVal() == ApiError.OK.getIntVal()) {
                removeDestinationsCallback.success(apiError.toString());
            } else {
                removeDestinationsCallback.error(apiError.toString());
            }
        }
        Log.d(TAG, "RemoveDestinations Result: " + apiError.toString());
    }

    @Override
    public void startNavigationResult(int i, ApiError apiError) {

        if(startNavigationCallback != null) {
            // Checks the ApiError value, and fulfils / denies it respectively
            if(apiError.getIntVal() == ApiError.OK.getIntVal()) {
                startNavigationCallback.success(apiError.toString());
            } else {
                startNavigationCallback.error(apiError.toString());
            }
        }

        Log.d(TAG, "Start Navigation Result: " + apiError.toString());
    }

    @Override
    public void startAlternativeNavigationResult(int i, ApiError apiError) {

    }

    @Override
    public void startSimulationResult(int i, ApiError apiError) {

    }

    @Override
    public void stopNavigationResult(int i, ApiError apiError) {

    }

    @Override
    public void startRouteFromFileResult(int i, ApiError apiError) {

    }

    @Override
    public void startReferenceRouteResult(int i, ApiError apiError) {

    }

    @Override
    public void getReferenceRouteFileResult(int i, String s, ApiError apiError) {

    }

    @Override
    public void syncWithActiveNavigationResult(int i, ApiError apiError) {

    }

    @Override
    public void navigateWithGuiGeocodingResult(int i, ApiError apiError) {

    }

    @Override
    public void routingStarted() {

        // Gets called every time a navigation has been started

        if(routeStartedCallback != null) {
            PluginResult pluginResult = new PluginResult(PluginResult.Status.OK, "Route Started");

            // .setKeepCallback(true) is necessary to reuse the callback, if you want to use it as an observable
            // to tell cordova to remove the callback, .setKeepCallback(false) is necessary
            pluginResult.setKeepCallback(true);
            routeStartedCallback.sendPluginResult(pluginResult);
        }
        Log.d(TAG, "routingStarted");
    }

    @Override
    public void routeCalculated() {

        // Gets called every time a navigation has been calculated

        if(routeCalculatedCallback != null) {
            PluginResult pluginResult = new PluginResult(PluginResult.Status.OK, "Route Calculated");

            // .setKeepCallback(true) is necessary to reuse the callback, if you want to use it as an observable
            // to tell cordova to remove the callback, .setKeepCallback(false) is necessary
            pluginResult.setKeepCallback(true);
            routeCalculatedCallback.sendPluginResult(pluginResult);
        }
        Log.d(TAG, "routeCalculated");
    }

    @Override
    public void setRoutingModeHybridResult(int i, ApiError apiError) {

    }

    @Override
    public void newRouteAvailable() {

    }

    @Override
    public void setEmergencyRoutingEnabledResult(int i, ApiError apiError) {

    }

    @Override
    public void getEmergencyRoutingEnabledResult(int i, ApiError apiError, boolean b, boolean b1, int i1) {

    }

    @Override
    public void setEmergencyRouteRadiusResult(int i, ApiError apiError) {

    }

    @Override
    public void getEmergencyRouteRadiusResult(int i, ApiError apiError, int i1) {

    }

    /* END NavigationListener END */
}
