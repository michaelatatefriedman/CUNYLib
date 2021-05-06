import React from 'react';


class SearchPage extends React.Component {
    render() {
    
        return (
          <div className="col-10 col-md-8 col-lg-7">
            <div className="input-group">
              <input 
                type="text" 
                placeholder="Search a textbook here..." 
                className="form-control mr-3 rounded"
              />
              <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Search By...
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a class="dropdown-item" href="#">Name</a>
                  <a class="dropdown-item" href="#">Author</a>
                  <a class="dropdown-item" href="#">ISBN</a>
                </div>
              </div>
            </div>
          </div>
        );
      }
    }

    //Will add a list generated of react components for when searched.

export default SearchPage;