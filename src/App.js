import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css';

const projectID = 'e5a9bea3-1320-49c7-90dd-a9a4b7b6d048';

const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;

  return (
    <div>
      <button href="" type="button">HOME</button>
      <ChatEngine
        height="90vh"
        projectID={projectID}
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
      />
    </div>
  );
};

// infinite scroll, logout, more customizations...

export default App;
