import React from 'react';
import {Table} from "react-bootstrap"


class App extends React.Component {

   
    constructor(props) {

        super(props);

        this.state = {
            items: [],
            isLoaded: false
        }

    }


    componentDidMount() {

        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    items: json,
                    isLoaded: true, 
                })
            }).catch((err) => {
                console.log(err);
            });

    }


    render() {

        const { isLoaded, items } = this.state;

        if (!isLoaded)
            return <div>Loading...</div>;

        return (
            <div className="App">
                <ul>
                    {items.map(item => (
                        <table class="table">
                        <thead class="thead-dark">
                          <tr>
                            <th scope="col">ID</th>
                            <br></br>
                            <th scope="col">TITLE</th>
                            <br></br>
                            <th scope="col">URL</th>
                            <br></br>
                            <th scope="col">THUMBNAIL</th>
                          </tr>
                          <br></br>
                        </thead>
                        <tbody>
                          <tr>
                    <th scope="row">{item.id}</th>
                    <br></br>
                            <td>{item.title}</td>
                            <br></br>
                            <td>{item.url}</td>
                            <br></br>
                            <td>{item.thumbnailUrl}</td>
                          </tr>
                          </tbody>
                          </table>
                    ))}
                </ul>
            </div>
        );

    }

}

export default App;