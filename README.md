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
			video_id: "w3jLJU7DT5E"
		}
	}
]
```

## Configuration options
The following properties can be configured:

| Option | Description
| ------ | ---------------------------------------------------------------------
| `video_id`| Youtube video id to display. You can get it from youtube url <br> **Exmaple:** `https://www.youtube.com/watch?v=w3jLJU7DT5E` <br>**video_id:** w3jLJU7DT5E
| `autoplay` | Autoplay video when it loaded <br> **Default:** ``false``
| `controls` | Show youtube video controls bar <br> **Default:** ``true``
| `loop` | Play video again <br> **Default:** ``false``
| `rel` | Show related video at the end of video <br> **Default:** ``false``
| `showinfo` | Show video title and uploader <br> **Default:** ``false``
| `width` | Video width <br> **Default:** ``560``
| `height` | Video height <br> **Default:** ``315``

## License
MIT Copyright (c) 2017 Nitipoom Unrrom (aka nitpum)