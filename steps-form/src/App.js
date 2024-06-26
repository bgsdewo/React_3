import { useState } from "react";
function App() {
  //menggunakan variabel
  // let step = 1;

  //menggunakan use state
  const [step, setStep] = useState(1);
  function handleNext() {
    //menggunakan variabel
    // step += 1;
    // console.log(step);
    //menggunakan use state
    if (step < 3) setStep(step + 1);
    console.log(step);
  }
  function handlePrev() {
    if (step > 1) setStep(step - 1);
  }
  return (
    <div className="steps">
      <div className="numbers">
        <div className={step >= 1 ? "active" : ""}>1</div>
        <div className={step >= 2 ? "active" : ""}>2</div>
        <div className={step >= 3 ? "active" : ""}>3</div>
      </div>
      <p className="message">Step : Dream</p>
      <div className="buttons">
        <button
          style={{ backgroundColor: "#526D82", color: "#fff" }}
          onClick={handlePrev}
        >
          Prev
        </button>
        <button
          style={{ backgroundColor: "#526D82", color: "#fff" }}
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
