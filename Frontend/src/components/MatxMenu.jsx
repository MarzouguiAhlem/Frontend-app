import { Menu } from '@mui/material';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box, styled } from '@mui/system';
// import useSettings from 'app/hooks/useSettings';
import React, { Fragment } from 'react';

const MenuButton = styled(Box)(({ theme }) => ({
  display: 'inline-block',
  color: theme.palette.text.primary,
  '& div:hover': {
    backgroundColor: theme.palette.action.hover,
  },
}));

const MatxMenu = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const children = React.Children.toArray(props.children);
  let { shouldCloseOnItemClick = true, horizontalPosition = 'left' } = props;
  // const { settings } = useSettings();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const mdTheme = createTheme();

  return (
    <Fragment>
      <MenuButton onClick={handleClick}>{props.menuButton}</MenuButton>
      <ThemeProvider theme={mdTheme}>
        <Menu
          elevation={8}
          getcontentanchorel={null}
          anchorEl={anchorEl}
          open={!!anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: horizontalPosition,
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: horizontalPosition,
          }}
        >
          {children.map((child, index) => (
            <div onClick={shouldCloseOnItemClick ? handleClose : () => {}} key={index}>
              {child}
            </div>
          ))}
        </Menu>
      </ThemeProvider>
    </Fragment>
  );
};

export default MatxMenu;
