import {
    NODES,
    NODE_TREE,
    theSillyHook,
    allTextNodes,
    PHRASE_RULES,
} from "./consts";

function getRandomElement(array: string[]) {
    const randomIndex = Math.floor(Math.random() * array.length);
    const word = array[randomIndex];

    return word.charAt(0).toUpperCase() + word.slice(1);
}

function getPossibleNodes(nodeList: string[]) {
    const currentNodeIndex = nodeList.length - 1;
    const currentNode = nodeList[currentNodeIndex];

    for (let i = 0; i < PHRASE_RULES.length; i++) {
        const result = PHRASE_RULES[i](nodeList);
        if (result.length) return result;
    }

    return NODE_TREE[currentNode];
}

function getNextTextNode(trackedNodes: string[]) {
    const possibleNodes = getPossibleNodes(trackedNodes);
    const newNode = getRandomElement(possibleNodes);
    const pathText = getRandomElement(allTextNodes[newNode]);
    return { text: pathText, newNode };
}

function generateSentence(length: number) {
    const finalString = ["use"];
    const trackedNodes: string[] = [NODES.USE];
    while (
        finalString.length < length ||
        trackedNodes[trackedNodes.length - 1] !== NODES.ADJECTIVE
    ) {
        const { text, newNode } = getNextTextNode(trackedNodes);
        finalString.push(text);
        trackedNodes.push(newNode);
    }
    return [finalString, trackedNodes];
}

export function useSillyHookGenerator() {
    // Generates a silly hook name!
    // const sillyHook = generateSentence(~~(Math.random() * 3));
    const sillyHook = generateSentence(8);
    theSillyHook.set(sillyHook);
}
