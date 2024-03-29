import React from "react";
import Image from "next/image";
import Link from "next/link";

const CatEvent = ({ data, pageName }) => {
  return (
    <div className="cat_events">
      <h1>Events in {pageName}</h1>
      <div className="content">
        {data.map((ev) => (
          <Link
            className="card"
            key={ev.id}
            href={`/events/${ev.city}/${ev.id}`}
          >
            <Image src={ev.image} alt={ev.title} fill={true} />
            <h2>{ev.title}</h2>
            <p>{ev.description}</p>
            <div className="button">More Info</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CatEvent;
