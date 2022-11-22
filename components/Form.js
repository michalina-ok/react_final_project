import { useState } from 'react'


function Form(props) {
  const [formCompleted, setFormCompleted] = useState(false)


  return (
    <form> 
    <label htmlFor="form-question1">How many promotional emails do you receive on average in a week? (from marketing mailing lists) 
</label>
    <input required type="number" name="question1" id="form-question1"></input>
    <label htmlFor="form-question2">On average how many emails, with images do you send and receive a week?
</label>
    <input required type="number" name="question2" id="form-question2"></input>
    <label htmlFor="form-question3">On average how many emails, without images do you send and receive a week?
</label>
    <input required type="number" name="question3" id="form-question3"></input>
    <button>Calculate</button>
    </form>
  )
}

export default Form