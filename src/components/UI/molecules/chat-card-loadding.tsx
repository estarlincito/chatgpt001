const ChatCardLoadding = () => {
  return (
    <div className='loadding'>
      {[1, 2, 3].map((item, id) => (
        <span key={id}></span>
      ))}
    </div>
  );
};

export default ChatCardLoadding;
