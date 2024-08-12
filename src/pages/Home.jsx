import React, { useEffect } from "react";
import SyncAlt from "../assets/icons/SyncAlt";
import { useDispatch } from "react-redux";
import { getLanguages } from "../redux/actions/translateActions";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLanguages());
  }, []);

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
              <select name="sourceLanguage" id="sourceLanguage">
                <option value="">Select Language</option>
                {/* Add more options as needed */}
              </select>
              <textarea
                id="inputText"
                placeholder="Enter text to translate..."
              ></textarea>
            </div>
            <div className="syncAlt">
              <SyncAlt />
            </div>
            <div className="text-area-container">
              <select name="targetLanguage" id="targetLanguage">
                <option value="">Select Language</option>
                {/* Add more options as needed */}
              </select>
              <textarea
                id="outputText"
                placeholder="Translated text will appear here..."
                readOnly
              ></textarea>
            </div>
          </div>
          <div className="bottom-buttons">
            <button id="translateBtn">Translate</button>
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
