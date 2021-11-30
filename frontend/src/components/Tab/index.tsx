import React, {ReactElement} from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import _map from 'lodash/map';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

export const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div {...other}>
      <Box sx={{ p: 3, display: value !== index ? 'none' : 'initial' }}>
        {children}
      </Box>
    </div>
  );
}

interface IBasicTabs {
  children?: React.ReactNode;
  tabs: {
    label: string;
    component: ReactElement;
  }[]
}

export default function BasicTabs(props: IBasicTabs) {
  const { tabs } = props;
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} centered>
          {_map(tabs, (item, index) => <Tab key={index} label={item.label} />)}
        </Tabs>
      </Box>
      {_map(tabs, (item, index) => <TabPanel key={index} index={index} value={value}>{item.component}</TabPanel>)}
    </Box>
  );
}
