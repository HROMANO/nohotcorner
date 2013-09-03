/* Version 3 :
- disables all topleft hot corners on multiscreens [PierreBdR]
*/

const Main = imports.ui.main;

function init(metadata) {
}

function enable() { 
	Main.panel._activitiesButton._hotCorner._corner.hide(); 
    Main.layoutManager._hotCorners.forEach(function(hotCorner) { hotCorner._corner.hide(); }); 
} 

function disable() { 
    Main.panel._activitiesButton._hotCorner._corner.show(); 
    Main.layoutManager._hotCorners.forEach(function(hotCorner) { hotCorner._corner.show(); }); 
}
