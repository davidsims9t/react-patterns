
const Presentation = ({ data }) => {
    return (
        <ul>
            {data.map(li => {
                return <li>{li.name}</li>
            })}
        </ul>
    );
};

export default Presentation;