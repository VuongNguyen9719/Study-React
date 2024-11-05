const withDynamicContext = (contextHook, mapContextToProps) => (WrappedComponent) => {
    return (props) => {
        const context = contextHook ? contextHook() : {};

        const mappedProps = mapContextToProps ? mapContextToProps(context) : { context };
        return <WrappedComponent {...props} {...mappedProps} />;
    };
};

export {
    withDynamicContext
}