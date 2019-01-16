import React from 'react';

 const authenticate = WrappedComponent =>
    class extends React.Component{
        constructor(props){
            super(props);
            this.state = {

            }
        }
        render(){
            return(
                <div>
                    <WrappedComponent />
                </div>
            )
        }
    }

export default authenticate;