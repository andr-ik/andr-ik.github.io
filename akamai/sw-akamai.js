
function getYmid() {
    try {
        return new URL(location.href).searchParams.get('ymid');
    } catch (e) {
        console.warn(e);
    }
    return null;
}
function getVar() {
    try {
        return new URL(location.href).searchParams.get('var');
    } catch (e) {
        console.warn(e);
    }
    return null;
}

function getZone() {
    try {
        return new URL(location.href).searchParams.get('zone');
    } catch (e) {
        console.warn(e);
    }
    return null;
}
self.options = {
    "domain": "core-stg04.rtty.in",
    "resubscribeOnInstall": true,
    "zoneId": getZone(),
    "ymid": getYmid(),
    "var": getVar()
}
self.lary = "";
importScripts('https://core-stg04.rtty.in/pfe/current/sw.perm.check.min.js?r=sw');
