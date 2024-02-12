import React from 'react'
import './DescriptionBox.css'
const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">
                Description
            </div>
            <div className="descriptionbox-nav-box fade">
                Reviews(122)
            </div>
        </div>
        <div className="descriptionbox-description">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius esse impedit minima laudantium, consequuntur eaque quis blanditiis distinctio? Iste mollitia odit natus accusantium enim molestiae, quia deleniti. Doloribus nemo vel repudiandae accusamus enim! Quo voluptatibus recusandae nisi perspiciatis deleniti sequi.</p>
        </div>
    </div>
  )
}

export default DescriptionBox