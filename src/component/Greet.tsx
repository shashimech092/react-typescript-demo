type greetProps = {
  name: string;
  messageCount: number;
 //  messageCount?: number;     optional ?, if not mentioned in the App.js
   isLoggedIn: boolean; 
};
 
const Greet = (props: greetProps) => {
 const {messageCount = 0} = props     // to deal with the optional props
  return (
    <div>
      {props.isLoggedIn
        ? `<p>Hello {props.name}! you have {props.messageCount} unread meddages</p>`
        : "Welocme Guest"}
    </div>
  );
};

export default Greet;
