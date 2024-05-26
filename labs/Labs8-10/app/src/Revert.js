import React, { useState, useEffect } from "react";

export function Revert({t}) {
    const [s, transform] = useState(t);
    useEffect(() => {
        const interval = setInterval(() => {
            transform(prev => {
                let tmp = prev[prev.length - 1];
                let stmp = prev.slice(0, -1);
                return tmp + stmp;
            });
        }, 1000)
        return () => clearInterval(interval);
    }, [])
    return <div>{s}</div>;
}