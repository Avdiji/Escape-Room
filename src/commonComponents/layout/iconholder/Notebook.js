import Backdrop from "../../backdrop/Backdrop";
import classes from "./Notebook.module.css";

export default function Notebook(props) {
  const handleChange = (event) => {
    props.setText(event.target.value);
  };

  const closeNotebook = () => {
    if (document.activeElement !== document.querySelector("textarea")) {
      props.closeNotebook();
    }
  };

  return (
    <div className={classes.notebook}>
      <Backdrop onClick={closeNotebook}>
        <textarea type="text" value={props.notebookText} onChange={handleChange}
        />
      </Backdrop>
    </div>
  );
}
