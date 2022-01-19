import React, { Component } from 'react';

class DemoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            comment: '',
            language: 'vue'
        }
    }

    changeEmailHandler = e => {
        this.setState({ email: e.target.value})
    }

    changeCommentHandler = e => {
        this.setState({ comment: e.target.value})
    }

    changeLanguageHandler = e => {
        this.setState({ language: e.target.value})
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" value={this.state.email} onChange={this.changeEmailHandler} />
                </div>
                <div>
                    <label htmlFor="comment">Comments</label>
                    <textarea id="comment" value={this.state.comment} onChange={this.changeCommentHandler}></textarea>
                </div>
                <div>
                    <label htmlFor="language">Language</label>
                    <select id="language" value={this.state.language} onChange={this.changeLanguageHandler}>
                        <option value="react">React</option>
                        <option value="vue">Vue</option>
                        <option value="angular">Angular</option>
                    </select>
                </div>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default DemoForm;
