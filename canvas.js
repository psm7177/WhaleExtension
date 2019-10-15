let filter = document.createElement("canvas");
var color ="";
filter.width = 1920;
filter.height = 1080;

filter.style.position = "fixed";
filter.style.zIndex = "100";
filter.style.pointerEvents = "none";

document.body.prepend(filter);