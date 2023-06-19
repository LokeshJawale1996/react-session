import './App.css';
// import State from './stateAndProps/State';
// import ParentC from './stateAndProps/ParentC';
// import WithoutFragment from './Fragment/WithoutFragment';
// import Fragment from './Fragment/Fragment';
// import RefFocus from './refAndForwardRef/RefFocus';
// import ForwardRefFocus from './refAndForwardRef/ForwardRefFocus';
// import Controlled from './ControlledAndUncontrolled/Controlled';
// import Uncontrolled from './ControlledAndUncontrolled/Uncontrolled'
import BindingFunctions from './BindingFuncFatArrowFunc/BindingFunctions';
import FatArrowfunctions from './BindingFuncFatArrowFunc/FatArrowFunctions';
function App() {
  return (
    <div className="App">
   
    {/* 1.state and props */}
    {/* <State/>
    <ParentC/> */}

    {/* 2.Fragments */}
    {/* <Fragment/>
    <WithoutFragment/> */}

    {/* 3.ref and forwardRef */}
{/*     
    <RefFocus/>
    <ForwardRefFocus/> */}

    {/* 4.Controlled & Uncntrolled Components */}
    {/* <Controlled/>
    <Uncontrolled/> */}
    {/* 5. Binding functions and fat arrow functions */}
  <BindingFunctions/>
  <FatArrowfunctions/>
    </div>
  );
}

export default App;
