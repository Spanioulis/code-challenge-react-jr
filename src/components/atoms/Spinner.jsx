import { FlexBox } from '../../styles';
import '../../styles/spinner.css';

const Spinner = () => {
   return (
      <FlexBox justify="center" align="center" style={{ height: '45vh' }}>
         <div className="sk-folding-cube">
            <div className="sk-cube1 sk-cube"></div>
            <div className="sk-cube2 sk-cube"></div>
            <div className="sk-cube4 sk-cube"></div>
            <div className="sk-cube3 sk-cube"></div>
         </div>
      </FlexBox>
   );
};

export default Spinner;
