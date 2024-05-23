const PaintingListItem = (props) => {
    const handleSelect = (e) => {
    // const {painting,change} = props;
    console.log(e);
    props.change(props.painting);//implements
 
    }
    return (<div className="row invert" onClick={handleSelect}>
             <img src={"paintings/square/" + props.painting.id + ".jpg"} alt={props.painting.title} />
             <h3>{props.painting.title}</h3>
             <p>{props.painting.artist}</p>
             <p>{props.painting.year}</p>
          </div>);
 }
 export default PaintingListItem; 