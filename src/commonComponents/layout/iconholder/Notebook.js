import classes from "./Notebook.module.css";

export default function Notebook(props) {

  const handleChange = (event) => {
    props.setText(event.target.value);
  };

  const closeNotebook = () => {
    if (document.activeElement !== document.querySelector('textarea')) {
      props.closeNotebook();
    }
  };


  return (
    <div className={classes.notebook}>
      <div className={classes.backdrop} onClick={closeNotebook}>
        <textarea type="text" value={props.notebookText} onChange={handleChange}/>
      </div>
    </div>
  );
}
