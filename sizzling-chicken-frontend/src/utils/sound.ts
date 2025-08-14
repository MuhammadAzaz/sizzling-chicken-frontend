// ============================== src/utils/sound.ts ===========================
export function playOrderSound(): void {
    try {
      const AudioCtx = (window as any).AudioContext || (window as any).webkitAudioContext;
      const audio = new AudioCtx();
      const osc = audio.createOscillator();
      const gain = audio.createGain();
      osc.connect(gain); gain.connect(audio.destination);
      osc.frequency.setValueAtTime(800, audio.currentTime);
      osc.frequency.exponentialRampToValueAtTime(400, audio.currentTime + 0.1);
      gain.gain.setValueAtTime(0, audio.currentTime);
      gain.gain.linearRampToValueAtTime(0.1, audio.currentTime + 0.01);
      gain.gain.exponentialRampToValueAtTime(0.001, audio.currentTime + 0.1);
      osc.start(audio.currentTime); osc.stop(audio.currentTime + 0.1);
    } catch {
      // ignore
    }
  }