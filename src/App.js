import React from 'react';

function App(){
    return(
        <>
          {/* Header */}
          <div className="container-fluid bg-light">
            <div className="text-center py-4">
                <h5>Header</h5>
            </div>
          </div>
       {/* Main Block */}
        <div className="container my-3">
            <div className="row">
                <div className="col-lg-7 text-center py-4 bg-light con-size">
                    <h6>Main Block</h6>
                </div>

                <div className="col-lg-4 text-center py-4 bg-light ml-4">
                    <h6>Sidebar</h6>
                </div>
            </div>
        </div>

         {/* Footer */}
         <div className="container-fluid bg-light">
            <div className="text-center py-4">
                <h5>Footer</h5>
            </div>
          </div>

        </>
    )
}

export default App;