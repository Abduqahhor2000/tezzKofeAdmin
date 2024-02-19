import Header from "../components/Header";
import PasswordInput from "../components/formItems/PasswordInput";
import BaseInput from "../components/formItems/BaseInput";
import PrimerButton from "../components/PrimerButton";
import { useState } from "react";
import { usePost } from "../api";
import { LinearProgress, Snackbar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch} from "react-redux";
import { putRole } from "../store/reducer/role";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const [password, setPassword] = useState("");
  const [login, setLogin] = useState("");
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [error, setError] = useState("");

  function logIn(e) {
    e.preventDefault();
    setLoading(true);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    usePost("/auth/admin/login", { password, login })
      .then(({ data }) => {
        dispatch(putRole("imperator"))
        localStorage.setItem("token", data)
        setLoading(false);
        navigate("/");
      })
      .catch((e) => {
        console.log(e.message);
        setLoading(false);
        setError(e.message);
        setOpen(true);
        setPassword("");
      });
  }

  return (
    <div className="h-screen flex flex-col">
      <Header />
      <div className="flex justify-center items-center flex-grow">
        <div className="w-[360px] border-gray-100 border-2 rounded-xl overflow-hidden">
          <div className="p-5">
            <h1 className="text-3xl font-semibold leading-[48px] mb-6">
              Super Admin
            </h1>
            <form onSubmit={logIn}>
              <div className="grid grid-cols-1 gap-4">
                <BaseInput
                  label="Login"
                  required
                  value={login}
                  onChange={(e) => setLogin(e.target.value)}
                  subText={
                    <span className="flex justify-center w-[24px]">
                      <img src="/src/assets/person.svg" />
                    </span>
                  }
                ></BaseInput>
                <PasswordInput
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="pt-6">
                <PrimerButton type="submit" disabled={loading}>
                  Kirish
                </PrimerButton>
              </div>
            </form>
          </div>
          <LinearProgress
            determinate="true"
            size="sm"
            value={25}
            className={loading ? "visible" : "invisible"}
          />
        </div>
      </div>
      <Snackbar
        autoHideDuration={5000}
        color="danger"
        size="md"
        open={open}
        onClose={setOpen}
        variant="outlined"
        content="salom"
        contextMenu="salom"
      >
        <span className="border-red border-2 p-4 py-2 rounded-xl text-red">
          {error}
        </span>
      </Snackbar>
    </div>
  );
}

export default Login;
