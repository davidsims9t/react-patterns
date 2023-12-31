import { useEffect, useState } from "react";

const useData = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        setData([
            {
                hello: 'world'
            }
        ]);
    }, []);

    return {
        data
    };
};

const Component = () => {
    const { data } = useData();

    return (
        <ul>
            {data.map((li) => {
                return <li>{li.hello}</li>
            })}
        </ul>
    );
}

export default Component;