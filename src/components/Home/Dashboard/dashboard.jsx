import "./dashboard.scss";
import Contact from "../../common/Contact/contact";
import Form from "../../Home/Form/form";

function Dashboard() {
  return (
    <>
    <div className="dashboard" id="dashboard">
      <h2>Panel użytkownika</h2>
    </div>
    <Form />
    <Contact />
    </>
  );
}

export default Dashboard;