import React, { useEffect, useState } from "react";

export default function Cards({ array, removeCard }) {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {array.map((val) => {
            if (!val.text) return null;
            return <Card key={val.createdAt} val={val} removeCard={removeCard} />;
          })}
        </div>
      </div>
    </section>
  );
}

function Card({ val, removeCard }) {
  const [timer, setTimer] = useState(10);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer <= 1) {
          clearInterval(interval);
          removeCard(val.createdAt);
          return 0;
        }
        return prevTimer - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [val.createdAt, removeCard]);

  return (
    <div className="p-4 lg:w-1/3">
      <div
        style={{ backgroundColor: val.bgColor }}
        className="h-full bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative"
      >
        <h1 style={{ color: val.color }} className="title-font sm:text-2xl text-xl font-medium mb-3">
          {val.text}
        </h1>
        <h1 className="text-2xl">{timer} s</h1>
      </div>
    </div>
  );
}
