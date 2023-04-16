import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import {CardContainer, Container, HeaderBoxOne} from "../../styles/MainStyles.jsx";
import headerBG2 from "../../assets/header/headerBG2.jpg";
import PostCard from "../../components/PostCard.jsx";
import { useSelector, useDispatch } from 'react-redux';
import {getPost} from "../../redux/mainSlice.jsx";

const Liked = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.main.data);
    const likedPosts = useSelector((state) => state.main.likedPosts.liked);

    useEffect(() => {
        dispatch(getPost());
    }, [dispatch])

    return (
        <Container>
            <HeaderBoxOne bgImage={headerBG2}>
                <div>
                    <h1>Liked</h1>
                </div>
            </HeaderBoxOne>
            <CardContainer>
                {data
                    .filter((post) => likedPosts.some(likedPost => likedPost.id === post.PostID))
                    .map((post) => (
                        <PostCard
                            key={post.PostID}
                            PostID={post.PostID}
                            UserID={post.UserID}
                            title={post.title}
                            prompt={post.prompt}
                            link={post.imgLink}
                        />
                    ))}
            </CardContainer>
        </Container>
    );
}

export default Liked;