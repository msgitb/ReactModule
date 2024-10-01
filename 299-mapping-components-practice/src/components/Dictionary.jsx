import React from "react";
import Entry from "./Entry";

const Dictionary = (props) => {
  const { entries } = props;
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
        {entries.map((entry) => (
          <Entry
            key={entry.id}
            emoji={entry.emoji}
            name={entry.name}
            meaning={entry.meaning}
          ></Entry>
        ))}
      </dl>
    </div>
  );
};

export default Dictionary;
