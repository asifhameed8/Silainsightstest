import { createContext } from 'react';
interface ChatContextInterface {
    clickGroup: Function | null;
    clickUser: Function | null;
    closeBox: Function | null;
    boxes: Object[];
    setBoxes: Function | null;
    openSupport: Function | null;
    closeSupport: Function | null;
}
const defaultChatContext: ChatContextInterface = {
    clickGroup: null,
    clickUser: null,
    closeBox: null,
    boxes: [],
    setBoxes: null,
    openSupport: null,
    closeSupport: null
};

const ChatContext = createContext(defaultChatContext);

export default ChatContext;
