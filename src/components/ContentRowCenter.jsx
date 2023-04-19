import React from 'react';
import LastUsers from './LastUsers';
import Categories from './Categories';

function ContentRowCenter(){
    return (
        <div className="row">
            <LastUsers  />
            <Categories />
        </div>
    )
}

export default ContentRowCenter;