export default function Register({ passRoute }) {
  return (
    <div className="register-container">
      <h1 onClick={() => passRoute("login")}>THis is the Register Component</h1>
    </div>
  );
}
