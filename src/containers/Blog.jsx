import React, { Fragment } from 'react';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../styles/components/blog.scss"

const Blog = () => {
    const { blogHeader } = useSelector(state => state.blog);
    return(
        <Fragment>
            <div className="container">
                <div className="py-5"></div>
                <div className="content-blog">
                    <h4>El blog de Playa Pez</h4>
                </div>
                <div className="context-blog-post py-4">
                    {blogHeader.map((item) => (
                        <div key={item.idPost} className="flex-post-blog py-3">
                            <Link className="card-post-blog" to={`${item.idAuthor}`}>
                                <div className="flex-item-post">
                                    <div className="item-row">
                                        <img src={item.cover} className="rounded img-post-blog"/>
                                    </div>
                                    <div className="item-row">
                                    <h4><Link className="link-post-title" to={`${item.idAuthor}`}>{item.titlePost}</Link></h4>
                                    <span>{item.description}</span>
                                        <div className="flex-item-blog-post">
                                            <span className="item-post-category">{item.category}</span>  <span className="item-post-date">{item.date_public}</span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </Fragment>
    );
};

export default Blog;