import React, {useEffect, useRef, useState} from "react";
import styled from 'styled-components';
import {Container, HeaderBoxTwo} from "../../styles/MainStyles.jsx";
import {ImgPreview, InputContainer} from "../../styles/PostCreateStyles.jsx";
import ImgIcon from "../../assets/ImgIcon.png";
import { useSelector, useDispatch } from 'react-redux';
import {addPost} from "../../redux/mainSlice.jsx";
import {useNavigate} from "react-router-dom";

const Create = () => {
    const [titleValue, setTitleValue] = useState('');
    const [promptTextValue, setPromptTextValue] = useState('');
    const [imageURL, setImageURL] = useState('');
    const userID = useSelector((state) => state.main.userID);

    const dispatch = useDispatch();
    const navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault();
        if (!titleValue || !promptTextValue || !imageURL) {
            alert('All fields are required. Please fill in all fields.');
            return;
        }
        const timestamp = String(new Date().getTime());

        const post = {
            PostID: timestamp,
            UserID: userID,
            title: titleValue,
            prompt: promptTextValue,
            imgLink: imageURL
        }

        dispatch(addPost(post));
        setTimeout(() => {  navigate('/myposts') }, 500);

    };


    return (
        <Container>
            <HeaderBoxTwo>
                <h1>Create Post</h1>
            </HeaderBoxTwo>
            <ImgPreview>
                <img src={imageURL}/>
                <div><p>Preview</p></div>
            </ImgPreview>
            <InputContainer>
                <form onSubmit={handleSubmit}>
                    <div className="input-fields">
                        <label htmlFor="titleField">Title Field:</label>
                        <input
                            type="text"
                            id="titleField"
                            value={titleValue}
                            onChange={(e) => setTitleValue(e.target.value)}
                            pattern=".{5,}"
                            title="Input field must contain at least 5 characters"
                        />
                    </div>
                    <div className="input-fields">
                        <label htmlFor="promptText">Prompt Used:</label>
                        <textarea
                            id="promptText"
                            value={promptTextValue}
                            onChange={(e) => setPromptTextValue(e.target.value)}
                        ></textarea>
                    </div>
                    <div className="input-fields">
                        <label htmlFor="imageUrl">Image URL:</label>
                        <div className="input-button">
                        <input
                            type="url"
                            id="imageUrl"
                            value={imageURL}
                            onChange={(e) => setImageURL(e.target.value)}
                            pattern="^(http|https):\/\/\S+\.(?:png|jpg|jpeg|gif|bmp|webp|tiff)$"
                            title="Please enter a valid URL starting with https and is a png, jpg, jpeg or webp"
                        />
                        <button type="submit">SUBMIT</button>
                        </div>
                    </div>
                </form>
            </InputContainer>
        </Container>
    );
}

export default Create;