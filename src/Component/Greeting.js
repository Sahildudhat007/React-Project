import React from "react";

const Greeting = () => {

    let curDate = new Date();
    curDate = curDate.getHours();
    let greeting = "";
    let clr;

    if (curDate >= 1 && curDate < 12) {
        clr = {color : 'yellow'}
        greeting = "Good Morning";
    }
    else if (curDate >= 12 && curDate < 19) {
        clr = {color : 'orange'}
        greeting = "Good Afternoon";
    }
    else {
        greeting = "Good Night";
    }

    return (
        <div className="">
            <h1 className="text-3xl m-auto font-bold text-white flex justify-center items-center absolute top-[40%] left-[32%] outline-2 outline-double px-16 py-6 rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">Hello Sir, <span className="text-red-500 mx-2" style={clr}>{greeting}</span> </h1>
        </div>
    )
}

export default Greeting;