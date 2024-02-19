import EmployeeCard from "../components/cards/EmployeeCard"
import withLayout from "./Mean"
import AddEmployeeModal from "../components/modals/AddEmployeeModal"

function Employees() {
  return (
    <div><EmployeeCard /><AddEmployeeModal/></div>
  )
}

export default withLayout(Employees)