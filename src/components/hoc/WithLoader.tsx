const withLoader = (Component, url) => {
    return (props) => {
        return <Component {...props} />
    };
};

export default withLoader;