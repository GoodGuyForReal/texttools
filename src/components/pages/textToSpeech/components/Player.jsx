import React, { useState } from "react";

export function AudioPlayer({ audioSrc }) {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = React.useRef(new Audio(audioSrc));

    const togglePlayPause = () => {
        setIsPlaying(!isPlaying);
        isPlaying ? audioRef.current.pause() : audioRef.current.play();
    };

    const handleTimeUpdate = () => {
        console.log(`Time elapsed: ${audioRef.current.currentTime}`);
    };

    return (
        <div>
            <button onClick={togglePlayPause}>{isPlaying ? "Pause" : "Play"}</button>
            <audio
                src={audioSrc}
                ref={audioRef}
                onTimeUpdate={handleTimeUpdate}
            />
        </div>
    );
}
