type props = { header: string | undefined };

const ChatCardHeader = ({ header }: props) => {
  return (
    <header
      dangerouslySetInnerHTML={{
        __html: `${header === undefined ? "Sorry );" : header}`,
      }}
    />
  );
};

export default ChatCardHeader;
