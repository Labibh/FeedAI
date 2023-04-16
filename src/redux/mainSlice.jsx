import { createSlice,  createAsyncThunk } from '@reduxjs/toolkit';
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, setDoc, doc, query, orderBy, limit, deleteDoc, where } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: import.meta.env.VITE_apiKey,
    authDomain: import.meta.env.VITE_authDomain,
    projectId: import.meta.env.VITE_projectId,
    storageBucket: import.meta.env.VITE_storageBucket,
    messagingSenderId: import.meta.env.VITE_messagingSenderId,
    appId: import.meta.env.VITE_appId,
    measurementId: import.meta.env.VITE_measurementId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app);

export const addPost = createAsyncThunk('main/addPost', async (payload) => {
    const timestamp = String(new Date().getTime());
    const json = JSON.stringify(payload);
    console.log(json);
    await setDoc(doc(db, "database", timestamp), {
        data: json,
        created_time: timestamp
    });
});

export const getPost = createAsyncThunk('main/getPost', async () => {
    const col = collection(db, 'database');
    const q = query(col, orderBy("created_time"));
    const snapshot = await getDocs(q);

    const list = snapshot.docs.map(doc => doc.data());
    const arrData =[];
    for (let i = list.length-1; i >= 0; i--) {
        arrData.push(JSON.parse(list[i].data))
    }

    return arrData;
});


export const removePost = createAsyncThunk('main/removePost', async (postID) => {
    const col = collection(db, 'database');
    const allDocs = await getDocs(col);

    let deletedDocId = null;

    for (const document of allDocs.docs) {
        const docData = document.data();
        const parsedData = JSON.parse(docData.data);

        if (parsedData.PostID === postID) {
            deletedDocId = document.id;
            const docRef = doc(db, "database", deletedDocId)
            await deleteDoc(docRef)
                .then(() => {
                    window.location.reload();
                });
            break;
        }
    }
});

export const mainSlice = createSlice({
    name: 'main',
    initialState: {
        data: [],
        userID: '',
        likedPosts: {liked: []}
    },
    reducers: {
        generateOrRetrieveUserID: (state) => {
            if(localStorage.getItem('userID') === null) {
                const timestamp = String(new Date().getTime());
                const userID = timestamp + String(Math.floor(Math.random() * 1000));
                localStorage.setItem('userID', userID)
                state.userID = userID;
            } else {
                state.userID = localStorage.getItem('userID');
            }

        },
        likeAPost: (state,action) => {
            const postIndex = state.likedPosts.liked.findIndex(post => post.id === action.payload.id);

            let newLikedPosts;

            if (postIndex !== -1) {
                newLikedPosts = [
                    ...state.likedPosts.liked.slice(0, postIndex),
                    ...state.likedPosts.liked.slice(postIndex + 1)
                ];
            } else {
                newLikedPosts = [...state.likedPosts.liked, action.payload];
            }

            const newState = {
                ...state,
                likedPosts: {
                    ...state.likedPosts,
                    liked: newLikedPosts,
                },
            };

            const storeLiked = JSON.stringify(newState.likedPosts);
            localStorage.setItem("likedPosts", storeLiked);

            return newState;

        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(addPost.fulfilled, (state, action) => {

            })
            .addCase(getPost.fulfilled, (state, action) => {
                //console.log('Storing data in state:', action.payload);
                state.data = action.payload;
            })
            .addCase(removePost.fulfilled, (state, action) => {

            });
    },
});

export const { generateOrRetrieveUserID, likeAPost } = mainSlice.actions;
export default mainSlice.reducer;
