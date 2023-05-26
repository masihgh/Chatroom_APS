const Chatroom = () => {
  return (
    <div className="bg-accent-content w-full h-screen">
      {/* chatroom section */}
      <section className="px-40">
        {/* Message sender */}
        <div className="chat chat-start">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img src="https://cdn-icons-png.flaticon.com/512/219/219986.png" />
            </div>
          </div>
          <div className="chat-header">
            Obi-Wan Kenobi
            <time className="text-xs opacity-50">12:45</time>
          </div>
          <div className="chat-bubble">You were the Chosen One!</div>
          <div className="chat-footer opacity-50">Delivered</div>
        </div>
        {/* message receiver  */}
        <div className="chat chat-end">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img src="https://cdn-icons-png.flaticon.com/512/219/219986.png" />
            </div>
          </div>
          <div className="chat-header">
            Anakin
            <time className="text-xs opacity-50">12:46</time>
          </div>
          <div className="chat-bubble">I hate you!</div>
          <div className="chat-footer opacity-50">Seen at 12:46</div>
        </div>
      </section>
      {/* send message input */}
      <div className="bg-primary h-1/5 w-full absolute bottom-0 ">
        <div className="form-control py-12 px-32">
          <div className="input-group">
            <input
              type="text"
              placeholder="type..."
              className="input input-bordered w-full"
            />
            <button className="btn bg-primary-content text-primary">
              send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Chatroom;
