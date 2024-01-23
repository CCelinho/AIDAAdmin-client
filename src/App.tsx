import { Topbar } from './components/fixed-components/topbar';
import { Route, Routes } from 'react-router-dom';
import DepartmentList from './pages/departmentList';
import UHList from './pages/uhList';
import ServiceList from './pages/serviceList';
import SpecialtyList from './pages/specialtyList';
import treePage from './pages/treePage';
import UnitList from './pages/unitList';
import TreePageCopy from './pages/treePageCopy';

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
        <Route path="/uh-tree-copy/:id" Component={TreePageCopy} />
      </Routes>
    </>
  );
}

export default App;
