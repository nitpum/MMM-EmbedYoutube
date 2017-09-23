
/* Magic Mirror
 * Module: Embed Youtube
 * 
 * By Nitipoom Unrrom (aka nitpum) https://nitpum.com
 * MIT Licensed.
 */
Module.register("youtube", {
	defualts: {
		autoplay: false,
		loop: false,
		controls : true,
		rel : false,
		showinfo : false,
		width: 560,
		height: 315,
		video_id : "",
	},
	getDom: function () {
		var wrapper = document.createElement("div");

		// Parameter
		var params = "?";
		params += (this.config.autoplay) ? "autoplay=1" : "autoplay=0";
		params += (this.config.loop) ? "&loop=1&playlist=" + this.config.video_id : "";
		params += (this.config.controls)? "&controls=1":"&controls=0";
		params += (this.config.rel)? "&rel=1": "&rel=0";
		params += (this.config.showinfo)? "&showinfo=1": "&showinfo=0";

		wrapper.innerHTML = "<iframe width=\"" + this.config.width +"\" height=\"" + this.config.height + "\" src=\"https://www.youtube.com/embed/" + this.config.video_id + params +"\" frameborder=\"0\" allowfullscreen></iframe>";
		return wrapper;
	}
});
