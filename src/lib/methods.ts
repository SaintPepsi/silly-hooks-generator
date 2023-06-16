import {
    NODES,
    NODE_TREE,
    theSillyHook,
    allTextNodes,
} from "./consts";

function getRandomElement(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    const word = array[randomIndex];

    return word.charAt(0).toUpperCase() + word.slice(1);
}

function getNextTextNode(trackedNodes) {
    const currentNode = trackedNodes[trackedNodes.length - 1];
    const nodePaths = NODE_TREE[currentNode];
    // BACK CHECK FOR COMPLEX ROUTE
    const newNode = getRandomElement(nodePaths);
    const pathText = getRandomElement(allTextNodes[newNode]);
    return { text: pathText, newNode };
}

function generateSentence(length) {
    const finalString = ["use"];
    const trackedNodes = [NODES.USE];
    while (
        finalString.length < length ||
        trackedNodes[trackedNodes.length - 1] !== NODES.ADJECTIVE
    ) {
        const { text, newNode } = getNextTextNode(trackedNodes);
        finalString.push(text);
        trackedNodes.push(newNode);
    }
    return finalString.join("");
}

export function useSillyHookGenerator() {
    // Generates a silly hook name!
    // const sillyHook = generateSentence(~~(Math.random() * 3));
    const sillyHook = generateSentence(4);
    theSillyHook.set(sillyHook);
}
