import React from 'react';
import './stylesheets.css';
import styled from 'styled-components';

const paraStyled = {
    fontSize: '20px',
    backgroundColor: 'yellow'
}

const Button = styled.button`
    background: ${props => props.primary ? "palevioletred" : "white"};
    color: ${props => props.primary ? "white" : "palevioletred"};
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
`;

const StyleSheets = () => {
    return (
        <>
            <h1 className="primary">CSS StyleSheets</h1>
            <p className="secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae adipisci numquam earum odio itaque corrupti harum neque corporis maxime officiis, architecto ea? Laborum officia voluptas explicabo iusto quod maxime ducimus.</p>
            <p style={paraStyled}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, asperiores porro sapiente sit deleniti repudiandae, cupiditate, natus aperiam ipsa numquam aliquid vel quasi consequuntur repellendus praesentium! Distinctio repellat porro rerum?</p>
            <p style={{ fontSize: '1.3rem',backgroundColor: 'green'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, odit.</p>
            <Button>Normal</Button>
            <Button primary>Primary</Button>
        </>
    )
};

export default StyleSheets;
