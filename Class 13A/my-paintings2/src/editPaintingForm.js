const EditPaintingForm = (props) => {
    const handleChange = (e) => {
       console.log(e);
       //create shallow copy of the current painting
       const modifiedPainting = {...props.componentCurrentPainting};
       //get the name and value of the form element that called this handler
       const {name, value} = e.target;//same as e.target.name and e.target.value;
       //use bracket notation to update the desired property
       modifiedPainting[name]=value;
       //tell the parent to update the painting list with this new object
       props.update(modifiedPainting);
    }
}
export default EditPaintingForm;