import React from 'react';
import ChatInterface from './components/ChatInterface';
import ProductDiscovery from './components/ProductDiscovery';
import EducationalContent from './components/EducationalContent';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>GenAI Financial Assistant MVP</h1>
      </header>
      <main>
        <section>
          <h2>Conversational Interface</h2>
          <ChatInterface />
        </section>
        <section>
          <h2>Product Discovery</h2>
          <ProductDiscovery />
        </section>
        <section>
          <h2>Financial Education</h2>
          <EducationalContent />
        </section>
      </main>
      <footer>
        <p>© 2025 GenAI Financial Assistant MVP</p>
      </footer>
    </div>
  );
}

export default App;
