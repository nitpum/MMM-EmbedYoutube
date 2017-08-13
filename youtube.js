Module.register("youtube", {
	defualts: {
		autoplay: false,
		showplayercontrol : true,
		showsuggestedvideo : false,
		showtitle : false,
		width: 560,
		height: 315,
		watch : "",
	},
	getDom: function () {
		var wrapper = document.createElement("div");
		var GET = "?";

        // autoplay
		GET += (this.config.autoplay) ? "autoplay=1" : "autoplay=0";
		GET += (this.config.showplayercontrol)? "&controls=1":"&controls=0";
		GET += (this.config.showsuggestedvideo)? "&rel=1":"&rel=0";
		GET += (this.config.showtitle)? "&showinfo=1":"&showinfo=0";

		wrapper.innerHTML = "<iframe width=\"" + this.config.width +"\" height=\"" + this.config.height + "\" src=\"https://www.youtube.com/embed/" + this.config.watch + GET +"\" frameborder=\"0\" allowfullscreen></iframe>";
		return wrapper;
	}
});
