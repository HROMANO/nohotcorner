/* 
Version 5 :
- update for 3.8

Version 4 :
- update for 3.6

Version 3 :
- disables all topleft hot corners on multiscreens [PierreBdR]
*/

const Main = imports.ui.main;
let _id;

function _destroy_hot_corners() {
    // Destroys all hot corners
    Main.layoutManager.hotCorners.forEach(function(hot_corner) { hot_corner.destroy(); });
    Main.layoutManager.hotCorners = [];
}

function init() {
}

function enable() {
	_destroy_hot_corners();
	/* 
		Hot corners may be re-created afterwards (for example, If there's a monitor change). 
		So we catch all changes.
		If it conflicts with another extension adding hotcorners, it could be replaced by :
		_id = Main.layoutManager.connect('monitors-changed', _destroy_hot_corners);
	*/
	_id = Main.layoutManager.connect('hot-corners-changed', _destroy_hot_corners);
} 

function disable() {
	// Disconnects the callback and re-creates the hot corners
	Main.layoutManager.disconnect(_id);
	Main.layoutManager._updateHotCorners();
}

