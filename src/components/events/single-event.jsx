import React, { useState, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

const SingleEvent = ({ data }) => {
  const inputEmail = useRef();
  console.log(inputEmail);
  const router = useRouter();
  const [message, setMessage] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    const emailValue = inputEmail.current.value;
    const eventId = router?.query.id;

    const validRegex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+\.[a-zA-z]{2,3}$/;

    if (!emailValue.match(validRegex)) {
      setMessage("Please use a valid email address");
    }

    try {
      const response = await fetch("/api/email-registration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: emailValue, eventId }),
      });

      if (!response.ok) throw new Error(`Error: ${response.status}`);
      const data = await response.json();
      setMessage(data.message);
      inputEmail.current.value = "";
    } catch (e) {
      console.log("ERROR", e);
    }
  };

  return (
    <div className="event_single_page">
      <h1>{data.title}</h1>
      <Image src={data.image} width={600} height={300} alt={data.title} />
      <p>{data.description}</p>
      <form onSubmit={onSubmit} className="register" action="">
        <label>Register for this event!</label>
        <div>
          <input
            ref={inputEmail}
            type="email"
            id="email"
            placeholder="Email Address"
          />
          <button type="submit">Submit</button>
        </div>
      </form>
      <p>{message}</p>
    </div>
  );
};

export default SingleEvent;
