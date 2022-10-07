import Sidebar from "../../components/sidebar";
import MonthlybillList from "../../components/MonthlybillList";
import "./monthlybill.scss";

const Monthlybill = () => {
  return (
    <div className="monthlybillContainer">
      <div className="leftConatiner">
        <Sidebar tabActive={"monthlybill"} />
      </div>
      <div className="rigthConatiner">
        <MonthlybillList />
      </div>
    </div>
  );
};

export default Monthlybill;
