// hoc/withSocket.tsx
import { getSocketWithToken } from '@utils/functions';
import React, { useState, useEffect, ComponentType } from 'react';
import SocketContext from '../contexts/SocketContext';
import { Socket } from 'socket.io-client';
// import Cookies from 'js-cookie';

/**
 * The Sockets interface represents the two socket namespaces
 * that are used in the application.
 */
export interface Sockets {
    /**
     * namespace1: A Private Socket instance representing the connection
     * to the first namespace. This can be used for handling
     * real-time events and communication specific to the first
     * namespace. If the connection is not established or
     * disconnected, this property will be null.
     */
    namespace1: Socket | null;

    /**
     * namespace2: A Public Socket instance representing the connection
     * to the second namespace. This can be used for handling
     * real-time events and communication specific to the second
     * namespace. If the connection is not established or
     * disconnected, this property will be null.
     */
    namespace2: Socket | null;

    /**
     * namespace3: A Public Socket instance representing the connection
     * to the second namespace. This can be used for handling
     * real-time events and communication specific to the second
     * namespace. If the connection is not established or
     * disconnected, this property will be null.
     */
    namespace3: Socket | null;
    /**
     * StageSocket: A Public Socket instance representing the connection
     * to the second namespace. This can be used for handling
     * real-time events and communication specific to the second
     * namespace. If the connection is not established or
     * disconnected, this property will be null.
     */
    //stageSocket: Socket | null;
}

const withSocket =
    <P extends object>(Component: ComponentType<P>) =>
    // eslint-disable-next-line react/display-name
    (props: P) => {
        const [sockets, setSockets] = useState<Sockets>({ namespace1: null, namespace2: null, namespace3: null });

        useEffect(() => {
            // const token = Cookies.getJSON('jwt');
            const token = localStorage.getItem('jwt');

            const namespace1 = getSocketWithToken(token, '/private');
            const namespace2 = getSocketWithToken(null, '/public');
            const namespace3 = getSocketWithToken(null, '/collection/public');
            //const stageSocket = getSocketWithStage(user, '/ws');

            setSockets({ namespace1, namespace2, namespace3 });

            return () => {
                namespace1.disconnect();
                namespace2.disconnect();
                namespace3.disconnect();
                //namespace3.disconnect();
                /* if (stageSocket?.readyState === 1) {
                    stageSocket.disconnect();
                } */
                //stageSocket.disconnect();
            };
        }, []);

        return (
            <SocketContext.Provider value={sockets}>
                <Component {...props} />
            </SocketContext.Provider>
        );
    };

export default withSocket;
