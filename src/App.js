import React, { useState } from "react";
import "./styles.css";
// var userName= prompt("Give me your name")
const faceEmojiDictionary = {
  "😊": "Smiling Face with Smiling Eyes",
  "😜": "Winking Face with Tongue",
  "🤣": "Rolling on the Floor Laughing",
  "😏": "Smirking Face",
  "😒": "Unamused Face",
  "😑": "Expressionless Face",
   "😩": "Weary Face",
  "😫": "Tired Face",
  "😈": "Smiling Face with Horns",
  "😖": "Confounded Face",
"😣": "Persevering Face",
"😞": "Disappointed Face"
};
const emojis = Object.keys(faceEmojiDictionary);

export default function App() {
  // const [likeCounter, setLikeCounter] = useState(0);
  // function likeClickHandler() {
  //   setLikeCounter(likeCounter + 1);
  // (ex:7&8)}

  const [meaning, setMeaning] = useState("Translation will appear here.");
  function userInputEventHandler(event) {
    var userInput = event.target.value;
    var meaning = faceEmojiDictionary[userInput];
    if (userInput in faceEmojiDictionary) {
      setMeaning(meaning);
    } else if (userInput === "") {
      setMeaning("Translation will appear here.");
    } else {
      setMeaning("We don't have this in our database.");
    }
  }
  function emojiClickHandler(emoji) {
    var meaning = faceEmojiDictionary[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>face emoji interpreter</h1>
      <input
        style={{ width: "80%", padding: "1rem" }}
        placeholder="put an emoji here to know the meaning."
        onChange={userInputEventHandler}
      />
      <div style={{ fontSize: "1.5rem", padding: "1rem" }}>{meaning}</div>
      {emojis.map((emoji) => {
        return (
          <span
            style={{ padding: 8, fontSize: 50, cursor: "pointer" }}
            onClick={() => emojiClickHandler(emoji)}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
      {/* <h2>Welcome <span style={{ color:"blue"}}>{userName}</span></h2> (Live exercise)*/}
      {/* <button onClick={likeClickHandler}>Like</button> (ex:6)*/}
      {/* {likeCounter} (ex:7&8)*/}
    </div>
  );
}
