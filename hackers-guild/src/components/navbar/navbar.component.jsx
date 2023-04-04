import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';

import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import SubmissionList from '../submission-list/submission-list.component';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectSubmissionList } from '../../store/submission/submission.selector';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function SearchAppBar() {
   
    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

   

      const submissionList = useSelector(selectSubmissionList);

      const [searchField, setSearchField] = useState(''); // [value, setvalue]
      
      const filteredSubmissionList = submissionList.filter((submission) => submission.title.toLowerCase().includes(searchField));
    
      // console.log(searchField);
    
      const onSearchChange = (event) => {
                
        const searchFieldString = event.target.value.toLocaleLowerCase();
        setSearchField(searchFieldString);
     
      };
      
      const timeDifference = (hackathonStartDate) => {
        const uploadTime = new Date(hackathonStartDate);
        const currentTime = new Date();
        const timeDiff = currentTime - uploadTime;
        return timeDiff;
      }

      const [sortOrder, setSortOrder] = useState('ascending');

      const handleChange1 = (event) => {
        setSortOrder(event.target.value);
      };

      const ascendingHandler = (filteredSubmissionList) => {
        const ascendingSubmissionList = filteredSubmissionList.sort((a, b) => timeDifference(a.hackathonStartDate) - timeDifference(b.hackathonStartDate));
        return ascendingSubmissionList;
       }
      const descendingHandler = (filteredSubmissionList) => { 
        const descendingSubmissionList = filteredSubmissionList.sort((a, b) =>timeDifference( b.hackathonStartDate) - timeDifference(a.hackathonStartDate));
        return descendingSubmissionList;
      }

      let sortedSubmissionList = [];
      if(sortOrder == "ascending") {
        sortedSubmissionList = ascendingHandler(filteredSubmissionList);
      }
      else if(sortOrder == "descending") {
        sortedSubmissionList = descendingHandler(filteredSubmissionList);
      }



    return (
<div style={{margin:"40px"}}>
        <TabContext value={value}>
            <div style={{display: 'flex', justifyContent: 'space-between', margin: "10px 10px 0 10px", padding:"20px"}}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="All Submissions" value="1" />
              <Tab label="Favourite Submissions" value="2" />
              
            </TabList>

            <div style={{display: 'flex', margin:"0px 0px 0px 0px"}}>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
                onChange={onSearchChange}
                />
            </Search>

            <FormControl fullWidth style={{width:"150px"}}>
              <InputLabel id="demo-simple-select-label">Sort Order</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={sortOrder}
                label="sortOrder"
                onChange={handleChange1}
              >


                <MenuItem value={'descending'} >oldest</MenuItem>
                <MenuItem value={'ascending'}>newest</MenuItem>
                
              </Select>
            </FormControl>
            </div>

            </div>
          <TabPanel value="1"><SubmissionList submissionList={sortedSubmissionList}/></TabPanel>
          <TabPanel value="2"><SubmissionList favorite submissionList={sortedSubmissionList}/></TabPanel>
          
                </TabContext>
      </div>
  );
}