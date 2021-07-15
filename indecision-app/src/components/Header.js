import React from 'react';

//converted class based component to stateless functional compnents
const Header = (props) => (
    <div>
        <h1>{props.title}</h1>
        <p>{props.subTitle}</p>
    </div>
);


Header.defaultProps ={
    title: "Indecision App"
}

export default Header;
/*class Header extends React.Component{
    render(){
        return (
            <div>
                <h1>{this.props.title}</h1>
                <p>{this.props.subTitle}</p>
            </div>
        );
    }
}*/

