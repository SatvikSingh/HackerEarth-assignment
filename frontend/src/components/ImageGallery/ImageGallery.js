import React from "react";
import { useEffect } from "react";
import "./ImageGallery.css";
import { imageaction, clearerr } from "../../Redux/Actions/imageAction";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const ImageGallery = () => {
  const dispatch = useDispatch();
  const { error, loading, allimages } = useSelector((state) => state.Image);
  const { success } = useSelector((state) => state.newImage);

  useEffect(() => {
    if (error) {
      alert(error);
      dispatch(clearerr());
    }
    dispatch(imageaction());
  }, [dispatch, error, success]);

  return (
    <div className="gallery gallery__content--flow">
      {allimages &&
        allimages.map((item) => {
          return (
            <Link to={`show/${item._id}`}>
              <figure>
                <img src={item.imgURL} alt={item.imgName} />
                <figcaption className="header__caption" role="presentation">
                  <h1 className="title title--primary">{item.imgName}</h1>
                </figcaption>
              </figure>
            </Link>
          );
        })}
    </div>
  );
};

export default ImageGallery;
