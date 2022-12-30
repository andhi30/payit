import * as React from 'react';
import { Global } from '@emotion/react';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { grey } from '@mui/material/colors';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Button, ButtonGroup } from '@mui/material';
const drawerBleeding = 56;

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  results: any[];
  setJumlah: (index: number, jumlahBaru:number) => void;
}

const Root = styled('div')(({ theme }) => ({
  height: '100%',
  backgroundColor:
    theme.palette.mode === 'light' ? grey[100] : theme.palette.background.default,
}));

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'light' ? '#fff' : grey[800],
}));

const Puller = styled(Box)(({ theme }) => ({
  width: 30,
  height: 6,
  backgroundColor: theme.palette.mode === 'light' ? grey[300] : grey[900],
  borderRadius: 3,
  position: 'absolute',
  top: 8,
  left: 'calc(50% - 15px)',
}));

const ButtonBox = styled('div')(({ theme }) => ({
  width: 30,
  height: 80,
  position: 'absolute',
  bottom: 8,
  left: 'calc(50% - 50px)',
}));

export default function SwipeableEdgeDrawer(props: Props) {
  const { window, results, setJumlah } = props;
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  // This is used only for the example
  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Root>
      <CssBaseline />
      <Global
        styles={{
          '.MuiDrawer-root > .MuiPaper-root': {
            height: `calc(100% - ${drawerBleeding}px)`,
            overflow: 'visible',
          },
        }}
      />
      <SwipeableDrawer
        container={container}
        anchor="bottom"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <StyledBox

          sx={{
            position: 'absolute',
            top: -drawerBleeding,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            visibility: 'visible',
            right: 0,
            left: 0,
          }}
        >
          <Puller />
          <Typography sx={{ p: 2, color: 'text.secondary' }}>{results.length} items</Typography>
        </StyledBox>
        <StyledBox
          sx={{
            px: 2,
            pb: 2,
            height: '100%',
            overflow: 'auto',
          }}
        >
          {/* <Skeleton variant="rectangular" height="100%" /> */}
          <List>
            {results.map((result, index) => (
              <ResultList decodedText={result.barcode} index={index} jumlah={result.jumlah} setJumlah={setJumlah}/>
            ))}
          </List>
          <ButtonBox>
            {results.length > 0 && <Button variant="contained">Bayar</Button>}
          </ButtonBox>
        </StyledBox>
      </SwipeableDrawer>
    </Root>
  );
}

interface ResultProps {
  decodedText: String;
  index: number;
  jumlah: number;
  setJumlah: (index: number, jumlahBaru:number) => void;
}

function ResultList(props: ResultProps) {
  const { decodedText, index, jumlah, setJumlah } = props;
  const [nama, setNama] = React.useState("Not Registered")
  React.useEffect(() => {
    fetch(`https://payit.pythonanywhere.com/products/${decodedText}`).then((response) => response.json().then((value) => {
      if (value.nama_item) {
        setNama(value.nama_item)
      }
    }
    ))
  }, [])
  if (jumlah < 1){
    return (<></>)
  }
  return (
    <ListItem key={index} disablePadding>
      <ListItemButton>
        <ListItemText primary={nama} primaryTypographyProps={{
          variant: 'subtitle2',
          style: {
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
          }
        }} />
        {/* <ListItemText primary={jumlah} /> */}
      </ListItemButton>
      <ButtonGroup>
        <Button size='small' onClick={() => setJumlah(index, jumlah - 1)}>-</Button>
        <Button disabled size='small'>{jumlah}</Button>
        <Button size='small' onClick={() => setJumlah(index, jumlah + 1)}>+</Button>
      </ButtonGroup>
    </ListItem>
      
  )
}