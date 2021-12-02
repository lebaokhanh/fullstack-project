import React, {useCallback, useState} from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Logout from '@mui/icons-material/Logout';

import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from "react-redux";
import {RootState} from "../../config/store";
import {onLogOut} from "../../pages/Login/redux";
import {NavigationWrapper} from './styles';

export default function AccountMenu() {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogOut = () => {
    performLogOut();
  }
  const performLogOut = useCallback(() => {
    dispatch(onLogOut());
  }, [dispatch]);

  return (
    <NavigationWrapper>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        {!user.loggedIn && (
          <>
            <Typography sx={{ minWidth: 100 }}>
              <Link to={'/login'}>Log in</Link>
            </Typography>
            <Typography sx={{ minWidth: 100 }}>
              <Link to={'/signup'}>Sign up</Link>
            </Typography>
          </>
        )}
        {user.loggedIn && (
          <IconButton onClick={handleClick} size="small" sx={{ ml: 2 }}>
            <Avatar sx={{ width: 32, height: 32 }}>{user.username && user.username.charAt(0).toUpperCase()}</Avatar>
          </IconButton>
        )}
      </Box>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
      >
        <MenuItem onClick={handleLogOut}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </NavigationWrapper>
  );
}
