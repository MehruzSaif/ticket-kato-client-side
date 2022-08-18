import React from 'react';
import '../Searching/Search.css';
const BusItem = ({order}) => {
    return (
        <div className='d-flex justify-content-center'>
        <div >
            <div class="card mb-3" style={{'max-width':'540px'}}>
                <div class="row g-0">
                    <div class="col-md-4">
                        {/* <img src='' class="img-fluid rounded-start" alt="..."> */}
                    </div>
                    <div class="col-md-8">
                        <div class="card-body bus-name">
                            {/* <h5 class="card-title bus-name">Bus-1</h5> */}
                            <h4 className='bus-name'>Bus-1</h4>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p class="card-text"><small class="text-muted"></small></p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card mb-3" style={{'max-width':'540px'}}>
                <div class="row g-0">
                    <div class="col-md-4">
                        {/* <img src="..." class="img-fluid rounded-start" alt="..."> */}
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                        <h4 className='bus-name'>Bus-2</h4>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p class="card-text"><small class="text-muted"></small></p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card mb-3" style={{'max-width':'540px'}}>
                <div class="row g-0">
                    <div class="col-md-4">
                        {/* <img src="..." class="img-fluid rounded-start" alt="..."> */}
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                        <h4 className='bus-name'>Bus-3</h4>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p class="card-text"><small class="text-muted"></small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        
    );
};

export default BusItem;