import axios from 'axios';
import { Link, navigate } from '@reach/router';
import { useEffect, useState} from 'react';

const ResultsTable = (props) => {
    const [polls, setPolls] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8000/api/polls')
            .then(res => {
                console.log(res);
                setPolls(res.data.polls);
            }).catch(err => {
                console.log(err);
            })
    }, [])
    return (
        <div className="container-sm max-width: 300px">
        <table className="table table-striped table-hover table-dark">
            <thead className="thead-dark">
                <tr>
                    <th>Top 3 Polls</th>
                </tr>
            </thead>
            <div className="container-sm">
            <table className="table table-striped table-hover table-dark">
            <thead className="thead-dark">
                <tr>
                    <th>Resent Polls</th>
                </tr>
            </thead>
            </table>
            </div>
            <tbody>
                {
                    polls.map((item,key) =>{
                        return (
                            <tr>
                                <td>{item.name}</td>
                                <td>{item.type}</td>
                                <td>
                                    <Link to={"/polls/" + item._id}>Details </Link>
                                    <Link to={"/polls/" + item._id + "/edit"}> Edit</Link>
                                </td>
                            </tr> 
                        )
                    })
                }
            </tbody>
        </table>
    </div>
    )
}

export default ResultsTable;