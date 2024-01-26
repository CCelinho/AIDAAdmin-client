import { Topbar } from './components/fixed-components/topbar';
import { Route, Routes } from 'react-router-dom';
import DepartmentList from './pages/departmentList';
import UHList from './pages/uhList';
import ServiceList from './pages/serviceList';
import SpecialtyList from './pages/specialtyList';
import UHTreePage from './pages/uhTreePage';
import UnitList from './pages/unitList';
import DeptTreePage from './pages/deptTreePage';

function App() {
  return (
    <>
      <Topbar />
      <Routes>
        <Route path="/uhs" Component={UHList} />
        <Route path="/departments" Component={DepartmentList} />
        <Route path="/services" Component={ServiceList} />
        <Route path="/units" Component={UnitList} />
        <Route path="/specialties" Component={SpecialtyList} />
        <Route path="/uh-tree/:id" Component={UHTreePage} />
        <Route path="/department-tree/:id" Component={DeptTreePage} />
      </Routes>
    </>
  );
}

export default App;
