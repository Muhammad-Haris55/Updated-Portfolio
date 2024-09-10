import React from 'react'

function Bottomsection() {
    return (
        <div className="bottom" id='about'>
            <div className="bottomtext col-md-5 col-sm-8 my-2"  >
                <h1 >

                    I am Harris Imran, I<br />
                    create <span>unconventional</span><br />
                    yet functional &<br />
                    visually pleasing<br />
                    interfaces for the<br />
                    mobile and web.<br />
                </h1>
            </div>
            <div className="bottomimages col-md-7 col-sm-7">
                <img src="https://images.unsplash.com/photo-1603080955672-87307194d4a4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1vZGVscyUyMHBvdHJhaXRzJTIwaW4lMjBncmFzc3xlbnwwfHwwfHx8MA%3D%3D" className='image' id='img1' />
                <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW9kZWxzJTIwcG90cmFpdHMlMjBvZiUyMGZhY2V8ZW58MHx8MHx8fDA%3D" className='image' id='img2' alt="" />
                <img src="https://images.unsplash.com/photo-1591270236235-ba23d547fce2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTMzfHxtb2RlbHMlMjBwb3RyYWl0cyUyMGZhY2V8ZW58MHx8MHx8fDA%3D" className='image' id='img3' alt="" />
            </div>
        </div>
    )
}

export default Bottomsection
