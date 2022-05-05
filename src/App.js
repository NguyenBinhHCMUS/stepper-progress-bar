import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <section className="step-wizard">
      <ul className="step-wizard-list">
        <li className="step-wizard-item">
          <span className="progress-count">1</span>
          <span className="progress-label">Billing Info 1</span>
        </li>
        <li className="step-wizard-item current-item">
          <span className="progress-count">2</span>
          <span className="progress-label">Billing Info 2</span>
        </li>
        <li className="step-wizard-item">
          <span className="progress-count">3</span>
          <span className="progress-label">Billing Info 3</span>
        </li>
        <li className="step-wizard-item">
          <span className="progress-count">4</span>
          <span className="progress-label">Billing Info 4</span>
        </li>
      </ul>
    </section>
  );
}

export default App;
