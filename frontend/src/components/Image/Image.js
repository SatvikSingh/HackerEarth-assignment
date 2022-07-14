import React, {useEffect} from "react";
import { singleimageaction, clearerr } from "../../Redux/Actions/imageAction";
import { useSelector, useDispatch } from "react-redux";

const Image = () => {
  const dispatch = useDispatch();
  const { error, loading, image } = useSelector((state) => state.oneImage);

  useEffect((match) => {
    if (error) {
      alert(error);
      dispatch(clearerr());
    }
    dispatch(singleimageaction(match.params.id));
  }, [dispatch, error]);

  return (
  <div>
    hello
  </div>
  );
};

export default Image;
