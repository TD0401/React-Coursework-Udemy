import React from 'react';

//converted class based component to stateless functional compnents
const Header = (props) => (
    
    <div className= "header">
        <div className="container">
            <h1 className="header__title">{props.title}</h1>
            <h2 className="header__subtitle">{props.subTitle}</h2>
        </div>
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

