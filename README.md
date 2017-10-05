# Embed Youtube Module for [MagicMirror](https://github.com/MichMich/MagicMirror)

v1.2.1

## Using this module
To use this module, add it to the modules array in the config/config.js file:
```
modules: [
	{
		module: "MMM-EmbedYoutube", // Path to youtube module from modules folder Exmaple: MagicMirror/modules/custom/MMM-EmbedYoutube/ so it's custom/MMM-EmbedYoutube
		position: "bottom_bar",	// This can be any of the regions.
		config: {
			// See 'Configuration options' for more information.
			video_id: "w3jLJU7DT5E"
		}
	}
]
```
## Configuration
The following properties are require for configured:

| Config | Description
| ------ | ---------------------------------------------------------------------
| `video_id`| Youtube video id to display. You can get it from youtube url <br> **Example:** `https://www.youtube.com/watch?v=w3jLJU7DT5E` <br>**video_id:** w3jLJU7DT5E


## Optional configuration
The following properties can be configured:

| Option | Description
| ------ | ---------------------------------------------------------------------
| `autoplay` | Autoplay video when it loaded <br> **Default:** ``false``
| `color` | Player's video progress bar to highlight the amount of the video that the viewer has already seen but color can be only `red` or `white` <br> **Default:** ``"red"``
| `controls` | Show youtube video controls bar <br> **Default:** ``true``
| `disablekb` | Disable keyboard control <br> **Default:** ``false``
| `fs` | Displaying fullscreen button in player <br> **Default:** ``true``
| `loop` | Auto-play video again <br> **Default:** ``false``
| `modestbranding` | Prevent the Youtube logo displaying in the controlbar. But Youtube text label still display in the upper-right cornner of a paused video when the user's mouse pointer hovers over the player. <br> **Default:** ``false``
| `rel` | Show related video at the end of video <br> **Default:** ``false``
| `showinfo` | Show video title and uploader <br> **Default:** ``false``
| `width` | Video width <br> **Default:** ``560``
| `height` | Video height <br> **Default:** ``315``

## License
MIT Copyright (c) 2017 Nitipoom Unrrom (aka nitpum)