import { AppBar, Divider, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import clsx from 'clsx';
import { createStyles, makeStyles, useTheme, Theme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import './styles.scss';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: 36,
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
    },
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: 'hidden',
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9) + 1,
      },
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  }),
);

export default function Sidebar() {
	const [sidebarLenghtClass, changeSidebarClass] = useState("short");

	const classes = useStyles();
  	const theme = useTheme();
  	const [open, setOpen] = React.useState(false);

  	const handleDrawerOpen = () => {
  	  	setOpen(true);
  	};

  	const handleDrawerClose = () => {
  	  	setOpen(false);
  	};

	const handleDrawerChange = () => {
		setOpen(!open)	
	};

	return (
		<div className={"sidebar "}>
      		<Drawer
      		  	variant="permanent"
				className={clsx(classes.drawer, {
					[classes.drawerOpen]: open,
					[classes.drawerClose]: !open,
				})}
				classes={{
				  	paper: clsx({
						[classes.drawerOpen]: open,
						[classes.drawerClose]: !open,
				  	}),
				}}
      		>
      		  	<div className={classes.toolbar}>
      		  	  	<IconButton onClick={handleDrawerChange}>
      		  	    	{theme.direction === 'rtl' ? <button>H</button > :  <button>H</button>}
      		  	  	</IconButton>
      		  	</div>
      		  	<Divider />
      		  	<List>
      		  	  	{['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
      		  	  	  	<ListItem button key={text}>
      		  	  	    	<ListItemIcon>{index % 2 === 0 ? <button>H</button > : <button>H</button >}</ListItemIcon>
      		  	  	    	<ListItemText primary={text} />
      		  	  	  	</ListItem>
      		  	  	))}
      		  	</List>
      		  	<Divider />
      		  	<List>
      		  	  	{['All mail', 'Trash', 'Spam'].map((text, index) => (
      		  	  	  	<ListItem button key={text}>
      		  	  	    	<ListItemIcon>{index % 2 === 0 ? <button>H</button > : <button>H</button >}</ListItemIcon>
      		  	  	    	<ListItemText primary={text} />
      		  	  	  	</ListItem>
      		  	  	))}
      		  	</List>
      		</Drawer>
		</div>
	)
}