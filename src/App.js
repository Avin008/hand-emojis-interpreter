import React, { useState } from "react";
import "./styles.css";

const emojisDix = {
  "👋": "Waving Hand",
  "🤚": "Raised Back of Hand",
  "✌️": "Victory Hand",
  "🤞": "Crossed Fingers",
  "🤟": "Love-You Gesture",
  "👍": "Thumbs Up",
  "👎": "Thumbs Down",
  "✊": "Raised Fist",
  "👏": "Clapping Hands",
  "🙌": "Raising Hands",
  "🤝": "Handshake",
  "🙏": "Folded Hands",
  "🤳": "Selfie",
  "💪": "Flexed Bicepss",
  "✍️": "Writing Hand",
  "👊": "Oncoming Fist",
  "🤙": "Call Me Hand"
};

let emojisArr = Object.keys(emojisDix);

export default function App() {
  function onclickHandler(index) {
    let value = emojisDix[index];
    setInput(value);
  }

  function checkinput(input) {
    if (input === "") {
      return `Please Enter or Click on the Hand emojis below to know their meaning`;
    } else {
      return emojisDix[input];
    }
  }

  const [input, setInput] = useState(
    "Please Enter or Click on the Hand emojis below to know their meaning"
  );
  function changeHandler(e) {
    let input = e.target.value;
    if (checkinput(input) === undefined) {
      setInput(`we don't have this in our database`);
    } else {
      setInput(checkinput(input));
    }
  }

  return (
    <div className="App">
      <h1>Hand Emoji Interpreter</h1>

      <input
        placeholder="Enter your Hand emoji here"
        style={{ padding: "1rem", width: "40%" }}
        onChange={changeHandler}
      />
      <div style={{ padding: "1rem", fontWeight: "bold", fontSize: "1rem" }}>
        {" "}
        {input}
      </div>
      <hr />
      <h2>Hand Emojis we know</h2>
      <div style={{ width: "50%", margin: "auto" }}>
        <ul>
          {emojisArr.map((item) => {
            return (
              <li
                onClick={() => onclickHandler(item)}
                key={item}
                style={{
                  display: "inline-block",
                  padding: "1rem",
                  fontSize: "2rem",
                  cursor: "pointer"
                }}
              >
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
