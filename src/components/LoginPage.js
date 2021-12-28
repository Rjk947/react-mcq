import React from "react";

function LoginPage({ onQuizStart, email, newEmail, password, newPassword }) {
  // const [email, setEmail] = useState("")
  //  const [password, setPassword] = useState("")
  const submitForm = () => {
    onQuizStart();
  };
  return (
    <>
      <form onSubmit={submitForm} className="card" style={{ backgroundColor: "lightblue"}}>
        <div className="card_content" >
          <div className="content" >
            <header className="modal-card-head">
              <p className="modal-card-title">
                Welcome to the Test Portal
              </p>
            </header>
            <div style={{display:"flex", flexDirection:"column"}}>
            <label htmlFor="email"><h4 style={{ margin:"5px"}}>Email</h4></label>
            <input
              type="text"
              name="email"
              value={email}
              id="email"
              placeholder="Enter your email"
              onChange={newEmail}
            />
            <label htmlFor="password"><h4 style={{ marginBottom:"5px"}}>Password</h4></label>
            <input
              type="password"
              name="password"
              value={password}
              id="password"
              placeholder="Enter your password"
              onChange={newPassword}
            />
            </div>
          </div>
          {/* <div className="content"> */}
            {/* <label htmlFor="password">Password </label>
            <input
              type="password"
              name="password"
              value={password}
              id="password"
              placeholder="Enter your password"
              onChange={newPassword}
            /> */}
          {/* </div> */}
        </div>

        <br />
        <button
          type="submit"
          className="button is-info mr-2"
          onClick={onQuizStart}
        >
          Start Test
        </button>
      </form>
    </>
  );
}

export default LoginPage;
