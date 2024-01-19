import { Topbar } from './components/topbar';
import { Route, Routes } from 'react-router-dom';
import DepartmentList from './pages/departmentList';
import UHList from './pages/uhList';
import ServiceList from './pages/serviceList';
import UnitList from './pages/unitList';
import SpecialtyList from './pages/specialtyList';
import treePage from './pages/treePage';

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
        <Route path="/uh-tree/:id" Component={treePage} />
      </Routes>
    </>
  );
}

export default App;
