import style from './InputField.module.css';

const InputField = ({text, handleInput, handleSubmit}) => {
  return (
   <div className={style.form}>
     <label className={style.label}>
      <input  value={text} onChange={(e) => handleInput(e.target.value)} className={style.input}/>
      <button onClick={handleSubmit} className={style.btn}>Add Todo</button>
    </label>
   </div>
  );
}

export default InputField;