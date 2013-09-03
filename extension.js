const Main = imports.ui.main;

function init(metadata) {
}

function enable() {
   Main.panel._activitiesButton._hotCorner._corner.hide();
}

function disable() {
   Main.panel._activitiesButton._hotCorner._corner.show();
}
