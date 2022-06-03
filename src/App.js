import React ,{Component} from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';

class  App extends Component {
    constructor(){
        super()
        this.state={
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://api.edamam.com/api/recipes/v2?type=public&q=garlic&app_id=c231d665&app_key=9032de6e2946e18cf2cb629410f36f28&cuisineType=Asian&imageSize=REGULAR')
            .then(response=> response.json())
            .then(random => {this.setState({robots: random.hits})})
        }
    

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value});
    }

    render() {
        const filteredRobots = this.state.robots.filter(robot =>{
            return robot.recipe.label.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        return (
            <div className='tc'>
                <h1>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <CardList robots={filteredRobots}/>
                </Scroll>
            </div>
        );
    }
}

export default App;