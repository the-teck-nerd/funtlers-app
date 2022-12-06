import React, { useState } from "react";
import ImageUploading from "react-images-uploading";
import "./ImageUploader.scss";
import campaignImg from "../../img/booking-confirmation-img.png";

export function ImageUploader({ setImagesCallBack }) {
  const [images, setImages] = useState([]);
  
  //image uploader
  const maxNumber = 7;

  const onChange = (imageList, addUpdateIndex) => {
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
    setImagesCallBack(imageList);
  };

  return (
    <div className="container">
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
        acceptType={["jpg", "gif", "png", "jpeg"]}
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,

          errors,
        }) => (
          // write your building UI
          <div>
            <div className="image-container">
              <img
                height={imageList.length < 2 ? 400 : 350}
                alt="img"
                width={470}
                src={
                  imageList.length === 0
                    ? campaignImg
                    : imageList[0]["data_url"]
                }
              />
            </div>

            {imageList.length > 1 && (
              <div className="slider-container">
                {imageList.map(
                  (image, index) =>
                    index > 0 && (
                      <div key={index} className="image-item">
                        <img
                          src={image["data_url"]}
                          alt="img"
                          height="50"
                          width="70"
                        />
                        <div>
                          <button
                            className="delete-button"
                            onClick={() => onImageRemove(index)}
                          >
                            X
                          </button>
                        </div>
                      </div>
                    )
                )}
              </div>
            )}
            
              <button
                onClick={onImageUpload}
                className="form_btn Theme_btn_primary"
              >
                Upload
              </button>

              {/* <button className="Theme_btn_primary" onClick={onImageRemoveAll}>
                Remove all images
              </button> */}
            

            {errors && (
              <div>
                {errors.maxNumber && (
                  <span>Number of selected images exceed maxNumber</span>
                )}
                {errors.acceptType && (
                  <span>Your selected file type is not allow</span>
                )}
                {errors.maxFileSize && (
                  <span>Selected file size exceed maxFileSize</span>
                )}
                {errors.resolution && (
                  <span>
                    Selected file is not match your desired resolution
                  </span>
                )}
              </div>
            )}
          </div>
        )}
      </ImageUploading>
    </div>
  );
}