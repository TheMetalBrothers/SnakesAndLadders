import { useState, useEffect, SetStateAction } from 'react';
import { socket } from '../socket';
import { ConnectionState } from './connectionState';
import { ConnectionManager } from './connectionManager';
import { Events } from "./Events";
import { MyForm } from './myForm';

export default function Chat() {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [msgEvents, setMsgEvents] = useState([]);

  useEffect(() => {
    function onConnect() {
      setIsConnected(true);
    }

    function onDisconnect() {
      setIsConnected(false);
    }

    function onMsgEvent(value: SetStateAction<never[]>) {
      setMsgEvents(value); //todo fix <- - - - - - - - - - -
    }

    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);
    socket.on('message', onMsgEvent);

    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
      socket.off('message', onMsgEvent);
    };
  }, []);

  return (
    <div className="Chat">
      <ConnectionState isConnected={ isConnected } />
      <Events events={ msgEvents } />
      <ConnectionManager />
      <MyForm />
    </div>
  );
}