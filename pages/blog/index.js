/** @jsxRuntime classic /
 /** @jsx jsx */
/** @jsxImportSource @emotion/react */

import React from "react";
import {jsx, css} from '@emotion/react';
import * as Variable from '../../source/constants/variables';
import HeaderAndFooter from "../../source/hoc/HeaderAndFooter";
import Link from "next/link";

function HomeServicePage() {
    const blog = css`
      width: 90%;
      margin: auto;
      @media (max-width: 768px) {

      }
    `
    const headBlog = css`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      margin: 2em auto;
      cursor: pointer;
      @media (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;

      }

      > section {
        overflow: hidden;
        border-radius: ${Variable.radius};
        margin-left: 2.5em;
        width: 70%;
        height: 400px;
        transition: 1s;
        @media (max-width: 768px) {
          width: 100%;
          margin: auto;
        }

        img {
          width: 100%;
          height: 100%;
          transition: .5s;
          object-fit: cover;
        }

        &:hover {
          box-shadow: ${Variable.hoverBoxShadow};

          img {
            transform: scale(1.05);
          }
        }
        &:hover {
          box-shadow: ${Variable.hoverBoxShadow};

          >section {
            transform: scale(.95);
            img {
              transform: scale(1.2);
            }
          }
        }
      }

      > div {
        max-width: 30%;
        align-self: flex-start;
        margin: 1em 15% 0;
        @media (max-width: 768px) {
          margin: 0 15%;
        }

        > * {
          @media (max-width: 768px) {
            margin: 0;
            white-space: nowrap;
          }
        }

        span {
          color: ${Variable.placeholderColor};
          @media (max-width: 768px) {
            font-size: .8em;

          }
        }
      }
    `
    const postList = css`
      display: flex;
      align-items: center;
      justify-content: space-around;
      flex-wrap: wrap;
      width: 90%;
      margin: auto;
    `
    const postBlog = css`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      margin: 2em auto;
      cursor: pointer;
      width: 30%;
      height: 350px;
      @media (max-width: 768px) {
        height: 200px;
        width: 45%;

      }
      &:hover {
       >section {
         transform: scale(.95);
         img {
           transform: scale(1.2);
         }
       }
      }
      > section {
        overflow: hidden;
        border-radius: ${Variable.radius};
        width: 100%;
        height: 200px;
        transition: .5s;
display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: 100%;
          height: 100%;
          transition: .5s;
          object-fit: cover;
          border-radius: ${Variable.radius};
          

        }

        
      }

      > div {
        width: 100%;

        span {
          color: ${Variable.placeholderColor};
          font-size: .8em;
        }
      }
    `

    return (

        <React.Fragment>
            <header>
                <title>بلاگ</title>
            </header>
            <HeaderAndFooter content={
                <main css={blog}>
                    <Link href='/blog/1'>
                        <a css={headBlog}>
                            <section>
                                <img src='/img/blog.jpg' alt='blog'/>
                            </section>
                            <div>
                                <span>تگ مقاله</span>
                                <h4> عنوان مقاله</h4>
                                <span>تاریخ انتشار</span>
                            </div>
                        </a>
                    </Link>
                    <section css={postList}>
                        <Link href='/blog/2'>
                            <a css={postBlog}>
                                <section>
                                    <img src='/img/blog2.jpg' alt='blog'/>
                                </section>
                                <div>
                                    <span>تگ مقاله</span>
                                    <h6> عنوان مقاله</h6>
                                    <span>تاریخ انتشار</span>
                                </div>
                            </a>
                        </Link>
                        <Link href='/blog/3'>
                            <a css={postBlog}>
                                <section>
                                    <img src='/img/blog3.jpg' alt='blog'/>
                                </section>
                                <div>
                                    <span>تگ مقاله</span>
                                    <h6> عنوان مقاله</h6>
                                    <span>تاریخ انتشار</span>
                                </div>
                            </a>
                        </Link>
                        <Link href='/blog/4'>
                            <a css={postBlog}>
                                <section>
                                    <img src='/img/blog4.jpg' alt='blog'/>
                                </section>
                                <div>
                                    <span>تگ مقاله</span>
                                    <h6> عنوان مقاله</h6>
                                    <span>تاریخ انتشار</span>
                                </div>
                            </a>
                        </Link>
                        <Link href='/blog/5'>
                            <a css={postBlog}>
                                <section>
                                    <img src='/img/blog5.jpg' alt='blog'/>
                                </section>
                                <div>
                                    <span>تگ مقاله</span>
                                    <h6> عنوان مقاله</h6>
                                    <span>تاریخ انتشار</span>
                                </div>
                            </a>
                        </Link>
                        <Link href='/blog/6'>
                            <a css={postBlog}>
                                <section>
                                    <img src='/img/blog6.jpg' alt='blog'/>
                                </section>
                                <div>
                                    <span>تگ مقاله</span>
                                    <h6> عنوان مقاله</h6>
                                    <span>تاریخ انتشار</span>
                                </div>
                            </a>
                        </Link>
                    </section>
                </main>
            }/>
        </React.Fragment>
    );
}

export default HomeServicePage;
