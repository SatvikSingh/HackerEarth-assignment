import React, { Fragment, useEffect } from "react";
import { singleimageaction, clearerr, deleteimageaction } from "../../Redux/Actions/imageAction";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";
import "./Image.css";

const Image = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { error, loading, image } = useSelector((state) => state.oneImage);
  const params = useParams();

  useEffect(() => {
    if (error) {
      alert(error);
      dispatch(clearerr());
    }
    dispatch(singleimageaction(params.id));
  }, [dispatch, error, params.id]);

  const edit = (e) => {
    e.preventDefault();
    navigate(`/${image._id}/edit`);
  };

  const deleteImage = (e) => {
    e.preventDefault();
    dispatch(deleteimageaction(params.id));
    navigate(`/`);
  };

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <div id="container">
          <div className="product-details">
            <h1>{image.imgName}</h1>
            <p className="information">{image.imgDetails}</p>

            <div className="btn-row">
              <Stack direction="row" spacing={2}>
                <Button variant="contained" endIcon={<EditIcon />} onClick={edit}>
                  Edit
                </Button>
                <Button variant="outlined" startIcon={<DeleteIcon />} onClick={deleteImage}>
                  Delete
                </Button>
              </Stack>
            </div>
          </div>

          <div className="product-image">
            <img src={image && image.imgURL} alt={image && image.imgName} />
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Image;
