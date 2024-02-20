import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import EmployeeCard from "../components/cards/EmployeeCard";
import { useGet } from "../api";
import { setEmployees } from "../store/reducer/employees";

function EmployeesSection() {
  const employees = useSelector((state => state.employees.employees))
  console.log(employees);
  const dispatch = useDispatch();

  useEffect(() => {
    getEmployees();
  }, []);

  function getEmployees() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useGet("/waiters")
      .then(({ data }) => {
        console.log(data);
        dispatch(setEmployees(data));
      })
      .catch((e) => console.log(e));
  }

  return (
    <div className="grid grid-cols-3 gap-4 pt-10">
      {employees.map((item) => {
        return <EmployeeCard key={item._id} item={item} />;
      })}
    </div>
  );
}

export default EmployeesSection;
