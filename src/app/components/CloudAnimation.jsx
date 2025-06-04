import React from "react";
import SVGCloud from "./SVGCloud";

function CloudAnimation() {
    return (
        <div>
            <SVGCloud top="4rem" size={160} duration="60s" opacity={0.8} />
            <SVGCloud top="10rem" size={220} duration="90s" opacity={0.7} />
            <SVGCloud top="16rem" size={140} duration="120s" opacity={0.6} />
        </div>
    );
}

export default CloudAnimation;
