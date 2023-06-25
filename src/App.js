import "./styles.css";
import Form from "./components/Form";

var userIsRegistered = false;

export default function App() {
  return (
    <div className="container">
      <Form
      isRegistered = {userIsRegistered} 
      />
    </div>
  );
}
 