import React, { Component } from 'react'

export default class UserCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: '',
            itemToDisplay: ''
        }
    }

    getData = () => {
        fetch('https://randomuser.me/api/')
            .then(res => res.json())
            .then(responseData => {
                let result = responseData.results[0]
                console.log(responseData.results);
                this.setState({ 
                    name: result.name.first + ' ' + result.name.last,
                    img: result.picture.large,
                    phone: result.phone,
                    email: result.email
                });
                console.log(this.state)
            })
    }

    handleClick = () => {
        this.getData();
    }

    setData = (data) => {
        this.setState({ display: data });
    }

    render() {

        console.log('Rendering...')
        return (
            <div>
                <img src={this.state.img}></img>
                <h2>Click below for a new user</h2>
                <h3>{this.state.name}</h3>
                <br></br>
                {this.state[this.state.display]}
                <br></br>
                <button onClick={() => { this.setData('phone') }}>Phone</button>
                <button onClick={() => { this.setData('email') }}>Email</button>
                <button onClick={this.handleClick}>New User</button>
            </div>
        )
    }
}