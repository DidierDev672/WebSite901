import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from "react-redux";
import "../../styles/components/blog.scss";


const Post = () => {
    const { id } = useParams();
    const { authors, blogDetalle, blogHeader } = useSelector(state => state.blog);
    const [ creator, setCreator ] = useState([]);
    const [ post, setPost ] = useState([]);
    const [ header, setHeader ] = useState([]);
    useEffect(() => {
        const query = authors.find(item => item.id == id);
        const queryPost = blogDetalle.find(item => item.idAuthor == id);
        const queryHeader = blogHeader.find(item => item.idAuthor == id);
        setCreator(query);
        setPost(queryPost);
        setHeader(queryHeader);
    },[]);
    return(
        <div className="container">
            <div className="py-5"></div>
            <div className="content-blog-post">
                <div className="flex-author-post">
                    <div className="item-author-post">
                        <img src={creator.coverAuthor}/>
                        <br />
                        <span className='author-post'>{creator.name_author}</span>
                    </div>
                    <div className="item-author-post">
                        <div className="sub-item-post-blog">
                            <span className="category">{header.category}</span> <span className="date-public">{header.date_public}</span>
                        </div>
                        <div className="py-3"></div>
                        <h4 className="title-post">{post.titleOne}</h4>
                        <div className="sub-item-post-blog">
                            <a className="facebook" href={`${creator.facebook}`}>Facebook</a>
                            <a className="instagram" href={`${creator.instagram}`}>Instagram</a>
                            <a className="twitter" href={`${creator.twitter}`}>Twitter</a>
                        </div>
                    </div>
                </div>
                <div className="py-3"></div>
                <div className="content-post">
                    <p>{post.paragraphOne}</p>
                    <h4>{post.titleTwo}</h4>
                    <p>{post.paragraphTwo}</p>
                    <h4>{post.titleThree}</h4>
                    <p>{post.paragraphThree}</p>
                    <h4>{post.titleFour}</h4>
                    <p>{post.paragraphFour}</p>
                    <ul className="list-post">
                        <li>{post.listOne}</li>
                        <li>{post.listTwo}</li>
                        <li>{post.listThree}</li>
                    </ul>
                    <p>{post.subParagraohFour}</p>
                    <h4>{post.titleFive}</h4>
                    <p>{post.paragrapFive}</p>
                    <p>{post.subParagraohFive}</p>
                </div>
            </div>
        </div>
    );
};

export default Post;