var exec = require('cordova/exec');

module.exports.mtiInit = function (success, error, arg0) {
    exec(
        success,
        error,
        'MtiDemoPlugin',
        'mtiInit',
        [arg0]
    );
};
module.exports.removeDestinations = function (success, error, arg0) {
    exec(
        success,
        error,
        'MtiDemoPlugin',
        'removeDestinations',
        [arg0]
    );
};
module.exports.appendDestination = function (success, error, arg0, arg1) {
    exec(
        success,
        error,
        'MtiDemoPlugin',
        'appendDestination',
        [arg0, arg1]
    );
};
module.exports.startNavigation = function (success, error, arg0) {
    exec(
        success,
        error,
        'MtiDemoPlugin',
        'startNavigation',
        [arg0]
    );
};
module.exports.watchDestinationReached = function (success, error, arg0) {
    exec(
        success,
        error,
        'MtiDemoPlugin',
        'watchDestinationReached',
        [arg0]
    );
};
module.exports.showServer = function (success, error, arg0) {
    exec(
        success,
        error,
        'MtiDemoPlugin',
        'showServer',
        [arg0]
    );
};
module.exports.hideServer = function (success, error, arg0) {
    exec(
        success,
        error,
        'MtiDemoPlugin',
        'hideServer',
        [arg0]
    );
};
module.exports.watchRouteCalculated = function (success, error, arg0) {
    exec(
        success,
        error,
        'MtiDemoPlugin',
        'watchRouteCalculated',
        [arg0]
    );
};
module.exports.watchRouteStarted = function (success, error, arg0) {
    exec(
        success,
        error,
        'MtiDemoPlugin',
        'watchRouteStarted',
        [arg0]
    );
};
module.exports.watchCoiInfo = function (success, error, arg0) {
    exec(
        success,
        error,
        'MtiDemoPlugin',
        'watchCoiInfo',
        [arg0]
    );
};
