/* Version 4 :
- update for 3.6

Version 3 :
- disables all topleft hot corners on multiscreens [PierreBdR]
*/

const Main = imports.ui.main;

function init() {
}

function enable() { 
   Main.panel.statusArea['activities'].hotCorner._corner.hide();
   
   /* Should disable hotcorners in multiscreen configurations (thanks PierreBdR).
   Can't try as I only have one screen and the array _hotCorners is always empty
   (though it's a bit strange). */
   Main.layoutManager._hotCorners.forEach(function(hotCorner) { hotCorner._corner.hide(); });
} 

function disable() { 
   Main.panel.statusArea['activities'].hotCorner._corner.show();
   Main.layoutManager._hotCorners.forEach(function(hotCorner) { hotCorner._corner.show(); }); 
}

