import React from "react";

function Profile({ params }: any): JSX.Element {
    return (
        <div className="text-6xl flex flex-col items-center  justify-center h-screen w-screen">
            Profile URL : {JSON.stringify(params)}
        </div>
    );
}

export default Profile;
