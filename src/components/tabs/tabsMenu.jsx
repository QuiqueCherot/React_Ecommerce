import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import { useNavigate } from 'react-router-dom';

const TabsMenu = ({ current, items }) => {
  const navigate = useNavigate();

  const handleChange = (_, newValue) => {
    navigate('/products/' + newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <TabContext value={current}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList  onChange={handleChange} aria-label="lab API tabs example">
            {items.map((item, index) => (
              <Tab key={item.title + index} label={item.title} value={item.title} />
            ))}
          </TabList>
        </Box>
      </TabContext>
    </Box>
  );
};

export default TabsMenu;
