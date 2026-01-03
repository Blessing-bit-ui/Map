import styles from "../modules/Form.module.css";
import {useState} from "react"

function Form() {
    const [cityName, setCityName] = useState("")
    const [date, setDate] =useState("")
    const [notes, setNotes] = useState("")
    return (
      <form className={styles.form}>
        <div className={styles.row}>
          <label htmlFor="cityName">City name</label>
          <input
            value={cityName}
            onChange={(e) => setCityName(e.target.value)}
          />
          <span className={styles.flag}></span>
          <label htmlFor="date">When did you go to </label>
          <input value={date} onChange={(e) => setDate(e.target.value)} />
         <div className={styles.row}>
        <label htmlFor="notes">Notes about your trip to {cityName}</label>
        <textarea
          id="notes"
          onChange={(e) => setNotes(e.target.value)}
          value={notes}/>
        </div>
        </div>
      </form>
    )}

export default Form
