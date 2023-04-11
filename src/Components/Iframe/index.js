import React from "react";

function Iframe(props) {
    return (
        <div>
            <iframe src={props.src} width={props.width} height={props.height} />
        </div>
    );
}

export default Iframe;
