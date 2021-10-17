import { Link, navigate } from '@reach/router';
const PageHeader = (props) => {
    return (
        <div>
            <div className="jumbotron mt-3">
                <h1>{props.main}</h1> 
                <Link to={props.link}>{props.linkTitle}</Link>
            </div>
            <h2>{props.sub}</h2>
        </div>
    )
}

export default PageHeader;