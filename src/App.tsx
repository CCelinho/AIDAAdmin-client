import { Topbar } from './components/fixed-components/topbar';
import { Route, Routes } from 'react-router-dom';
import DepartmentList from './pages/tables/departmentList';
import UHList from './pages/tables/uhList';
import ServiceList from './pages/tables/serviceList';
import SpecialtyList from './pages/tables/specialtyList';
import UHTreePage from './pages/trees/uhTreePage';
import UnitList from './pages/tables/unitList';
import DeptTreePage from './pages/trees/deptTreePage';
import SpecTreePage from './pages/trees/specTreePage';
import UnitTreePage from './pages/trees/unitTreePage';
import ServTreePage from './pages/trees/servTreePage';
import UhCardPage from './pages/cards/uhCardPage';
import DepartmentCardPage from './pages/cards/deptCardPage';
import ServiceCardPage from './pages/cards/servCardPage';
import UnitCardPage from './pages/cards/unitCardPage';
import SpecialtyCardPage from './pages/cards/specCardPage';

function App() {
  return (
    <>
      <Topbar />
      <Routes>
        // Tables
        <Route path="/uhs" Component={UHList} />
        <Route path="/departments" Component={DepartmentList} />
        <Route path="/services" Component={ServiceList} />
        <Route path="/units" Component={UnitList} />
        <Route path="/specialties" Component={SpecialtyList} />
        // Trees
        <Route path="/uh-tree/:id" Component={UHTreePage} />
        <Route path="/department-tree/:id" Component={DeptTreePage} />
        <Route path="/service-tree/:id" Component={ServTreePage} />
        <Route path="/unit-tree/:id" Component={UnitTreePage} />
        <Route path="/specialty-tree/:id" Component={SpecTreePage} />
        // Cards
        <Route path="/uh/:id" Component={UhCardPage} />
        <Route path="/department/:id" Component={DepartmentCardPage} />
        <Route path="/service/:id" Component={ServiceCardPage} />
        <Route path="/unit/:id" Component={UnitCardPage} />
        <Route path="/specialty/:id" Component={SpecialtyCardPage} />
      </Routes>
    </>
  );
}

export default App;
