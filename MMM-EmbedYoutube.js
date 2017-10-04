
/* Magic Mirror
 * Module: Embed Youtube
 * 
 * v 1.2.1
 * 
 * By Nitipoom Unrrom (aka nitpum) https://nitpum.com
 * MIT Licensed.
 */
Module.register("MMM-EmbedYoutube", {
	defualts: {
		autoplay: false,
		color: "red",
		controls : true,
		disablekb: false,
		fs: true,
		height: 315,
		width: 560,
		loop: false,
		modestbranding: false,
		rel : false,
		showinfo : false,
		video_id : "",
	},
	getDom: function () {
		var wrapper = document.createElement("div");

		// Parameter
		var params = "?";
		params += (this.config.autoplay) ? "autoplay=1" : "autoplay=0";
		params += (this.config.color != "red")? "&color=" + this.config.color:"";
		params += (this.config.controls)? "&controls=1":"&controls=0";
		params += (this.config.disablekb)? "&disablekb=1":"";
		params += (this.config.fs)? "":"&fs=0";
		params += (this.config.loop) ? "&loop=1&playlist=" + this.config.video_id : "";
		params += (this.config.modestbranding) ? "&modestbranding=1" : "";
		params += (this.config.rel)? "&rel=1": "&rel=0";
		params += (this.config.showinfo)? "&showinfo=1": "&showinfo=0";

		wrapper.innerHTML = "<iframe width=\"" + this.config.width +"\" height=\"" + this.config.height + "\" src=\"https://www.youtube.com/embed/" + this.config.video_id + params +"\" frameborder=\"0\" allowfullscreen></iframe>";
		return wrapper;
	}
});
