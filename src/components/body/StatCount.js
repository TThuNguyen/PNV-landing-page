import React, { Component } from 'react';
class StatCount extends Component {
    render() {
        return (
            <>
                <div className="section cl">
                    <div className="container">
                        <div className="row text-left stat-wrap">
                            <div className="col-md-4 col-sm-4 col-xs-12">
                                <span data-scroll className="global-radius icon_wrap effect-1 alignleft"><i className="flaticon-study" /></span>
                                <p className="stat_count">12000</p>
                                <h3>Students</h3>
                            </div>{/* end col */}
                            <div className="col-md-4 col-sm-4 col-xs-12">
                                <span data-scroll className="global-radius icon_wrap effect-1 alignleft"><i className="flaticon-online" /></span>
                                <p className="stat_count">240</p>
                                <h3>Courses</h3>
                            </div>{/* end col */}
                            <div className="col-md-4 col-sm-4 col-xs-12">
                                <span data-scroll className="global-radius icon_wrap effect-1 alignleft"><i className="flaticon-years" /></span>
                                <p className="stat_count">55</p>
                                <h3>Years Completed</h3>
                            </div>{/* end col */}
                        </div>{/* end row */}
                    </div>{/* end container */}
                </div>
            </>
        );
    }
}

export default StatCount;