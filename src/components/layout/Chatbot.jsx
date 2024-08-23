import ChatBot from 'react-simple-chatbot';
import { steps } from '../../data/chatbot';
import { theme } from '../../data/chatheme';
import { ThemeProvider } from 'styled-components';

export const Chatbot = () => {
    return(
        <>
            <div>
                <ThemeProvider  theme={theme}>
               
                <ChatBot
                    steps={steps}
                    floating={true}
                    botDelay={1000}
                    headerTitle="MentorAI"
                    
                />
                </ThemeProvider>
            </div>
        </>
    )
}
