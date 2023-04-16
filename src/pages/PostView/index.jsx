import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import {Container, HeaderBoxTwo} from "../../styles/MainStyles.jsx";
import {useParams} from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux';
import {ContentGrid, PromptBox, ViewBox} from "../../styles/PostViewStyles";
import {getPost, likeAPost} from "../../redux/mainSlice.jsx";
import likeIcon1 from '../../assets/postCard/like-outlined.svg'
import likedIcon2 from '../../assets/postCard/like-outlined-liked.svg'


const PostView = () => {
    const {id} = useParams()
    const Posts = useSelector((state) => state.main.data);
    const [title, setTitle] = useState("");
    const [prompt, setPrompt] = useState("");
    const [imgLink, setImgLink] = useState("");
    const [userID, setUserID] = useState("");
    const likedPosts = useSelector((state) => state.main.likedPosts.liked);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPost());
    }, [dispatch])

    useEffect(() => {
        const post = Posts.find((post) => post.PostID === id);
        if (post) {
            setTitle(post.title);
            setPrompt(post.prompt);
            setImgLink(post.imgLink);
            setUserID(post.UserID)
        }
    }, [Posts, id]);

    const isPostLiked = () => {
        return likedPosts.some(post => post.id === id);
    };

    const handleLikeClick = () => {
        dispatch(likeAPost({ id: id }));
    };

    return (
        <Container>
            <HeaderBoxTwo>
                <h1>{title}</h1>
            </HeaderBoxTwo>
            <ContentGrid>
                <ViewBox imgLink={imgLink}>
                    <div className="post-img"></div>
                    <div className="img-info">
                        <p>Submitted by: {userID}</p>
                        <span><img src={isPostLiked() ? likedIcon2 : likeIcon1} onClick={handleLikeClick}/></span>
                    </div>
                </ViewBox>
                <PromptBox>
                    <h2>Prompt Text</h2>
                    <p>{prompt}</p>
                </PromptBox>
            </ContentGrid>
        </Container>
    );
}

export default PostView;