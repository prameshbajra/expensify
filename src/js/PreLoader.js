import React from 'react';

import Spinner from 'react-spinkit';

const PreLoader = () => (
    <div className="col-md-1 col-md-offset-6">
        <Spinner name="ball-clip-rotate-multiple" color="red" />
    </div>
);

export default PreLoader;
