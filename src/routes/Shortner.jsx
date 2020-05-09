import React from 'react';

class Shortner extends React.Component {
    render() {
        console.log('this.props in shortner compoennt ::: ', this.props);
        return (
            <div>Inside the shortner component</div>
        )
    }
}

export default Shortner;