import React from 'react'
import gsap from 'gsap';
function Worksection() {

    const mousemove = (event) => {
        let index = event.target.dataset.index
        const showdiv = document.getElementById('hdiv').childNodes[index]
        showdiv.style.opacity = 1
        showdiv.style.transform = `translate(${event.clientX - 10}px,${event.clientY - 60}px)`

    }
    const mouseleave2 = (event) => {
        let index = event.target.dataset.index
        const showdiv = document.getElementById('hdiv').childNodes[index]
        showdiv.style.opacity = 0
        showdiv.style.transform = `translate(${event.clientX - 10}px,${event.clientY - 60}px)`
    }

    const mouseleave = () => {
        let tl = gsap.timeline()
        tl.to('.projdetail', {
            top: "10%",
            opacity: 0,
            delay: -0.5,
            ease: 'expo.inOut'
        })

    }

    const openInNewTab = (url) => {
        window.open(url, "_blank", "noopener,noreferrer");
    };

    return (
        <>
            <div id='hdiv'>
                <div className="hoverdiv">
                    <div className="rowc">
                        <div className="circle"></div>
                        <div className="oval">
                            <p>Live</p>
                        </div>
                    </div>
                    <div className="maincontent">
                        <img id='c1' src="vc5.png" alt="" />
                        <img id='c2' src="Vc2.png" alt="" />
                        <img id='c3' src="vc3.png" alt="" />
                        <img id='c4' src="vc4.png" alt="" />
                        {/* <img id='c5' src="vc4" alt="" /> */}
                    </div>
                </div>

                <div className="hoverdiv">
                    <div className="rowc">
                        <div className="circle"></div>
                        <div className="oval">
                            <p>Live</p>
                        </div>
                    </div>
                    <div className="maincontent">
                        <img id='c1' src="Ar1.png" alt="" />
                        <img id='c2' src="Ar2.png" alt="" />
                        <img id='c3' src="Ar3.png" alt="" />
                        <img id='c4' src="Ar4.png" alt="" />
                        {/* <img id='c5' src="" alt="" /> */}
                    </div>
                </div>

                <div className="hoverdiv">

                    <div className="rowc">
                        <div className="circle"></div>
                        <div className="oval">
                            <p>Not live</p>
                        </div>
                    </div>
                    <div className="maincontent">
                        <img id='c1' src="Tz1.png" alt="" />
                        <img id='c2' src="tz2.png" alt="" />
                        <img id='c3' src="tz3.png" alt="" />
                        <img id='c4' src="tz4.png" alt="" />
                    </div>
                </div>

                <div className="hoverdiv">

                    <div className="rowc">
                        <div className="circle"></div>
                        <div className="oval">
                            <p>Live</p>
                        </div>
                    </div>
                    <div className="maincontent">
                        <img id='c1' src="bts.png" alt="" />
                        <img id='c2' src="bts2.png" alt="" />
                        <img id='c3' src="bts3.png" alt="" />
                        <img id='c4' src="bts5.png" alt="" />
                    </div>
                </div>

            </div>
            <div className="fworks" id="changecolor2">
                <span id='heading'>
                    <h1>Feat
                        Wo<span>r</span>ks <span id='mini'>(04)</span></h1>
                </span>

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="64"
                    height="64"
                    fill="none"
                    className="o-ui-arrow"
                    viewBox="0 0 64 64"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.102 3.102L63 63M63 1v62H1"
                    ></path>
                </svg>
            </div>
            <div className="workprojects pb-5" id="changecolor">
                <div className="project1">
                    <div className="col-md-3 flex" onMouseLeave={mouseleave} id='work1a'>

                        <div className="projdetail" onClick={() => openInNewTab("https://www.vincheckcentral.com")}>
                            <p>Vincheck Central</p>
                            <i class="ri-external-link-fill"></i>
                            <div className="triangle"></div>
                        </div>
                        <img src="./Assets/s1.png" alt="" onMouseMove={mousemove} onMouseLeave={mouseleave2} data-index="0" />
                    </div>
                    <div className="col-md-8 col-sm-12" id='work1b'>
                        <span className=''>
                            <h2>Vincheck Central</h2>
                            <h6>(Vehicle inspection site)</h6>
                            <p>Vincheck central offers client to inspect their vehicle's every signle minute detail using VIN report</p>
                            <div className='skillholder'>
                                <p>#Html</p>
                                <p>#Css</p>
                                <p>#Js</p>
                                <p>#React Js</p>
                                <p>#Bootstrap</p>
                                <p>#Swiper</p>
                                <p>#Redux</p>
                                <p>#aos</p>
                                <p>#react Pdf</p>
                                <p>#Dashboard</p>
                            </div>
                        </span>
                    </div>

                </div>
                <div className="project2">
                    <div className="col-md-3 flex" onMouseLeave={mouseleave} id='work1a'>
                        <div className="projdetail" id='arb2' onClick={() => openInNewTab("https://ahmedrehmanbuilders.com/")}>
                            <p>Ahmed & Rehman Builders</p>
                            <i class="ri-external-link-fill"></i>
                            <div className="triangle" id='arb2'></div>
                        </div>
                        <img src="./Assets/arl.png" alt="" onMouseMove={mousemove} onMouseLeave={mouseleave2} data-index="1" />
                    </div>
                    <div className="col-md-8" id='work1c'>
                        <span className=''>
                            <h2 id='arb'>AR Builders & Developers</h2>
                            <h6>(Real estate portfolio)</h6>
                            <p>AR Builders offers client to showcase their upcoming and ongoing projects for digital outreach </p>
                            <div className='skillholder'>
                                <p>#Html</p>
                                <p>#Css</p>
                                <p>#Js</p>
                                <p>#React Js</p>
                                <p>#Bootstrap</p>
                                <p>#Styled Components</p>
                                <p>#Whatsapp api</p>
                                <p>#aos</p>
                                <p>#react image uploader</p>
                            </div>
                        </span>
                    </div>

                </div>
                <div className="project1">
                    <div className="col-md-3 flex" onMouseLeave={mouseleave} id='work1a'>
                        <div id='th2' className="projdetail" onClick={() => openInNewTab("https://threadzapparel.netlify.app/")} >
                            <p >Threadz Apparel</p>
                            <i class="ri-external-link-fill"></i>
                            <div id='th2' className="triangle"></div>
                        </div>
                        <img src="./Assets/Tzl.png" alt="" onMouseMove={mousemove} onMouseLeave={mouseleave2} data-index="2" />
                    </div>
                    <div className="col-md-8" id='work1b'>
                        <span className=''>
                            <h2 id="th">Threadz</h2>
                            <h6>(Ecommerce store)</h6>
                            <p>Threadz an ecommerce store where folks shop new arrival & latest trend for men,women and juniors</p>
                            <div className='skillholder'>
                                <p>#Html</p>
                                <p>#Css</p>
                                <p>#Js</p>
                                <p>#React Js</p>
                                <p>#Bootstrap</p>
                                <p>#Tailwind</p>
                                <p>#Redux</p>
                                <p>#aos</p>
                                <p>#Styled Components</p>
                                <p>#Typed js</p>
                            </div>
                        </span>
                    </div>

                </div>
                <div className="project2">
                    <div className="col-md-3 flex" onMouseLeave={mouseleave} id='work1a'>
                        <div className="projdetail" id='bee2' onClick={() => openInNewTab("https://www.beetruthspeaker.com/")}>
                            <p>Bee truth speaker</p>
                            <i class="ri-external-link-fill"></i>
                            <div className="triangle" id='bee2'></div>
                        </div>
                        <img src="./Assets/btl.png" alt="" onMouseMove={mousemove} onMouseLeave={mouseleave2} data-index="3" />
                    </div>
                    <div className="col-md-8" id='work1c'>
                        <span className=''>
                            <h2 id='bee'>Bee truth speaker</h2>
                            <h6>(Palestenian social activist site)</h6>
                            <p>Bee thruth speaker amplifies the palestenian voice on social media,user can share prop palestenian content from their respective social media platform</p>
                            <div className='skillholder'>
                                <p>#Html</p>
                                <p>#Css</p>
                                <p>#Js</p>
                                <p>#React Js</p>
                                <p>#Tailwind</p>
                                <p>#Styled Components</p>
                                <p>#React Social</p>
                            </div>
                        </span>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Worksection
