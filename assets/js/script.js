const slideData = [
    {
        index: 0,
        // headline: '宝塔默认',
        button: '查看',
        src: './assets/images/001.png',
        href: 'https://qiantigers.github.io/404/001/404.html'
    },

    {
        index: 1,
        // headline: '大气六边形动态',
        button: '查看',
        src: './assets/images/002.png',
        href: 'https://qiantigers.github.io/404/002/404.html'
    },

    {
        index: 2,
        // headline: '地球简约',
        button: '查看',
        src: './assets/images/003.png',
        href: 'https://qiantigers.github.io/404/003/404.html'
    },

    {
        index: 3,
        // headline: '摇动吊牌',
        button: '查看',
        src: './assets/images/004.png',
        href: 'https://qiantigers.github.io/404/004/404.html'
    },

    {
        index: 4,
        // headline: '两只小鸟',
        button: '查看',
        src: './assets/images/005.png',
        href: 'https://qiantigers.github.io/404/005/404.html'
    },

    {
        index: 5,
        // headline: '树叶遮体可爱卡通',
        button: '查看',
        src: './assets/images/006.png',
        href: 'https://qiantigers.github.io/404/006/404.html'
    },

    {
        index: 6,
        // headline: '卡通小人看板',
        button: '查看',
        src: './assets/images/007.png',
        href: 'https://qiantigers.github.io/404/007/404.html'
    },

    {
        index: 7,
        // headline: '腾讯公益',
        button: '查看',
        src: './assets/images/008.png',
        href: 'https://qiantigers.github.io/404/008/404.html'
    },

    {
        index: 8,
        // headline: '下雪特效',
        button: '查看',
        src: './assets/images/009.png',
        href: 'https://qiantigers.github.io/404/009/404.html'
    },

    {
        index: 9,
        button: '查看',
        src: './assets/images/010.png',
        href: 'https://qiantigers.github.io/404/010/404.html'
    },

    {
        index: 10,
        // headline: '搜狐',
        button: '查看',
        src: './assets/images/011.png',
        href: 'https://qiantigers.github.io/404/011/404.html'
    },

    {
        index: 11,
        // headline: '蓝黄双色拼接',
        button: '查看',
        src: './assets/images/012.png',
        href: 'https://qiantigers.github.io/404/012/404.html'
    },

    {
        index: 12,
        // headline: '炫彩笔划',
        button: '查看',
        src: './assets/images/013.png',
        href: 'https://qiantigers.github.io/404/013/404.html'
    },

    {
        index: 13,
        // headline: '灰色滚动',
        button: '查看',
        src: './assets/images/014.png',
        href: 'https://qiantigers.github.io/404/014/404.html'
    },

    {
        index: 14,
        // headline: '守卫萝卜',
        button: '查看',
        src: './assets/images/015.png',
        href: 'https://qiantigers.github.io/404/015/404.html'
    },

    {
        index: 15,
        // headline: '数字墙星系',
        button: '查看',
        src: './assets/images/016.png',
        href: 'https://qiantigers.github.io/404/016/404.html'
    },

    {
        index: 16,
        // headline: '可爱幽灵',
        button: '查看',
        src: './assets/images/017.png',
        href: 'https://qiantigers.github.io/404/017/404.html'
    },

    {
        index: 17,
        // headline: '太空宇航员',
        button: '查看',
        src: './assets/images/018.png',
        href: 'https://qiantigers.github.io/404/018/404.html'
    },

    {
        index: 18,
        // headline: '简约复古',
        button: '查看',
        src: './assets/images/019.png',
        href: 'https://qiantigers.github.io/404/019/404.html'
    },
    {
        index: 19,
        button: '查看',
        src: './assets/images/020.png',
        href: 'https://qiantigers.github.io/404/020/404.html'
    },
    {
        index: 20,
        button: '查看',
        src: './assets/images/021.png',
        href: 'https://qiantigers.github.io/404/021/404.html'
    }
    
];


// =========================
// Slide
// =========================

class Slide extends React.Component {
    constructor(props) {
        super(props);

        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
        this.handleSlideClick = this.handleSlideClick.bind(this);
        this.imageLoaded = this.imageLoaded.bind(this);
        this.slide = React.createRef();
    }

    handleMouseMove(event) {
        const el = this.slide.current;
        const r = el.getBoundingClientRect();

        el.style.setProperty('--x', event.clientX - (r.left + Math.floor(r.width / 2)));
        el.style.setProperty('--y', event.clientY - (r.top + Math.floor(r.height / 2)));
    }

    handleMouseLeave(event) {
        this.slide.current.style.setProperty('--x', 0);
        this.slide.current.style.setProperty('--y', 0);
    }

    handleSlideClick(event) {
        this.props.handleSlideClick(this.props.slide.index);
    }

    imageLoaded(event) {
        event.target.style.opacity = 1;
    }

    render() {
        const {href, src, button, headline, index} = this.props.slide;
        const current = this.props.current;
        let classNames = 'slide';

        if (current === index) classNames += ' slide--current'; else if (current - 1 === index) classNames += ' slide--previous'; else if (current + 1 === index) classNames += ' slide--next';

        return (
            React.createElement("li", {
                    ref: this.slide,
                    className: classNames,
                    onClick: this.handleSlideClick,
                    onMouseMove: this.handleMouseMove,
                    onMouseLeave: this.handleMouseLeave
                },

                React.createElement("div", {className: "slide__image-wrapper"},
                    React.createElement("img", {
                        className: "slide__image",
                        alt: headline,
                        src: src,
                        onLoad: this.imageLoaded
                    })),


                React.createElement("article", {className: "slide__content"},
                    React.createElement("h2", {className: "slide__headline"}, headline),
                    React.createElement("a", {href: href, target: "_blank"},
                        React.createElement("button", {className: "slide__action btn"}, button)
                    ))
            )
        );

    }
}


// =========================
// Slider control
// =========================

const SliderControl = ({type, title, handleClick}) => {
    return (
        React.createElement("button", {className: `btn btn--${type}`, title: title, onClick: handleClick},
            React.createElement("svg", {className: "icon", viewBox: "0 0 24 24"},
                React.createElement("path", {d: "M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"}))));


};


// =========================
// Slider
// =========================

class Slider extends React.Component {
    constructor(props) {
        super(props);

        this.state = {current: 0};
        this.handlePreviousClick = this.handlePreviousClick.bind(this);
        this.handleNextClick = this.handleNextClick.bind(this);
        this.handleSlideClick = this.handleSlideClick.bind(this);
    }

    handlePreviousClick() {
        const previous = this.state.current - 1;

        this.setState({
            current: previous < 0 ?
                this.props.slides.length - 1 :
                previous
        });

    }

    handleNextClick() {
        const next = this.state.current + 1;

        this.setState({
            current: next === this.props.slides.length ?
                0 :
                next
        });

    }

    handleSlideClick(index) {
        if (this.state.current !== index) {
            this.setState({
                current: index
            });

        }
    }

    render() {
        const {current, direction} = this.state;
        const {slides, heading} = this.props;
        const headingId = `slider-heading__${heading.replace(/\s+/g, '-').toLowerCase()}`;
        const wrapperTransform = {
            'transform': `translateX(-${current * (100 / slides.length)}%)`
        };


        return (
            React.createElement("div", {className: "slider", "aria-labelledby": headingId},
                React.createElement("ul", {className: "slider__wrapper", style: wrapperTransform},
                    React.createElement("h3", {id: headingId, class: "visuallyhidden"}, heading),

                    slides.map(slide => {
                        return (
                            React.createElement(Slide, {
                                key: slide.index,
                                slide: slide,
                                current: current,
                                handleSlideClick: this.handleSlideClick
                            }));


                    })),


                React.createElement("div", {className: "slider__controls"},
                    React.createElement(SliderControl, {
                        type: "previous",
                        title: "Go to previous slide",
                        handleClick: this.handlePreviousClick
                    }),

                    React.createElement(SliderControl, {
                        type: "next",
                        title: "Go to next slide",
                        handleClick: this.handleNextClick
                    })
                )
            )
        );

    }
}


ReactDOM.render(React.createElement(Slider, {
    heading: "Example Slider",
    slides: slideData
}), document.getElementById('app'));