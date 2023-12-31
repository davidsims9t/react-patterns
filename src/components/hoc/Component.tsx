import withLoader from "./WithLoader";

const Component = () => {
    return (
        <div>
            Hello World
        </div>
    );
}

export default withLoader(Component, "http://www.google.com/");