const RenderProps = ({ renderComponent }) => {
    const propsToPassToFn = {
        hello: 'world'
    };

    return (
        <div>
            Hello: {renderComponent(propsToPassToFn)}
        </div>
    );
};

const Component = () => {
    return (
        <RenderProps
            renderComponent={(propsToPassToFn) => {
                return <span>{propsToPassToFn.hello}</span>
            }}
        />
    );
};

export default Component;