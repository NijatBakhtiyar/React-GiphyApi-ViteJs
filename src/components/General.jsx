import {useState} from 'react'
import Buttons from './Buttons'
import Content from './Content'
import Search from './Search'

function General() {
    const [search, setSearch] = useState([]);
    const [buttonName, setButtonName] = useState(null);
    const [loading, setLoading] = useState(false)


    return (
        <div>
            <Buttons
                search={search}
                setButtonName={setButtonName}
                setLoading={setLoading}
            />
            <Search setSearch={setSearch}/>
            <Content
                buttonName={buttonName}
                setLoading={setLoading}
                loading={loading}
            />
        </div>
    )
}

export default General
