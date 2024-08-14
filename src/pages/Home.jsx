import React, { useEffect, useState } from "react";
import SyncAlt from "../assets/icons/SyncAlt";
import { useDispatch, useSelector } from "react-redux";
import { getLanguages, translateText } from "../redux/actions/translateActions";
import Select from "react-select";

const Home = () => {
  const dispatch = useDispatch();
  const state = useSelector((store) => store.translate);
  // console.log(state.languages);
  const [source, setSource] = useState();
  const [target, setTarget] = useState();
  const [text, setText] = useState();

  useEffect(() => {
    dispatch(getLanguages());
  }, []);

  const options = [{ value: "chocolate", label: "Chocolate" }];

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
          <div className="top-buttons">
            <button id="languageBtn">Change Language</button>
          </div>
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
                placeholder="Enter text to translate..."
                onChange={(e)=> setText(e)}
              ></textarea>
            </div>
            <div className="syncAlt">
              <SyncAlt />
            </div>
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
                placeholder="Translated text will appear here..."
                readOnly
              ></textarea>
            </div>
          </div>
          <div className="bottom-buttons">
            <button id="translateBtn" onClick={()=>dispatch(translateText())}>Translate</button>
            <button id="resetBtn">Reset</button>
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
