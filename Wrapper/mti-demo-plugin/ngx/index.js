import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
import { Observable } from 'rxjs';
var MtiDemoPlugin = /** @class */ (function (_super) {
    __extends(MtiDemoPlugin, _super);
    function MtiDemoPlugin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MtiDemoPlugin.prototype.mtiInit = function () { return cordova(this, "mtiInit", {}, arguments); };
    MtiDemoPlugin.prototype.removeDestinations = function () { return cordova(this, "removeDestinations", {}, arguments); };
    MtiDemoPlugin.prototype.appendDestination = function (arg0, arg1) { return cordova(this, "appendDestination", { "callbackOrder": "reverse" }, arguments); };
    MtiDemoPlugin.prototype.startNavigation = function () { return cordova(this, "startNavigation", {}, arguments); };
    MtiDemoPlugin.prototype.watchDestinationReached = function () { return cordova(this, "watchDestinationReached", { "observable": true }, arguments); };
    MtiDemoPlugin.prototype.showServer = function () { return cordova(this, "showServer", {}, arguments); };
    MtiDemoPlugin.prototype.hideServer = function () { return cordova(this, "hideServer", {}, arguments); };
    MtiDemoPlugin.prototype.watchRouteCalculated = function () { return cordova(this, "watchRouteCalculated", { "observable": true }, arguments); };
    MtiDemoPlugin.prototype.watchRouteStarted = function () { return cordova(this, "watchRouteStarted", { "observable": true }, arguments); };
    MtiDemoPlugin.prototype.watchCoiInfo = function () { return cordova(this, "watchCoiInfo", { "observable": true }, arguments); };
    MtiDemoPlugin.pluginName = "MtiDemoPlugin";
    MtiDemoPlugin.plugin = "de.infoware.mtiplugin";
    MtiDemoPlugin.pluginRef = "cordova.plugins.MtiDemoPlugin";
    MtiDemoPlugin.repo = "";
    MtiDemoPlugin.platforms = ["Android"];
    MtiDemoPlugin.decorators = [
        { type: Injectable }
    ];
    return MtiDemoPlugin;
}(IonicNativePlugin));
export { MtiDemoPlugin };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL210aS1kZW1vLXBsdWdpbi9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw4QkFBMEYsTUFBTSxvQkFBb0IsQ0FBQztBQUM1SCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDOztJQVVDLGlDQUFpQjs7OztJQUdsRCwrQkFBTztJQUtQLDBDQUFrQjtJQU9sQix5Q0FBaUIsYUFBQyxJQUFXLEVBQUUsSUFBVztJQUsxQyx1Q0FBZTtJQU9mLCtDQUF1QjtJQUt2QixrQ0FBVTtJQUtWLGtDQUFVO0lBT1YsNENBQW9CO0lBT3BCLHlDQUFpQjtJQU9qQixvQ0FBWTs7Ozs7OztnQkEzRGIsVUFBVTs7d0JBWlg7RUFhbUMsaUJBQWlCO1NBQXZDLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBsdWdpbiwgQ29yZG92YSwgQ29yZG92YVByb3BlcnR5LCBDb3Jkb3ZhSW5zdGFuY2UsIEluc3RhbmNlUHJvcGVydHksIElvbmljTmF0aXZlUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdNdGlEZW1vUGx1Z2luJyxcbiAgcGx1Z2luOiAnZGUuaW5mb3dhcmUubXRpcGx1Z2luJywgLy8gbnBtIHBhY2thZ2UgbmFtZSwgZXhhbXBsZTogY29yZG92YS1wbHVnaW4tY2FtZXJhXG4gIHBsdWdpblJlZjogJ2NvcmRvdmEucGx1Z2lucy5NdGlEZW1vUGx1Z2luJywgLy8gdGhlIHZhcmlhYmxlIHJlZmVyZW5jZSB0byBjYWxsIHRoZSBwbHVnaW4sIGV4YW1wbGU6IG5hdmlnYXRvci5nZW9sb2NhdGlvblxuICByZXBvOiAnJywgLy8gdGhlIGdpdGh1YiByZXBvc2l0b3J5IFVSTCBmb3IgdGhlIHBsdWdpblxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddIC8vIEFycmF5IG9mIHBsYXRmb3JtcyBzdXBwb3J0ZWQsIGV4YW1wbGU6IFsnQW5kcm9pZCcsICdpT1MnXVxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBNdGlEZW1vUGx1Z2luIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuXG4gIEBDb3Jkb3ZhKClcbiAgbXRpSW5pdCgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKClcbiAgcmVtb3ZlRGVzdGluYXRpb25zKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoe1xuICAgIGNhbGxiYWNrT3JkZXI6ICdyZXZlcnNlJ1xuICB9KVxuICBhcHBlbmREZXN0aW5hdGlvbihhcmcwOm51bWJlciwgYXJnMTpudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKClcbiAgc3RhcnROYXZpZ2F0aW9uKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoe1xuICAgIG9ic2VydmFibGU6IHRydWVcbiAgfSlcbiAgd2F0Y2hEZXN0aW5hdGlvblJlYWNoZWQoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YSgpXG4gIHNob3dTZXJ2ZXIoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YSgpXG4gIGhpZGVTZXJ2ZXIoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YSh7XG4gICAgb2JzZXJ2YWJsZTogdHJ1ZVxuICB9KVxuICB3YXRjaFJvdXRlQ2FsY3VsYXRlZCgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKHtcbiAgICBvYnNlcnZhYmxlOiB0cnVlXG4gIH0pXG4gIHdhdGNoUm91dGVTdGFydGVkKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoe1xuICAgIG9ic2VydmFibGU6IHRydWVcbiAgfSlcbiAgd2F0Y2hDb2lJbmZvKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=