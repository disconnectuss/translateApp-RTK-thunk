import React from 'react'

const Home = () => {
  return (
    <div>
       <header>
        <h1>Online Translation Service</h1>
    </header>
    <main>
        <section class="translator">
            <div class="top-buttons">
                <button id="languageBtn">Change Language</button>
            </div>
            <div class="text-areas">
                <textarea id="inputText" placeholder="Enter text to translate..."></textarea>
                <textarea id="outputText" placeholder="Translated text will appear here..." readonly></textarea>
            </div>
            <div class="bottom-buttons">
                <button id="translateBtn">Translate</button>
                <button id="resetBtn">Reset</button>
            </div>
        </section>
    </main>
    <footer>
        <p>&copy; 2024 Translation Service</p>
    </footer>
    </div>
  )
}

export default Home