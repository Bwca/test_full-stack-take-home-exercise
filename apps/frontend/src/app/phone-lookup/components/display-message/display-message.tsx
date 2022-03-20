import { FC } from 'react';

import ReactMarkdown from 'react-markdown';

interface DisplayMessageProps {
  message: string;
}

export const DisplayMessage: FC<DisplayMessageProps> = ({ message }) => {
  return (
    <div>
      <strong>message: </strong>
      <ReactMarkdown>{message}</ReactMarkdown>
    </div>
  );
};
