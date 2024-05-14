import { useId } from "react";
import { useState } from "react";

export const LoginForm = () => {

    const handleSubmit = (evt) => {
        evt.preventDefault();

        const form = evt.target;

        const { login, password } = form.elements;

        console.log(login, password);

        console.log(login.value, password.value);

        form.reset()
    }


    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="login" />
            <input type="password" name="password" />
            <button type="submit">Login</button>
        </form>
    )
}



export const MyComponent = () => {
  const loginId = useId();
  const passwordId = useId();

  return (
    <form>
      <label htmlFor={loginId}>Login</label>
      <input type="text" name="login" id={loginId} />

      <label htmlFor={passwordId}>Password</label>
      <input type="password" name="password" id={passwordId} />

      <button type="submit">Login</button>
    </form>
  );
};

export const SearchBar = () => {
  const [inputValue, setInputValue] = useState("");

    const handleChange = (evt) => {
        setInputValue(evt.target.value)
    }
    
  return (
    <div>
      <input type="text"  value={inputValue} onChange={handleChange}/>
      <p>{inputValue}</p>
    </div>
  );
};

export const LangSwitcher = () => {
    const selectId = useId();
    const [lang, setLang] = useState("uk");


  return (
    <div>
      <label htmlFor={selectId}>Choose language</label>
          <select id={selectId}
              value={lang}
          onChange={(evt) => setLang(evt.target.value)}>
        <option value="en">English</option>
        <option value="uk">Ukrainian</option>
        <option value="pl">Polish</option>
      </select>
    </div>
  );
};

export const CheckedForm = () => {
    const [hasAccepted, setHasAccepted] = useState(false)

    const handleChangeCheck = (e) => {
        setHasAccepted(e.target.checked)
    };

    return (
        <div>
            <label>
                <input type="checkbox"
                    name="terms"
                    checked={hasAccepted}
                onChange={handleChangeCheck}/>I accept terms and conditions
            </label>
            <button type="button" disabled={hasAccepted}>Proceed</button>
        </div>
    )
}


export const HardForm = () => {
  const [values, setValues] = useState({
    login: "",
    password: "",
  });

  const handleChange = (evt) => {
    setValues({
      ...values,
      [evt.target.name]: evt.target.value,
    });
  };

  const handleSumit = (evt) => {
    evt.preventDefault();

    console.log(values);

    setValues({
      login: "",
      password: "",
    });
  };

  return (
    <form onSubmit={handleSumit}>
      <input
        type="text"
        name="login"
        value={values.login}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        value={values.password}
        onChange={handleChange}
      />
      <button type="submit">Login</button>
    </form>
  );
};