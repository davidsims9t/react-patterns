import { useEffect, useState } from "react";
import Presentation from "./Presentation";

const Container = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            setData([
                {
                    name: "Test",
                    age: 42
                }
            ]);
        };

        getData();
    }, []);

    return (
        <Presentation data={data} />
    );
};

export default Container;