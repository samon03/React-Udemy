import React from 'react';

const withClass = (Wrapper, className) => {
    return props => (
        <div className={className}>
            <Wrapper {...props} />
        </div>
    );
}

export default withClass;