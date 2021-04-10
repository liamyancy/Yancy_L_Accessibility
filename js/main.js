import AudioComponent from "./components/TheAudioComponent.js";
import VideoComponent from "./components/TheVideoComponent.js";

(() => {
    const myVM = new Vue({
        data: {
            activeComponent: AudioComponent,
        },

        methods: {
            switchComponents() {
                // debugger;

                this.activeComponent = (this.activeComponent.name === "VideoComponent") ? AudioComponent : VideoComponent;

                // this.doSomethingElse();
            },

            doSomethingElse() {
                // whatever
                debugger;
            }
        }
    }).$mount("#app");
})();