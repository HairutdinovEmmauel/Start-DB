const compose = ( ... funcs ) => (component) => {
    return funcs.reduceRight(
        (PrevResult, f) => f(PrevResult), component);
}

export default compose;