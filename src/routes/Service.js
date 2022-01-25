import axios from "axios";
const EMPLOYEE_API_BASE_URL =
  "https://yousefbackend.herokuapp.com/api/restauants";
class invoice {
  getEmployee() {
    return axios.get(EMPLOYEE_API_BASE_URL);
  }
  createEmployee(employee) {
    return axios.post(EMPLOYEE_API_BASE_URL, employee);
  }
}
export default new invoice();
