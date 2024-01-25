import { createContext } from 'react';
import { Sockets } from 'src/hoc/withSocket';

const defaultSockets: Sockets = {
    namespace1: null,
    namespace2: null,
    namespace3: null
};

const SocketContext = createContext<Sockets>(defaultSockets);

export default SocketContext;
