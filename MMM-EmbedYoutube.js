
/* Magic Mirror
 * Module: Embed Youtube
 * 
 * v 1.3.0
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
		video_list: []
	},
	getDom: function () {
		var wrapper = document.createElement("div");

		// Parameter
		var params = "?";

		var videoList = "";
		if (this.config.video_list && this.config.video_list.length > 0) {
			videoList = "&playlist=";
			for (var i = 0; i < this.config.video_list.length; i++) videoList += this.config.video_list[i];
		}
		params += (this.config.autoplay) ? "autoplay=1" : "autoplay=0";
		params += (this.config.color != "red")? "&color=" + this.config.color:"";
		params += (this.config.controls)? "&controls=1":"&controls=0";
		params += (this.config.disablekb)? "&disablekb=1":"";
		params += (this.config.fs)? "":"&fs=0";
		params += (videoList != "") ? videoList : "";
		params += (this.config.loop) ? "&loop=1" : "";
		params += (this.config.modestbranding) ? "&modestbranding=1" : "";
		params += (this.config.rel)? "&rel=1": "&rel=0";
		params += (this.config.showinfo)? "&showinfo=1": "&showinfo=0";

		wrapper.innerHTML = "<iframe width=\"" + this.config.width +"\" height=\"" + this.config.height + "\" src=\"https://www.youtube.com/embed/" + this.config.video_id + params +"\" frameborder=\"0\" allowfullscreen></iframe>";
		return wrapper;
	}
});
