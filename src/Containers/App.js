import React, {useEffect, useState} from 'react';
import CardList from '../Components/cardList';
import SearchBox from '../Components/searchBox.js';
import './App.css';
import Scroll from '../Components/Scroll.js';
import ErrorBoundary from '../Components/ErrorBoundary';

function App() {
    // constructor()
    // {
    //     super()
    //     this.state =
    //     {
    //         robots: [],
    //         searchfield: ''
    //     }
    // }

    const [robots, setRobots] = useState([]);
    const [searchfield, setSearchfield] = useState('');

    // componentDidMount()
    // {
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //     .then (response => response.json())
    //     .then (users => this.setState({robots: users}));  
    // }

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then (response => response.json())
        .then (users => {setRobots(users)});  
    }, [])

    const onSearchChange = (e) =>
    {
        setSearchfield(e.target.value)
    }

    const filteredRobots = robots.filter(robot =>
        {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
    return (
        <div className='tc'>
        <h1 className='f1'>RoboFriends</h1>
        <SearchBox searchChange={onSearchChange}/>
        <Scroll>
        <ErrorBoundary>
        <CardList robots = {filteredRobots}/>
        </ErrorBoundary>
        </Scroll>
        </div>
    );
        

}

export default App;