"use strict";
function applyEnvelope() {
    if (synthesizerWorkbench.modules.envelope.timeTable.attack.type == "linear") {
        synthesizerWorkbench.modules.envelope.components.gain.component.gain.linearRampToValueAtTime(synthesizerWorkbench.modules.envelope.timeTable.attack.amplitude, synthesizerWorkbench.audioContext.currentTime
            + synthesizerWorkbench.modules.envelope.timeTable.attack.time);
    }
    else if (synthesizerWorkbench.modules.envelope.timeTable.attack.type == "exponential") {
        synthesizerWorkbench.modules.envelope.components.gain.component.gain.setTargetAtTime(synthesizerWorkbench.modules.envelope.timeTable.attack.amplitude, synthesizerWorkbench.audioContext.currentTime, synthesizerWorkbench.modules.envelope.timeTable.attack.time);
    }
    ;
    if (synthesizerWorkbench.modules.envelope.timeTable.decay.type == "linear") {
        synthesizerWorkbench.modules.envelope.components.gain.component.gain.linearRampToValueAtTime(synthesizerWorkbench.modules.envelope.timeTable.decay.amplitude, synthesizerWorkbench.audioContext.currentTime
            + synthesizerWorkbench.modules.envelope.timeTable.attack.time
            + synthesizerWorkbench.modules.envelope.timeTable.decay.time);
    }
    else if (synthesizerWorkbench.modules.envelope.timeTable.decay.type == "exponential") {
        synthesizerWorkbench.modules.envelope.components.gain.component.gain.setTargetAtTime(synthesizerWorkbench.modules.envelope.timeTable.decay.amplitude, synthesizerWorkbench.audioContext.currentTime
            + synthesizerWorkbench.modules.envelope.timeTable.attack.time, synthesizerWorkbench.modules.envelope.timeTable.decay.time);
    }
    ;
    if (synthesizerWorkbench.modules.envelope.timeTable.sustain.type == "linear") {
        synthesizerWorkbench.modules.envelope.components.gain.component.gain.linearRampToValueAtTime(synthesizerWorkbench.modules.envelope.timeTable.sustain.amplitude, synthesizerWorkbench.audioContext.currentTime
            + synthesizerWorkbench.modules.envelope.timeTable.attack.time
            + synthesizerWorkbench.modules.envelope.timeTable.decay.time
            + synthesizerWorkbench.modules.envelope.timeTable.sustain.time);
    }
    else if (synthesizerWorkbench.modules.envelope.timeTable.sustain.type == "exponential") {
        synthesizerWorkbench.modules.envelope.components.gain.component.gain.setTargetAtTime(synthesizerWorkbench.modules.envelope.timeTable.sustain.amplitude, synthesizerWorkbench.audioContext.currentTime
            + synthesizerWorkbench.modules.envelope.timeTable.attack.time
            + synthesizerWorkbench.modules.envelope.timeTable.decay.time, synthesizerWorkbench.modules.envelope.timeTable.sustain.time);
    }
    ;
    if (synthesizerWorkbench.modules.envelope.timeTable.release.type == "linear") {
        synthesizerWorkbench.modules.envelope.components.gain.component.gain.linearRampToValueAtTime(synthesizerWorkbench.modules.envelope.timeTable.release.amplitude, synthesizerWorkbench.audioContext.currentTime
            + synthesizerWorkbench.modules.envelope.timeTable.attack.time
            + synthesizerWorkbench.modules.envelope.timeTable.decay.time
            + synthesizerWorkbench.modules.envelope.timeTable.sustain.time
            + synthesizerWorkbench.modules.envelope.timeTable.release.time);
    }
    else if (synthesizerWorkbench.modules.envelope.timeTable.release.type == "exponential") {
        synthesizerWorkbench.modules.envelope.components.gain.component.gain.setTargetAtTime(synthesizerWorkbench.modules.envelope.timeTable.release.amplitude, synthesizerWorkbench.audioContext.currentTime
            + synthesizerWorkbench.modules.envelope.timeTable.attack.time
            + synthesizerWorkbench.modules.envelope.timeTable.decay.time
            + synthesizerWorkbench.modules.envelope.timeTable.sustain.time, synthesizerWorkbench.modules.envelope.timeTable.release.time);
    }
    ;
}
//# sourceMappingURL=envelope.js.map