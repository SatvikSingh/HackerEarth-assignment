import {  useState, React } from "react";
import { addimageaction } from "../../Redux/Actions/imageAction";
import {  useDispatch } from "react-redux";
import './AddImageForm.css'

const AddImageForm = () => {

const dispatch = useDispatch();
  const [formdata, setformdata] = useState({
    imgName: "",
    imgDetails: "",
    imgURL: "",
  });

  // Used to change the data fetched from editform
  const changedata = (e) => {
    const fieldname = e.target.name;
    const value = e.target.value;
    // fetch old data
    const newformdata = { ...formdata };
    // update given field with value
    newformdata[fieldname] = value;
    // updating data
    setformdata(newformdata);
  };

  // function made to add new data to table
  const adddata = (e) => {
    e.preventDefault();
    dispatch(addimageaction(formdata))
    dispatch({type:"ADD_IMAGE_RESET"});
    // call axios
    // resetting the state
    setformdata({
        imgName: "",
        imgDetails: "",
        imgURL: "",
    });
  };

  return (
    <div>
      <form onSubmit={adddata}>
        <input
          className="adddata"
          type="text"
          name="imgName"
          value={formdata.imgName}
          placeholder="Enter Image Name "
          onChange={changedata}
        ></input>
        <input
          className="adddata"
          type="text"
          name="imgDetails"
          value={formdata.imgDetails}
          placeholder="Enter Image Details "
          onChange={changedata}
        ></input>
        <input
          className="adddata"
          type="text"
          name="imgURL"
          value={formdata.imgURL}
          placeholder="Enter Image URL "
          onChange={changedata}
        ></input>
        <button type="submit">Add Data</button>
      </form>
    </div>
  );
};

export default AddImageForm;