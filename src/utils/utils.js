export function bindToThis(context, ...functions) {
    functions.forEach(f => {
        context[f.name] = f.bind(context);
    });
}
