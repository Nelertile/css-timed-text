# CSS-TIMED-TEXT
A quick little css+ts animation demo


### SETUP
This project uses Vite as the build tool.
To get it going just do ''the usual,,
```
npm install
npm run dev
```

### MODIFICATION
Audio assets are placed in `public/`. If you need to change the audio remember to change `audio.src` in `src/main.ts`.

The lyrics itself is contained within `src/lyrics.ts`, from there you can edit the actual `lyrics` array.

**Important**
We're taking advantage of TypeScript here to enforce the text formats. If you have any additional fields you would like to use add another entry inside the `interface lyric {...}`

You can then modify the template in line 15 on `src/lyrics.ts`

To animate things simply update `style.css`. There are two selectors on there,
```css
.text-container {
    ...
}
```
and
```css
.text-container:not(.active) {
    ...
}
```
As you can probably guess, the one with `:not(.active)` selector is the one meant to be hidden. I highly encourage you to play around with the animation settings. You have the full power of CSS here.