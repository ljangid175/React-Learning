function customRender (reactElement, container) {
    /* const myElement = document.createElement(reactElement.type)
    myElement.innerHTML = reactElement.children
    myElement.setAttribute('href', reactElement.props.href)
    myElement.setAttribute('target', reactElement.props.target)

    container.appendChild(myElement) */

    const myElement = document.createElement(reactElement.type)
    myElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        if (prop === 'children') continue
        myElement.setAttribute(prop, reactElement.props[prop])
    }
    
    container.appendChild(myElement)
}

/// blue print of the element tree
const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: "Click me"
}
///

const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)