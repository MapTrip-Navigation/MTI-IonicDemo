
import { Injectable } from '@angular/core';
import { Plugin, Cordova, CordovaProperty, CordovaInstance, InstanceProperty, IonicNativePlugin } from '@ionic-native/core';
import { Observable } from 'rxjs';

@Plugin({
  pluginName: 'MtiDemoPlugin',
  plugin: 'de.infoware.mtiplugin', // npm package name, example: cordova-plugin-camera
  pluginRef: 'cordova.plugins.MtiDemoPlugin', // the variable reference to call the plugin, example: navigator.geolocation
  repo: '', // the github repository URL for the plugin
  platforms: ['Android'] // Array of platforms supported, example: ['Android', 'iOS']
})
@Injectable()
export class MtiDemoPlugin extends IonicNativePlugin {

  @Cordova()
  mtiInit(): Promise<any> {
    return;
  }

  @Cordova()
  removeDestinations(): Promise<any> {
    return;
  }

  @Cordova({
    callbackOrder: 'reverse'
  })
  appendDestination(arg0:number, arg1:number): Promise<any> {
    return;
  }

  @Cordova()
  startNavigation(): Promise<any> {
    return;
  }

  @Cordova({
    observable: true
  })
  watchDestinationReached(): Observable<any> {
    return;
  }

  @Cordova()
  showServer(): Promise<any> {
    return;
  }

  @Cordova()
  hideServer(): Promise<any> {
    return;
  }

  @Cordova({
    observable: true
  })
  watchRouteCalculated(): Observable<any> {
    return;
  }

  @Cordova({
    observable: true
  })
  watchRouteStarted(): Observable<any> {
    return;
  }

  @Cordova({
    observable: true
  })
  watchCoiInfo(): Observable<any> {
    return;
  }
}
