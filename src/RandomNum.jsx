import { useState } from "react";
function RandomNum() {
  const [randomnum, setrandomnum] = useState(null);
  const [mode, setmode] = useState(true);

  const handleGenerate = (event) => {
    event.preventDefault();
    const generateNum = Math.floor(Math.random() * 100) + 1;
    setrandomnum(generateNum);
  };
  const handleMode = (event) => {
    event.preventDefault();
    setmode(!mode);
  };
  return (
    <>
      <section className={`container ${mode ? "light" : "dark"}`}>
        <div className="generate-card">
          <h1>🎲</h1>
          <h1 className="title">Random Number Generator</h1>
          <div className="number-box">
            {randomnum === null ? (
              <p className="text">
                No Number <br />
                Generated Yet
              </p>
            ) : (
              <>
                <h1 className="number">{randomnum}</h1>
                <p className="text-2">Your Random Number</p>
              </>
            )}
          </div>
          <button className="btn" onClick={handleGenerate}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="size-5"
              style={{ width: "20px", height: "20px" }}
            >
              <path
                fillRule="evenodd"
                d="M15.312 11.424a5.5 5.5 0 0 1-9.201 2.466l-.312-.311h2.433a.75.75 0 0 0 0-1.5H3.989a.75.75 0 0 0-.75.75v4.242a.75.75 0 0 0 1.5 0v-2.43l.31.31a7 7 0 0 0 11.712-3.138.75.75 0 0 0-1.449-.39Zm1.23-3.723a.75.75 0 0 0 .219-.53V2.929a.75.75 0 0 0-1.5 0V5.36l-.31-.31A7 7 0 0 0 3.239 8.188a.75.75 0 1 0 1.448.389A5.5 5.5 0 0 1 13.89 6.11l.311.31h-2.432a.75.75 0 0 0 0 1.5h4.243a.75.75 0 0 0 .53-.219Z"
                clipRule="evenodd"
              />
            </svg>
            Generate Random Number
          </button>
          <button className="mode-btn" onClick={handleMode}>
            {mode ? "Light" : "Dark"} Mode
          </button>
          <p className="generate-limit">
            ⓘ Generates a random number between 1 to 100
          </p>
        </div>
      </section>
    </>
  );
}
export default RandomNum;
