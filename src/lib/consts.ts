import { writable } from "svelte/store";

// export const theSillyHook = writable("");
export const theSillyHook = writable([[""], [""]]);

export const NODES = {
    PREFIX: "PREFIX",
    NOUN: "NOUN",
    ADJECTIVE: "ADJECTIVE",
    VERB: "VERB",
    LINKING_WORD: "LINKING_WORD",
    USE: "USE",
};

const { PREFIX, NOUN, ADJECTIVE, VERB, LINKING_WORD, USE } = NODES;

export const NODE_TREE = {
    [USE]: [ADJECTIVE, NOUN, PREFIX],
    [PREFIX]: [NOUN, VERB],
    [NOUN]: [LINKING_WORD, PREFIX],
    [ADJECTIVE]: [NOUN, PREFIX],
    [VERB]: [ADJECTIVE, LINKING_WORD, NOUN, PREFIX],
    [LINKING_WORD]: [NOUN, ADJECTIVE, PREFIX],
};

// MORE COMPLEX CONDITIONING
// export const NODE_TREE = {
//     [USE]: [ADJECTIVE, NOUN],
//     [PREFIX]: [NOUN, VERB],
//     [NOUN]: [LINKING_WORD],
//     [ADJECTIVE]: [NOUN, VERB],
//     [VERB]: [ADJECTIVE, LINKING_WORD, NOUN],
//     [LINKING_WORD]: [NOUN, ADJECTIVE],
// };

export const PHRASE_RULES = [
    (nodeList: string[]) => {
        const currentNodeIndex = nodeList.length - 1;
        if (
            nodeList[currentNodeIndex] === LINKING_WORD &&
            nodeList[currentNodeIndex - 1] === NOUN
        ) {
            return [ADJECTIVE];
        }
        return [];
    },
    (nodeList: string[]) => {
        const currentNodeIndex = nodeList.length - 1;
        if (nodeList[currentNodeIndex] === NOUN) {
        }
        return [];
    },
];

export const PHRASE_RESTRICTIONS = {
    [`${NOUN}${LINKING_WORD}`]: [ADJECTIVE],
    [LINKING_WORD]: {
        2: LINKING_WORD,
    },
};

export const PREFIX_LIST = [
    "UNSAFE_",
    "LEGACY_",
    "INTERNAL_DONT_USE_OR_YOU_WILL_BE_FIRED_",
    "DEPRECATED_",
];

export const NOUN_LIST = [
    "children",
    "siblings",
    "parent",
    "container",
    "element",
    "component",
    "escapeHatch",
    "placeholder",
    "state",
    "props",
    "previousProps",
    "ref",
    "instance",
    "context",
    "provider",
    "entity",
    "records",
    "client",
    "server",
];

export const ADJECTIVE_LIST = [
    "strict",
    "bloated",
    "stringified",
    "cloned",
    "prepared",
    "sorted",
    "minified",
    "processed",
    "compiled",
    "clientSide",
    "serverSide",
    "raw",
    "formatted",
    "inner",
    "outer",
    "reactive",
];

export const VERB_LIST = [
    "derive",
    "create",
    "begin",
    "invoke",
    "call",
    "generate",
    "reconcile",
    "bring",
    "update",
    "hydrate",
    "humidify",
    "dampen",
    "rerender",
    "render",
    "toggle",
    "set",
    "get",
    "submit",
    "do",
    "make",
    "yield",
    "omit",
    "extrapolate",
    "produce",
    "ascertain",
    "infer",
    "commit",
    "request",
    "generate",
];

export const LINKING_WORD_LIST = [
    "then",
    "when",
    "after",
    "before",
    "onlyWhen",
    "butNotUntil",
    "always",
    "therefore",
];

type PossibleTextNodeList = {
    [key: string]: string[];
};

export const allTextNodes: PossibleTextNodeList = {
    PREFIX: PREFIX_LIST,
    NOUN: NOUN_LIST,
    ADJECTIVE: ADJECTIVE_LIST,
    VERB: VERB_LIST,
    LINKING_WORD: LINKING_WORD_LIST,
};
