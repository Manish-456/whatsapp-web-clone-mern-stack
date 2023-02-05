import { ArrowBack } from '@mui/icons-material';
import { Box, Drawer, styled, Typography } from '@mui/material'
import Profile from './Profile';

const drawerStyle = {left : 20, top : 17, height : "95%", width : "29.5%", boxShadow : "none"}
const Header = styled(Box)`
background: #008069;
height : 107px;
color : #ffffff;
display : flex;
& > svg, & > p {
 margin-top : auto;
 padding : 15px;
 font-weight : 600
}
`
const Text = styled(Typography)`
font-size : 18px
`

const Component = styled(Box)`
height : 85%;
background-color : #ededed;
`
const InfoDrawer = ({openDrawer, setOpenDrawer}) => {
    const handleClose = () => {setOpenDrawer(false)};
    return (
 <Drawer
 open={openDrawer}
 onClose={handleClose}
 PaperProps= {
    {
        sx : drawerStyle
    }
 }
 style={{
    zIndex : 1500
 }}
 >
    <Header>
        <ArrowBack onClick={() => setOpenDrawer(false)}/>
        <Text >
            Profile
        </Text>
    </Header>
    <Component>
        <Profile />
    </Component>
 </Drawer>
  )
}

export default InfoDrawer
