import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import styled from 'styled-components';
import likeIcon1 from '../assets/postCard/like-outlined.svg'
import likedIcon2 from '../assets/postCard/like-outlined-liked.svg'
import deleteIcon from '../assets/postCard/delete-forever-outline.svg'
import { useSelector, useDispatch } from 'react-redux';
import {likeAPost, removePost} from "../redux/mainSlice.jsx";

const Card = styled.div`
  display: grid;
  grid-template-rows: 2.5fr 1fr;
  width: 100%;
  height: 510px;
  background-color: #480CA8;
  border-radius: 0 0 15px 15px;

  .image-top {
    width: 100%;
    height: 364px;
    background-image: url(${(props) => props.link});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

  .info-bottom {
    padding: 20px;
    font-family: var(--font-family-inter);
    font-weight: 400;

    .post-title {
      display: flex;
      justify-content: space-between;

      h2 {
        font-size: 32px;
        color: var(--color-white);
      }

      img {
        width: 40px;
        height: 40px;
      }
    }

    .prompt-text {
      
      font-size: 20px;
      color: var(--color-white);
      
      p {
        height: 50px;
        overflow: hidden;
      }
    }
  }
`

const PostCard = (props) => {
    const dispatch = useDispatch();
    const likedPosts = useSelector((state) => state.main.likedPosts.liked);
    const localUserID = localStorage.getItem('userID');
    const deleteIconVisible = props.deleteIcon || false;

    const isPostLiked = () => {
        return likedPosts.some(post => post.id === props.PostID);
    };

    const handleLikeClick = () => {
        dispatch(likeAPost({ id: props.PostID }));
    };

    const handleDeleteClick = () => {
        dispatch(removePost(props.PostID))
    .catch((error) => {
            console.error('Error while deleting the post:', error);
        });
    };
    return (
        <Card link={props.link}>
            <div className="image-top"></div>
            <div className="info-bottom">
                <div className="post-title">
                    <h2>{props.title}</h2>
                    <div>
                    <span><img src={isPostLiked() ? likedIcon2 : likeIcon1} onClick={handleLikeClick}/></span>
                    <span>{(props.UserID === localUserID && deleteIconVisible) && <img src={deleteIcon} onClick={handleDeleteClick} />}</span>
                    </div>
                </div>
                <div className="prompt-text"><p>{props.prompt}</p></div>
            </div>
        </Card>
    )
}

export default PostCard;