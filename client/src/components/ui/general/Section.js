import "./Section.css";

function Section(props) {
    const classes = "section " + props.className;

    return (
        <section id={props.id} className={classes}>
            {props.children}
        </section>
    );
}

export default Section;
