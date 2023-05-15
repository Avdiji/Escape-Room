import classes from "./CardEffect.module.css";

export default function CardEffect(props){
    return <div className={classes.cardEffect}>{props.children}</div>;
}