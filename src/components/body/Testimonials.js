import React, { Component } from 'react';

class Testimonials extends Component {
    render() {
        return (
            <>
                <div id="testimonials" className="parallax section db parallax-off" style={{ backgroundImage: 'url("./asset/images/parallax_04.jpg")' }}>
                    <div className="container">
                        <div className="section-title text-center">
                            <h3>Testimonials</h3>
                            <p>Lorem ipsum dolor sit aet, consectetur adipisicing lit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        </div>{/* end title */}
                        <div className="row">
                            <div className="col-md-12 col-sm-12">
                                <div className="testi-carousel owl-carousel owl-theme">
                                    <div className="testimonial clearfix">
                                        <div className="testi-meta">
                                            <img src="./asset/images/testi_01.png" alt="" className="img-fluid" />
                                            <h4>James Fernando </h4>
                                        </div>
                                        <div className="desc">
                                            <h3><i className="fa fa-quote-left" /> Wonderful Support!</h3>
                                            <p className="lead">They have got my project on time with the competition with a sed highly skilled, and experienced &amp; professional team.</p>
                                        </div>
                                        {/* end testi-meta */}
                                    </div>
                                    {/* end testimonial */}
                                    <div className="testimonial clearfix">
                                        <div className="testi-meta">
                                            <img src="./asset/images/testi_02.png" alt="" className="img-fluid" />
                                            <h4>Jacques Philips </h4>
                                        </div>
                                        <div className="desc">
                                            <h3><i className="fa fa-quote-left" /> Awesome Services!</h3>
                                            <p className="lead">Explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you completed.</p>
                                        </div>
                                        {/* end testi-meta */}
                                    </div>
                                    {/* end testimonial */}
                                    <div className="testimonial clearfix">
                                        <div className="testi-meta">
                                            <img src="./asset/images/testi_03.png" alt="" className="img-fluid " />
                                            <h4>Venanda Mercy </h4>
                                        </div>
                                        <div className="desc">
                                            <h3><i className="fa fa-quote-left" /> Great &amp; Talented Team!</h3>
                                            <p className="lead">The master-builder of human happines no one rejects, dislikes avoids pleasure itself, because it is very pursue pleasure. </p>
                                        </div>
                                        {/* end testi-meta */}
                                    </div>
                                    {/* end testimonial */}
                                    <div className="testimonial clearfix">
                                        <div className="testi-meta">
                                            <img src="./asset/images/testi_01.png" alt="" className="img-fluid" />
                                            <h4>James Fernando </h4>
                                        </div>
                                        <div className="desc">
                                            <h3><i className="fa fa-quote-left" /> Wonderful Support!</h3>
                                            <p className="lead">They have got my project on time with the competition with a sed highly skilled, and experienced &amp; professional team.</p>
                                        </div>
                                        {/* end testi-meta */}
                                    </div>
                                    {/* end testimonial */}
                                    <div className="testimonial clearfix">
                                        <div className="testi-meta">
                                            <img src="./asset/images/testi_02.png" alt="" className="img-fluid" />
                                            <h4>Jacques Philips </h4>
                                        </div>
                                        <div className="desc">
                                            <h3><i className="fa fa-quote-left" /> Awesome Services!</h3>
                                            <p className="lead">Explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you completed.</p>
                                        </div>
                                        {/* end testi-meta */}
                                    </div>
                                    {/* end testimonial */}
                                    <div className="testimonial clearfix">
                                        <div className="testi-meta">
                                            <img src="./asset/images/testi_03.png" alt="" className="img-fluid" />
                                            <h4>Venanda Mercy </h4>
                                        </div>
                                        <div className="desc">
                                            <h3><i className="fa fa-quote-left" /> Great &amp; Talented Team!</h3>
                                            <p className="lead">The master-builder of human happines no one rejects, dislikes avoids pleasure itself, because it is very pursue pleasure. </p>
                                        </div>
                                        {/* end testi-meta */}
                                    </div>{/* end testimonial */}
                                </div>{/* end carousel */}
                            </div>{/* end col */}
                        </div>{/* end row */}
                    </div>{/* end container */}
                </div>
            </>
        );
    }
}

export default Testimonials;