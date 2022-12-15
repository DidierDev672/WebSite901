import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from "react-redux";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import "../../styles/components/blog.scss";


const Post = () => {
    const { idPost } = useParams();
    const { blogDetalle, blogHeader } = useSelector(state => state.blog);
    const [ post, setPost ] = useState([]);
    const [ header, setHeader ] = useState([]);
    const [ content, setContent] = useState("");
    useEffect(() => {
        const queryPost = blogDetalle.find(item => item.idPost === idPost);
        const queryHeader = blogHeader.find(item => item.idPost === idPost);
        setPost(queryPost);
        setHeader(queryHeader);
    },[]);
    return(
        <div className="container">
            <div className="py-5"></div>
            <ReactMarkdown children={post.Post} remarkPlugins={[remarkGfm]} />
        </div>
    );
};

export default Post;