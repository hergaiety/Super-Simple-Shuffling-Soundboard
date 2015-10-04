# Super Simple Shuffling Soundboard

### Oh my! What is it exactly?

---

The objective of this repo is to be a very simple soundboard with a random shuffle between sounds/music feature.

---

### How to use

1. Download (or clone) this repo.
2. Save any sound effects and music you wish to use into your `sounds` directory.
3. Open `index.html` in your web browser and a text editor/IDE.
4. Make groups of `<div class="sounds">` just like the examples given.

### Example:

```
<div class="sounds play">
    <button class="play"><i class="fa fa-play fa-lg"></i></button>
    <button class="pause"><i class="fa fa-pause fa-lg"></i></button>

    <h3>Classical</h3>

    <audio src="sounds/music/corta_jaca_tango.mp3"></audio>
    <audio src="sounds/music/scott_joplin_kismet_rag.mp3"></audio>
    <audio src="sounds/music/scott_joplin_the_nonparell.mp3"></audio>
</div>
```

In an effort to keep the javascript as simple as possible, the "play" class on the divs is necessary, as are the play and pause buttons.

---

#### Credits

Thanks to FontAwesome, jQuery, and HTML Boilerplate.
