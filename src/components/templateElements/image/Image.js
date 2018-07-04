import React from 'react';
import Dropzone from 'react-dropzone';
import './Image.css'

export default ({ onImageAdded, onImageDeleted, isEdit, image }) => {
    const onImageDeletedHandler = (event) => {
        onImageDeleted();
    };
    let imageContainer =
        image && <div className="image-wrapper">
            { image.url && <img src={image.url}
                alt={image.imageName}
                className="image" />
            }
            { !image.url && image.preview && <img src={image.preview}
                alt={image.name}
                className="image" />
            }
        </div>;

    return (
        <div className="image-container">
            {isEdit && image && <div className="button delete-image" onClick={onImageDeletedHandler}>&#10005;</div>}
            {isEdit ?
                <Dropzone className="drop-zone" onDrop={(files) => { onImageAdded(files[0]); }}>
                    {imageContainer || <div className="text fill">Click to upload image or drop files here</div>}
                </Dropzone> :
                imageContainer
            }
        </div>
    );
}