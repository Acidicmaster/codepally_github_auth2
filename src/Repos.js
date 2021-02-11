import React from "react";
import axios from "axios";
import _ from "lodash";

class Repos extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            repos: []
        }

        axios.get("https://github-trending-api.now.sh/repositories?since=weekly")
            .then(res => {
                console.log(res.data);
                this.setState({
                    repos: res.data
                })
            });
    }

    render() {

        const { repos } = this.state;

        return (
            <div>
                <ul>
                    <div>
                        Trending Repos
                    </div>
                    {
                        _.map(repos, (item, index) => {
                            if(index >= 10) {return;}
                            return(
                                <li key={index}>
                                    Repo = {index+1}
                                    <div>
                                        Name: {item.name}
                                    </div>
                                    <div>
                                        Description: {item.description}
                                    </div>
                                    <div>
                                        URL: <a target="_blank" href={item.url}>{item.url}</a>
                                    </div>
                                    <br />
                                </li>
                            )
                        })
                    }
                    <br />
                </ul>
            </div>
        );
    }
}

export default Repos;
