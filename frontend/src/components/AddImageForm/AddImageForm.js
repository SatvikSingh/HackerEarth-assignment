import { useState, React } from "react";
import { addimageaction } from "../../Redux/Actions/imageAction";
import { useDispatch } from "react-redux";
import "./AddImageForm.css";

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
    dispatch(addimageaction(formdata));
    dispatch({ type: "ADD_IMAGE_RESET" });
    // call axios
    // resetting the state
    setformdata({
      imgName: "",
      imgDetails: "",
      imgURL: "",
    });
  };

  return (
    <div className="card-form">
      <form className="signup" onSubmit={adddata}>
        <div className="form-title">Add a new Image</div>
        <div className="form-body">
          <div className="row">
            <input
              type="text"
              placeholder="Image Name*"
              name="imgName"
              value={formdata.imgName}
              onChange={changedata}
              autoComplete="off"
            />
            <input
              type="text"
              placeholder="Image URL*"
              name="imgURL"
              value={formdata.imgURL}
              onChange={changedata}
              autoComplete="off"
            />
          </div>
          <div className="row">
            <input
              type="text"
              placeholder="Image Details*"
              name="imgDetails"
              value={formdata.imgDetails}
              onChange={changedata}
              autoComplete="off"
            />
          </div>
        </div>
        <div className="rule"></div>
        <div className="form-footer">
          <button type="submit"><span style={{color: "white"}}>Add Data</span></button>
        </div>
      </form>
    </div>
  );
};

export default AddImageForm;
