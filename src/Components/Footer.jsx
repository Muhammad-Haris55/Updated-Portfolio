import React from 'react'

function Footer() {
    return (
        <div className="footer" id='contact'>
            <div className="svgholder">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 1254 1254">
                    <circle
                        cx="627"
                        cy="627"
                        r="627"
                        fill="url(#paint0_radial_3260_3)"
                    ></circle>
                    <defs>
                        <radialGradient
                            id="paint0_radial_3260_3"
                            cx="0"
                            cy="0"
                            r="1"
                            gradientTransform="matrix(0 813 -813 0 627 0)"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#F3F3F3" stopOpacity="0.45"></stop>
                            <stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
                        </radialGradient>
                    </defs>
                </svg>

            </div>
            <div className="footertext">
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
                <span id="dis">

                    <h1>
                        Let's Talk<br />
                        About the Next<br />
                        big thing<br />
                    </h1>
                </span>


                <span id='text1'>
                    <h2 style={{ textTransform: 'none' }}>
                        Let's <br />
                    </h2>
                    <h2 style={{ textTransform: 'none', display: 'flex' }}>Co<span ><p>nn</p></span>ect<br /></h2>

                </span>


            </div>
            <div className="footerbtn">
                <button className='messagebtn' onClick={() => window.open("https://mail.google.com/mail/?view=cm&fs=1&to=Harrisimran55@gmail.com&su=Subject&body=Your%20message", "_blank")} ><a href="">Write a Message</a></button>

                <button className='messagebtn' onClick={() => window.open('https://api.whatsapp.com/send/?phone=03111246705&text=Hi%2C+I+want+to+discuss+about+a+project.&type=phone_number&app_absent=0', '_blank')} ><a href="">Discuss Project</a></button>
            </div>
            <div className="socials">
                <a href="https://github.com/Muhammad-Haris55" target='blank'>

                    <div className="social">

                        <div className="socialid">
                            <p>Github</p>
                            <p>@Muhammad-Haris55</p>
                        </div>
                        <div className="socialicon">
                            <i class="ri-github-fill"></i>
                        </div>
                    </div>
                </a>
                <a href="https://www.linkedin.com/in/harris-imran55/" target='blank'>
                    <div className="social">

                        <div className="socialid">
                            <p>Linkedin</p>
                            <p>@Harris Imran</p>
                        </div>
                        <div className="socialicon">
                            <i class="ri-linkedin-line"></i>
                        </div>

                    </div>
                </a>
                <a href="">

                    <div className="social">

                        <div className="socialid">
                            <p>Gmail</p>
                            <p>@Harrisimran55@gmail.com</p>
                        </div>
                        <div className="socialicon">
                            <i class="ri-mail-line"></i>
                        </div>


                    </div>
                </a>

                <a href='https://api.whatsapp.com/send/?phone=03111246705&text=Hi%2C+I+want+to+discuss+about+a+project.&type=phone_number&app_absent=0'>

                    <div className="social">
                        <div className="socialid">
                            <p>Phone</p>
                            <p>+92 311 1246705</p>
                        </div>
                        <div className="socialicon">
                            <i class="ri-phone-line"></i>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Footer
