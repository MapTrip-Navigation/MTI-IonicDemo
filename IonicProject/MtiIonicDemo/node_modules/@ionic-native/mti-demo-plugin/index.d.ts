import { IonicNativePlugin } from '@ionic-native/core';
import { Observable } from 'rxjs';
export declare class MtiDemoPluginOriginal extends IonicNativePlugin {
    mtiInit(): Promise<any>;
    removeDestinations(): Promise<any>;
    appendDestination(arg0: number, arg1: number): Promise<any>;
    startNavigation(): Promise<any>;
    watchDestinationReached(): Observable<any>;
    showServer(): Promise<any>;
    hideServer(): Promise<any>;
    watchRouteCalculated(): Observable<any>;
    watchRouteStarted(): Observable<any>;
    watchCoiInfo(): Observable<any>;
}

export declare const MtiDemoPlugin: MtiDemoPluginOriginal;