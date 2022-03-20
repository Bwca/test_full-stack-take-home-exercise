import { FC, Fragment, useMemo } from 'react';

interface DisplayMessageProps {
  message: string;
}

export const DisplayMessage: FC<DisplayMessageProps> = ({ message }) => {
  const linkRegex = /^https?:\/\//;
  return useMemo(
    () => (
      <>
        {message
          .replace(/\n/g, '')
          .split(' ')
          .map((i, j) => (
            <Fragment key={j}>
              {linkRegex.test(i) ? (
                <a href={i} target="_blank" rel="noreferrer">
                  {i}
                </a>
              ) : (
                <>{i}</>
              )}{' '}
            </Fragment>
          ))}
      </>
    ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [message]
  );
};
