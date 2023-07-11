import * as React from 'react';
import  Button  from '@mui/material/Button';
import { ButtonGroup } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo'}};

function App() {
  return (
    <div>
      <Checkbox {...label} defaultChecked />
<Checkbox {...label} />
<Checkbox {...label} disabled />
<Checkbox {...label} disabled checked />
    </div>
  );
}

export default App;
