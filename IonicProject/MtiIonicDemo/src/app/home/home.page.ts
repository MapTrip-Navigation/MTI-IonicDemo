import { Component } from '@angular/core';
import { MtiDemoPlugin } from '@ionic-native/mti-demo-plugin/ngx';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  latValue: string;
  lngValue: string;

  constructor(private mtiPlugin: MtiDemoPlugin, private  platform: Platform) {

    this.platform.ready()
      .then(() => {

        // Call to initialize the MTI - API
        this.mtiPlugin.mtiInit()
          .then(r => {

              // Subscribes to the necessary observables (see below)
              this.initListeners();
          })
          .catch(e => {
            alert('MTI init catch: ' + e);
          });
      })
      .catch((e) => {
        alert(e);
      });
  }

  // OnClick - Method for the "Start Navigation" button
  public startNavigation() {
    const lat: number = +this.latValue;
    const lng: number = +this.lngValue;

    if (!this.latValue) {
      alert('Please enter a value for Latitude');
      return;
    } else if (!this.lngValue) {
      alert('Please enter a value for Longitude');
      return;
    }

    // Call to remove all leftover destinations from previous calls
    this.mtiPlugin.removeDestinations()
      .then(() => {

        // Call to add the entered coordinates as destination for MapTrip
        this.mtiPlugin.appendDestination(lat, lng)
          .then(() => {

            // Call to MapTrip to start the navigation
            this.mtiPlugin.startNavigation()
              .then(() => {
                  // Nothing here, as we are switching to the MapTrip application in the "watchRouteStarted" Observable below
              })
              .catch(e => {
                alert('startNavigation Error: ' + e);
              });
          })
          .catch(e => {
            alert('appendDestination Error: ' + e);
          });
      })
      .catch(e => {
        alert('removeDestinations Error: ' + e);
      });

  }

  // Subscribes to the necessary observables
  private initListeners() {

    // Subscribes to the DestinationReached-Observable -> gets called every time a destination as been reached
    this.mtiPlugin.watchDestinationReached().subscribe(
      r => {

        // Hides MapTrip, to show the ionic-application again
        this.mtiPlugin.hideServer()
          .then(() => {

            // Clears leftover crossing / navigation information displayed in the label
            document.getElementById('coiLabel').innerText = '';
          })
          .catch(e => {
            alert('hideServer Error: ' + e);
          });
      },
      err => alert('destinationReached Error: ' + err),
      () => console.log('watchDestinationReached Done')
    );

    // Subscribes to the RouteCalculated-Observable -> gets called every time a route has been finished calculating
    this.mtiPlugin.watchRouteCalculated().subscribe(
      r => console.log('Route finished calculating'),
      err => alert('routeCalculated Error: ' + err),
      () => console.log('watchRouteCalculated done')
    );

    // Subscribe to the RouteStarted-Observable -> gets called every time a route has been started
    this.mtiPlugin.watchRouteStarted().subscribe(
      r => {

        // Call to bring MapTrip into the foreground
        this.mtiPlugin.showServer()
          .then(() => {

          })
          .catch(e => {
            alert('ShowServer Error: ' + e);
          });
      },
      err => alert('routeStarted Error: ' + err),
      () => console.log('watchRouteStarted done')
    );

    // Subscribe to the CrossingInformation-Observable -> gets called every time new crossing / navigation - information is available
    this.mtiPlugin.watchCoiInfo().subscribe(
      r => {

        // Displayes the received information
        document.getElementById('coiLabel').innerText = r;
      },
      err => alert('coiInfo Error: ' + err),
      () => console.log('watchCoiInfo done')
    );

  }

}
