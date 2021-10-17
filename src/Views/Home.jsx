import { Link, navigate } from '@reach/router';
import PageHeader from '../Components/PageHeader';
import ResultsTable from '../Components/ResultsTable'

const Home = () => {
    return (
        <div>
            <PageHeader main="Poll" sub="These polls look for voters" link="/polls/new" linkTitle="Add a new poll"></PageHeader>
            <ResultsTable></ResultsTable>
        </div>
    )
}

export default Home