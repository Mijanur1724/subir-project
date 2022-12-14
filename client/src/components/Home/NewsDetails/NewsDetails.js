import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';

const NewsDetails = () => {
    const { _id } = useParams()
    const [newsDetail, setNewsDetail] = useState({})
    const { title, newsUploadDate, newsAuthor, newsCategory, newsDetails, image } = newsDetail;

    useEffect(() => {
        fetch('http://localhost:4000/singleNewsDetails/' + _id)
            .then(res => res.json())
            .then(data => {
                setNewsDetail(data)
            })
    }, [_id])
    return (
        <section className='container mx-auto'>
            <Header />
            <Navbar />
            {
                newsDetail.length === undefined ? <div className="details m-8">
                    <img src={`data:image/png;base64, ${image?.img}`} alt="news-img" className="details-img" />
                    <div className="details-area flex flex-row justify-between py-3">
                        <p>{newsAuthor} </p>
                        <p>{newsUploadDate}</p>
                    </div>
                    <h1 className='tracking-normal font-medium my-6 text-4xl'>{title}</h1>
                    <p className='my-6'>{newsDetails}</p>
                </div>
                    : <div>
                        <h1>Loading</h1>
                    </div>
            }
            <Footer></Footer>
        </section>
    );
};

export default NewsDetails;