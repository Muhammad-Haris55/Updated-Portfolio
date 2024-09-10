import React from 'react'

function Screen1() {
    return (
        <>
            <div className="page1">
                <div className="textholder">
                    <div className='dp d-flex flex-column align-items-center'>
                        <div className='s1'>
                            <p>Design Portfolio</p>
                        </div>
                        <div className='s2'>
                            <p>© 2024</p>
                        </div>
                    </div>
                    <span className='d-flex align-items-center justify-content-center' id="fullname">
                        <p className='name'>Harris <span className='name2'>Imran</span></p> <p className='sub'>is a</p>
                    </span>
                    <span id='load'>
                        <div class="loader">
                            <span></span>
                        </div>
                    </span>
                </div>
            </div>
        </>
    )
}

export default Screen1
