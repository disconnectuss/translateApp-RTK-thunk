import React, { useEffect, useState } from "react";
import SyncAlt from "../assets/icons/SyncAlt";
import { useDispatch, useSelector } from "react-redux";
import { getLanguages, translateText } from "../redux/actions/translateActions";
import Select from "react-select";
import { clearTranslate } from "../redux/slices/translateSlice";

const Home = () => {
  const dispatch = useDispatch();
  const state = useSelector((store) => store.translate);

  const [source, setSource] = useState();
  const [target, setTarget] = useState();
  const [text, setText] = useState("");

  useEffect(() => {
    dispatch(getLanguages());
  }, [dispatch]);

  const handleChange = () => {
    setTarget(source);
    setSource(target);
    const inputText = text;
    const translatedText = state.translatedText;
    dispatch(clearTranslate())
  
    setText(translatedText);
    dispatch(clearTranslate())
  };

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      color: "black",
      backgroundColor: state.isSelected ? "#4caf50" : "white",
      "&:hover": {
        backgroundColor: "#f0f0f0",
      },
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "black",
    }),
  };

  return (
    <div>
      <header>
        <h1>Online Translation Service</h1>
      </header>
      <main>
        <section className="translator">
          <div className="top-buttons"></div>
          <div className="text-areas">
            <div className="text-area-container">
              <Select
                className="select"
                options={state.languages}
                styles={customStyles}
                isDisabled={state.isLoading}
                isLoading={state.isLoading}
                value={source}
                onChange={(e) => setSource(e)}
              />
              <textarea
                id="inputText"
                placeholder="Enter text.."
                value={text}
                onChange={(e) => setText(e.target.value)}
              ></textarea>
            </div>
            <button className="syncAlt" id="languageBtn" onClick={handleChange}>
              <SyncAlt />
            </button>
            <div className="text-area-container">
              <Select
                options={state.languages}
                styles={customStyles}
                onChange={(e) => setTarget(e)}
                value={target}
                isDisabled={state.isLoading}
                isLoading={state.isLoading}
              />
              <textarea
                id="outputText"
                placeholder="Translated text.."
                readOnly
                value={state.translatedText}
              ></textarea>
            </div>
          </div>
          <div className="bottom-buttons">
            <button
              id="translateBtn"
              onClick={() =>
                dispatch(
                  translateText({
                    source: source?.value,
                    target: target?.value,
                    text,
                  })
                )
              }
            >
              Translate
            </button>
            <button id="resetBtn" onClick={() => dispatch(clearTranslate())}>
              Reset
            </button>
          </div>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 Translation Service</p>
      </footer>
    </div>
  );
};

export default Home;
