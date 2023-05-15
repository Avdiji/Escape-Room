import classes from "./Layout.module.css";
import Iconholder from "./iconholder/Iconholder";
import { useState } from "react";
import Notebook from "./iconholder/Notebook";

export default function Layout(props) {
  var [notebookOpen, setNotebookOpen] = useState(false);
  var [notebookText, setText] = useState("");

  return (
    <div className={classes.layout}>
      <Iconholder
        flashlightOn={props.flashlightOn}
        setFlashlight={props.setFlashlight}
        openNotebook={() => setNotebookOpen(true)}
      />

      {notebookOpen && (
        <Notebook
          notebookText={notebookText}
          setText={setText}
          closeNotebook={() => setNotebookOpen(false)}
        />
      )}

      {!notebookOpen && props.children}
    </div>
  );
}
