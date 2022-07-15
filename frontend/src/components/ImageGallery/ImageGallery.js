import React, { Fragment } from "react";
import { useEffect, useState } from "react";
import "./ImageGallery.css";
import { imageaction, clearerr } from "../../Redux/Actions/imageAction";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import Pagination from "react-js-pagination";

const ImageGallery = () => {
  const dispatch = useDispatch();
  const { error, loading, allimages, perPageItem, filteredImageCount } = useSelector((state) => state.Image);
  const { success } = useSelector((state) => state.newImage);
  const params = useParams();

  
  const [currentPage, setCurrentPage] = useState(1);
  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };

  useEffect(() => {
    if (error) {
      alert(error);
      dispatch(clearerr());
    }
    dispatch(imageaction(params.keyword, currentPage));
  }, [dispatch, error, success, params.keyword, currentPage]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <div className="gallery gallery__content--flow">
          {allimages &&
            allimages.map((item) => {
              return (
                <Link to={`show/${item._id}`} key={item._id}>
                  <figure>
                    <img src={item.imgURL} alt={item.imgName} />
                    <figcaption className="header__caption" role="presentation">
                      <h1 className="title title--primary">{item.imgName}</h1>
                    </figcaption>
                  </figure>
                </Link>
              );
            })}
            {perPageItem < filteredImageCount && (
            <div className="paginationBox">
              <Pagination
                activePage={currentPage}
                itemsCountPerPage={perPageItem}
                totalItemsCount={filteredImageCount}
                onChange={setCurrentPageNo}
                nextPageText="Next"
                prevPageText="Prev"
                firstPageText="First"
                lastPageText="Last"
                itemClass="page-item"
                linkClass="page-link"
                activeClass="pageItemActive"
                activeLinkClass="pageLinkActive"
              />
            </div>
          )}
        </div>
      )}
    </Fragment>
  );
};

export default ImageGallery;
