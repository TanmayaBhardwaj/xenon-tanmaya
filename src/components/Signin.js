import React from "react";

const Signin = () => {
  return (
    <div>
      <form>
        <div class="mb-3" >
          <label for="exampleInputEmail1" class="form-label" >
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />

          <div id="emailHelp" class="form-text">
            
          </div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div class="mb-3 form-check">
        </div>
        <button type="submit" class="btn btn-primary">
          Signin
        </button>
      </form>
    </div>
  );
};

export default Signin;