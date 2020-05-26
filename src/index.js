import React from 'react';
import PropTypes from 'prop-types';
import './styles/style.scss';


const isEqual = require("react-fast-compare");

export class Carousel extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            slideTotal: 0,
            slideCurrent: -1,
            slides: [],
            height: "0px"
        }
        this.interval = null;
    }
    componentDidMount() {
        let slides = [];
        this.props.slides.forEach(slide => {
            let slideobject = {
                class: "slider-single proactivede",
                element: slide
            }
            slides.push(slideobject);
        });
        this.setState((prevState, props) => {
            return {
                slides,
                slideTotal: this.props.slides.length - 1
            }
        });
        if (this.state.slideCurrent === -1)
            setTimeout(() => {
                this.slideRight();
                if (this.props.autoplay)
                    this.interval = setTimeout(() => {
                        this.slideRight();
                    }, this.props.interval);
            }, 500);

    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.slides && prevProps.slides[0] && this.props.slides[0]) {
            if (!isEqual(prevProps.slides[0], this.props.slides[0])) {
                let slides = [];
                this.props.slides.forEach((slide) => {
                    let slideobject = {
                        class: "slider-single proactivede",
                        element: slide
                    }
                    slides.push(slideobject);
                });
                this.setState((prevState, props) => {
                    return {
                        slides,
                        slideTotal: this.props.slides.length - 1,
                        slideCurrent: -1
                    }
                });
                this.setState((prevState, props) => {
                    return { ...prevState }
                });
                setTimeout(() => {
                    this.slideRight();
                    if (this.props.autoplay) {
                        clearTimeout(this.interval);
                        this.interval = setTimeout(() => {
                            this.slideRight();
                        }, this.props.interval);
                    }
                }, 500);
            }
        }
    }

    slideRight() {
        let { slideCurrent, slideTotal } = this.state;
        let preactiveSlide, proactiveSlide;
        const activeClass = 'slider-single active';
        let slide = this.state.slides;
        if (slideTotal > 1) {
            if (slideCurrent < slideTotal) {
                slideCurrent++;
            } else {
                slideCurrent = 0;
            }
            if (slideCurrent > 0) {
                preactiveSlide = slide[slideCurrent - 1];
            } else {
                preactiveSlide = slide[slideTotal];
            }
            let activeSlide = slide[slideCurrent];
            if (slideCurrent < slideTotal) {
                proactiveSlide = slide[slideCurrent + 1];
            } else {
                proactiveSlide = slide[0];

            }

            slide.forEach((slid, index) => {
                if (slid.class.includes("preactivede")) {
                    slid.class = 'slider-single proactivede';
                }
                if (slid.class.includes("preactive")) {
                    slid.class = 'slider-single preactivede';
                }
            });

            preactiveSlide.class = 'slider-single preactive';
            activeSlide.class = activeClass;
            proactiveSlide.class = 'slider-single proactive';
            this.setState((prevState, props) => {
                return { slides: slide, slideCurrent }
            });
            if (document.getElementsByClassName("slider-single active").length > 0) {
                setTimeout(() => {
                    let height = document.getElementsByClassName("slider-single active")[0].clientHeight;
                    this.setState((prevState, props) => {
                        return { height: height + "px" }
                    })
                }, 500);
            }
            if (this.props.autoplay) {
                clearTimeout(this.interval);
                this.interval = setTimeout(() => {
                    this.slideRight();
                }, this.props.interval);
            }
        } else {
            if (slide[0].class !== activeClass) {
                slide[0].class = activeClass;
                this.setState((prevState, props) => {
                    return { slides: slide, slideCurrent: 0 }
                });
            }
        }
    }
    slideLeft() {
        let { slideCurrent, slideTotal } = this.state;
        if (slideTotal > 1) {
            let preactiveSlide, proactiveSlide;
            let slide = this.state.slides;
            if (slideCurrent > 0) {
                slideCurrent--;
            } else {
                slideCurrent = slideTotal;
            }

            if (slideCurrent < slideTotal) {
                proactiveSlide = slide[slideCurrent + 1];
            } else {
                proactiveSlide = slide[0];
            }
            var activeSlide = slide[slideCurrent];
            if (slideCurrent > 0) {
                preactiveSlide = slide[slideCurrent - 1];
            } else {
                preactiveSlide = slide[slideTotal];
            }
            slide.forEach((slid, index) => {
                if (slid.class.includes("proactivede")) {
                    slid.class = 'slider-single preactivede';
                }
                if (slid.class.includes("proactive")) {
                    slid.class = 'slider-single proactivede';
                }
            });
            preactiveSlide.class = 'slider-single preactive';
            activeSlide.class = 'slider-single active';
            proactiveSlide.class = 'slider-single proactive';
            this.setState((prevState, props) => {
                return { slides: slide, slideCurrent }
            });
            if (document.getElementsByClassName("slider-single active").length > 0) {
                setTimeout(() => {
                    let height = document.getElementsByClassName("slider-single active")[0].clientHeight;
                    this.setState((prevState, props) => {
                        return { height: height + "px" }
                    })
                }, 500);
            }
        }
    }
    render() {
        return (
            <div className="react-3d-carousel" style={{ height: this.state.height }}>
                {this.state.slides && this.state.slides.length > 0 &&
                    <div className="slider-container">

                        <div className="slider-content">
                            {this.state.slides.map((slider, index) => {
                                return (
                                    <div className={slider.class} key={index}>
                                        <div className="slider-left" onClick={this.slideLeft.bind(this)}>
                                            <div>
                                                <i className="fa fa-arrow-left"></i>
                                            </div>
                                        </div>
                                        <div className="slider-right" onClick={this.slideRight.bind(this)}>
                                            <div >
                                                <i className="fa fa-arrow-right"></i>
                                            </div>
                                        </div>

                                        <div className="slider-single-content">
                                            {slider.element}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>


                    </div>
                }
            </div>
        );
    }
}
Carousel.propTypes = {
    slides: PropTypes.arrayOf(PropTypes.element),
    autoplay: PropTypes.bool,
    interval: PropTypes.number
};
Carousel.defaultProps = {
    autoplay: false,
    interval: 3000
};