function WelcomePage() {
  return (
    <body>
      <h1 className="companyTitle">InfirmAssist</h1>
      <h2 className="infoText">Receptionist and Hospital Administration Software</h2>
      <button>How to use</button>
      <button>Receptionist</button>
      <button>Analytics</button>
    </body>
  );
}

export default function App() {
  return (
    <WelcomePage/>
  );
}
