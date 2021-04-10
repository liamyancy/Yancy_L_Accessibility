export default {
    name: "VideoComponent",

    template: `
         <section class="video-player">
            <h3 class="movie-title">Whiplash</h3>
            <video src="video/Whiplash.mp4" controls><track kind="subtitles" srclang="en" src="captions/Whiplash.vtt" label="English" default /></video>
            <h3>October 16, 2014</h3>
            <p>Andrew enrols in a music conservatory to become a drummer. But he is mentored by Terence Fletcher, whose unconventional training methods push him beyond the boundaries of reason and sensibility.</p>
            <h3 class="movie-title">Logan</h3>
            <video src="video/Logan.mp4" controls><track kind="subtitles" srclang="en" src="captions/logantext.vtt" label="English" default /></video>
            <h3>March 1, 2017</h3>
            <p>Logan comes out of retirement to escort a young mutant named Laura to a safe place. He meets with other mutants, who run from an evil corporation that has been experimenting with them, along the way.</p>
        </section>`
}