# Embed Youtube Module for [MagicMirror](https://github.com/MichMich/MagicMirror)


## Using this module
To use this module, add it to the modules array in the config/config.js file:
```
modules: [
	{
		module: "youtube", // Path to youtube module from modules folder Exmaple: MagicMirror/modules/custom/youtube/ so it's custom/youtube
		position: "bottom_bar",	// This can be any of the regions.
		config: {
			// See 'Configuration options' for more information.
			watch: "w3jLJU7DT5E"
		}
	}
]
```

## Configuration options
The following properties can be configured:
| Option | Description
| ------ | -----------
| `watch`| Youtube id to display. You can get it from youtube url <br> **Exmaple:** `https://www.youtube.com/watch?v=w3jLJU7DT5E` <br>**watch:** w3jLJU7DT5E
| `autoplay` | Autoplay video when it loaded <br> **Default:** ``false``
| `showplayercontrol` | Show youtube video control bar <br> **Default:** ``true``
| `showsuggestedvideo` | Show suggested video at the end of video <br> **Default:** ``false``
| `showtitle` | Show video title <br> **Default:** ``false``
| `width` | Video width <br> **Default:** ``560``
| `height` | Video height <br> **Default:** ``315``