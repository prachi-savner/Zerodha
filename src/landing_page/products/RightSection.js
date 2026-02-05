import React from 'react';
function RightSection({imageUrl,productName, productDescription,learnMore}) {
    return ( 
        <div className='container mt-5'>
            <div className='row'>
                
                <div className='col-6 p-5 mt-5'>
                    <h2>{productName}</h2>
                    <p className='text-muted'>{productDescription}</p>
                    <div>
                    <a href={learnMore}>Learn More</a>
                    </div>
                </div>

                <div className='col-6 '>
                    <img src={imageUrl} alt={productName} />
                    
                </div>
            </div>
        </div>
     );
}

export default RightSection;