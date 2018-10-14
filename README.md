# Embed Youtube Module for [MagicMirror](https://github.com/MichMich/MagicMirror)

v1.2.2

## Using this module
To use this module, add it to the modules array in the config/config.js file:
```js
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
The following properties are required for configuration:

| Config | Description
| ------ | ---------------------------------------------------------------------
| `video_id`| Youtube video id to display. You can get it from youtube url <br> **Example:** `https://www.youtube.com/watch?v=w3jLJU7DT5E` <br>**video_id:** w3jLJU7DT5E


## Optional configuration
The following properties can be configured:

| Option | Description	| Default Value | Type Data
| ------ | --------------------------------------------------------------------- | ------- | ------
| `autoplay` | Autoplay video when it loaded | ``false`` | Boolean
| `color` | Player's video progress bar to highlight the amount of the video that the viewer has already seen but color can be only `red` or `white` | ``"red"`` | String
| `controls` | Show youtube video controls bar | ``true`` | Boolean
| `disablekb` | Disable keyboard control | ``false`` | Boolean
| `fs` | Displaying fullscreen button in player | ``true`` | Boolean
| `loop` | Auto-play video again | ``false`` | Boolean
| `modestbranding` | Prevent the Youtube logo displaying in the controlbar. But Youtube text label still display in the upper-right cornner of a paused video when the user's mouse pointer hovers over the player. | ``false`` | Boolean
| `rel` | Show related video at the end of video | ``false`` | Boolean
| `showinfo` | Show video title and uploader | ``false`` | Boolean
| `width` | Video width | ``560`` | Integer
| `height` | Video height | ``315`` | Integer

## License
MIT Copyright (c) 2017 Nitipoom Unrrom (aka nitpum)