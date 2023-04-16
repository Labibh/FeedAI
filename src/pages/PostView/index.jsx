import React from "react";
import styled from 'styled-components';
import {Container, HeaderBoxTwo} from "../../styles/MainStyles.jsx";

const something = styled.div`

`

const PostView = () => {
    return (
        <Container>
            <HeaderBoxTwo>
                <h1>Create Post</h1>
            </HeaderBoxTwo>
        </Container>
    );
}

export default PostView;