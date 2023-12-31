const List = ({ children }) => {
    return (
        <ul>
            {children}
        </ul>
    );
};

const ListItem = ({ children }) => {
    return (
        <li>{children}</li>
    );
};

List.ListItem = ListItem;

export default List;