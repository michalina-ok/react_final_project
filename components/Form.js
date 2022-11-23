import { useRef } from "react";

function Form(props) {
  const theForm = useRef(null);

  function submit(e) {
    props.getInputs({
      input1: theForm.current.elements.input1.value,
      input2: theForm.current.elements.input2.value,
      input3: theForm.current.elements.input3.value,
    });
  }

  return (
    <>
      <form ref={theForm} onSubmit={submit}>
        <label htmlFor="form-input1">How many promotional emails do you receive on average in a week? (from marketing mailing lists)</label>
        <input required type="number" name="input1" id="form-input1"></input>
        <label htmlFor="form-input2">On average how many emails, with images do you send and receive a week?</label>
        <input required type="number" name="input2" id="form-input2"></input>
        <label htmlFor="form-">On average how many emails, without images do you send and receive a week?</label>
        <input required type="number" name="input3" id="form-input3"></input>
        <button>Calculate</button>
      </form>
    </>
  );
}

export default Form;
