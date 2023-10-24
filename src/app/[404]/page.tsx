"use client";

import { useParams } from "next/navigation";
import React from "react";

function Error404() {
    const currentRoute = useParams();

    return (
        <div className="text-6xl flex flex-col items-center  justify-center h-screen w-screen">
            There is no route for : {JSON.stringify(currentRoute)}
        </div>
    );
}

export default Error404;
