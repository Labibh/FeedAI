import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import {CardContainer, Container, HeaderBoxOne} from "../../styles/MainStyles.jsx";
import PostCard from "../../components/PostCard.jsx";
import headerBG1 from '../../assets/header/headerBG1.jpg'
import { useSelector, useDispatch } from 'react-redux';
import {getPost} from "../../redux/mainSlice.jsx";


const Home = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.main.data);
    useEffect(() => {
        dispatch(getPost());
    }, [dispatch])

    return (
        <Container>
            <HeaderBoxOne bgImage={headerBG1}>
                <div>
                    <h1>Main Feed</h1>
                </div>
            </HeaderBoxOne>
            <CardContainer>
                {data.map((post) => (
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

export default Home;