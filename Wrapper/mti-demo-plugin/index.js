var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { IonicNativePlugin, cordova } from '@ionic-native/core';
import { Observable } from 'rxjs';
var MtiDemoPluginOriginal = /** @class */ (function (_super) {
    __extends(MtiDemoPluginOriginal, _super);
    function MtiDemoPluginOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MtiDemoPluginOriginal.prototype.mtiInit = function () { return cordova(this, "mtiInit", {}, arguments); };
    MtiDemoPluginOriginal.prototype.removeDestinations = function () { return cordova(this, "removeDestinations", {}, arguments); };
    MtiDemoPluginOriginal.prototype.appendDestination = function (arg0, arg1) { return cordova(this, "appendDestination", { "callbackOrder": "reverse" }, arguments); };
    MtiDemoPluginOriginal.prototype.startNavigation = function () { return cordova(this, "startNavigation", {}, arguments); };
    MtiDemoPluginOriginal.prototype.watchDestinationReached = function () { return cordova(this, "watchDestinationReached", { "observable": true }, arguments); };
    MtiDemoPluginOriginal.prototype.showServer = function () { return cordova(this, "showServer", {}, arguments); };
    MtiDemoPluginOriginal.prototype.hideServer = function () { return cordova(this, "hideServer", {}, arguments); };
    MtiDemoPluginOriginal.prototype.watchRouteCalculated = function () { return cordova(this, "watchRouteCalculated", { "observable": true }, arguments); };
    MtiDemoPluginOriginal.prototype.watchRouteStarted = function () { return cordova(this, "watchRouteStarted", { "observable": true }, arguments); };
    MtiDemoPluginOriginal.prototype.watchCoiInfo = function () { return cordova(this, "watchCoiInfo", { "observable": true }, arguments); };
    MtiDemoPluginOriginal.pluginName = "MtiDemoPlugin";
    MtiDemoPluginOriginal.plugin = "de.infoware.mtiplugin";
    MtiDemoPluginOriginal.pluginRef = "cordova.plugins.MtiDemoPlugin";
    MtiDemoPluginOriginal.repo = "";
    MtiDemoPluginOriginal.platforms = ["Android"];
    return MtiDemoPluginOriginal;
}(IonicNativePlugin));
var MtiDemoPlugin = new MtiDemoPluginOriginal();
export { MtiDemoPlugin };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL210aS1kZW1vLXBsdWdpbi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBRUEsT0FBTyw4QkFBMEYsTUFBTSxvQkFBb0IsQ0FBQztBQUM1SCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDOztJQVVDLGlDQUFpQjs7OztJQUdsRCwrQkFBTztJQUtQLDBDQUFrQjtJQU9sQix5Q0FBaUIsYUFBQyxJQUFXLEVBQUUsSUFBVztJQUsxQyx1Q0FBZTtJQU9mLCtDQUF1QjtJQUt2QixrQ0FBVTtJQUtWLGtDQUFVO0lBT1YsNENBQW9CO0lBT3BCLHlDQUFpQjtJQU9qQixvQ0FBWTs7Ozs7O3dCQXZFZDtFQWFtQyxpQkFBaUI7U0FBdkMsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGx1Z2luLCBDb3Jkb3ZhLCBDb3Jkb3ZhUHJvcGVydHksIENvcmRvdmFJbnN0YW5jZSwgSW5zdGFuY2VQcm9wZXJ0eSwgSW9uaWNOYXRpdmVQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ010aURlbW9QbHVnaW4nLFxuICBwbHVnaW46ICdkZS5pbmZvd2FyZS5tdGlwbHVnaW4nLCAvLyBucG0gcGFja2FnZSBuYW1lLCBleGFtcGxlOiBjb3Jkb3ZhLXBsdWdpbi1jYW1lcmFcbiAgcGx1Z2luUmVmOiAnY29yZG92YS5wbHVnaW5zLk10aURlbW9QbHVnaW4nLCAvLyB0aGUgdmFyaWFibGUgcmVmZXJlbmNlIHRvIGNhbGwgdGhlIHBsdWdpbiwgZXhhbXBsZTogbmF2aWdhdG9yLmdlb2xvY2F0aW9uXG4gIHJlcG86ICcnLCAvLyB0aGUgZ2l0aHViIHJlcG9zaXRvcnkgVVJMIGZvciB0aGUgcGx1Z2luXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJ10gLy8gQXJyYXkgb2YgcGxhdGZvcm1zIHN1cHBvcnRlZCwgZXhhbXBsZTogWydBbmRyb2lkJywgJ2lPUyddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE10aURlbW9QbHVnaW4gZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG5cbiAgQENvcmRvdmEoKVxuICBtdGlJbml0KCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoKVxuICByZW1vdmVEZXN0aW5hdGlvbnMoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YSh7XG4gICAgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnXG4gIH0pXG4gIGFwcGVuZERlc3RpbmF0aW9uKGFyZzA6bnVtYmVyLCBhcmcxOm51bWJlcik6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoKVxuICBzdGFydE5hdmlnYXRpb24oKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YSh7XG4gICAgb2JzZXJ2YWJsZTogdHJ1ZVxuICB9KVxuICB3YXRjaERlc3RpbmF0aW9uUmVhY2hlZCgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKClcbiAgc2hvd1NlcnZlcigpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKClcbiAgaGlkZVNlcnZlcigpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKHtcbiAgICBvYnNlcnZhYmxlOiB0cnVlXG4gIH0pXG4gIHdhdGNoUm91dGVDYWxjdWxhdGVkKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoe1xuICAgIG9ic2VydmFibGU6IHRydWVcbiAgfSlcbiAgd2F0Y2hSb3V0ZVN0YXJ0ZWQoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YSh7XG4gICAgb2JzZXJ2YWJsZTogdHJ1ZVxuICB9KVxuICB3YXRjaENvaUluZm8oKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==