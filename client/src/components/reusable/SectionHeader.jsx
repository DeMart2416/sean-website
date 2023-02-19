import "./SectionHeader.css";

function SectionHeader(props) {
    return (
        <div className="section-header">
            <h1 className="section-header-heading">{props.name}</h1>
            <div className="section-header-line-break"></div>
            <p className="section-header-info">{props.description}</p>
        </div>
    );
}

export default SectionHeader;
