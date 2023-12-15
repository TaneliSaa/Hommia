import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Button, Container, Typography } from '@mui/material';
import { useState } from 'react';


const AppbarLower = () => {

    const [dropDownVisibleProduct1,setDropDownVisibleProduct1] = useState(false);
    const [dropDownVisibleProduct2,setDropDownVisibleProduct2] = useState(false);
    const [dropDownVisibleProduct3,setDropDownVisibleProduct3] = useState(false);
    const [dropDownVisibleProduct4,setDropDownVisibleProduct4] = useState(false);
    const [dropDownVisibleProduct5,setDropDownVisibleProduct5] = useState(false);
    const [dropDownVisibleProduct6,setDropDownVisibleProduct6] = useState(false);
    const [dropDownVisibleProduct7,setDropDownVisibleProduct7] = useState(false);

    const onHowerProduct1 = () => {
        setDropDownVisibleProduct1(true);
        console.log("Hiiri päällä1")
    }

    const onNotHowerProduct1 = () => {
        setDropDownVisibleProduct1(false);
        console.log("Hiiri pois päältä1")
    }
    
    const onHowerProduct2 = () => {
        setDropDownVisibleProduct2(true);
        console.log("Hiiri päällä2")
    }

    const onNotHowerProduct2 = () => {
        setDropDownVisibleProduct2(false);
        console.log("Hiiri pois päältä2")
    }
    
    const onHowerProduct3 = () => {
        setDropDownVisibleProduct3(true);
        console.log("Hiiri päällä3")
    }

    const onNotHowerProduct3 = () => {
        setDropDownVisibleProduct3(false);
        console.log("Hiiri pois päältä3")
    }
    
    const onHowerProduct4 = () => {
        setDropDownVisibleProduct4(true);
        console.log("Hiiri päällä4")
    }

    const onNotHowerProduct4 = () => {
        setDropDownVisibleProduct4(false);
        console.log("Hiiri pois päältä4")
    }
    
    const onHowerProduct5= () => {
        setDropDownVisibleProduct5(true);
        console.log("Hiiri päällä5")
    }

    const onNotHowerProduct5 = () => {
        setDropDownVisibleProduct5(false);
        console.log("Hiiri pois päältä5")
    }
    
    const onHowerProduct6 = () => {
        setDropDownVisibleProduct6(true);
        console.log("Hiiri päällä6")
    }

    const onNotHowerProduct6 = () => {
        setDropDownVisibleProduct6(false);
        console.log("Hiiri pois päältä6")
    }
    
    const onHowerProduct7 = () => {
        setDropDownVisibleProduct7(true);
        console.log("Hiiri päällä7")
    }

    const onNotHowerProduct7 = () => {
        setDropDownVisibleProduct7(false);
        console.log("Hiiri pois päältä7")
    }


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color='inherit'>
        <Container fixed>
            <Toolbar disableGutters>
                <Button
                    color='inherit'
                    size='small'
                    variant=''
                    href=''
                    onMouseEnter={onHowerProduct1}
                    onMouseLeave={onNotHowerProduct1}
                    >
                    Tuotteet1
                </Button>
                <Button
                    color='inherit'
                    size='small'
                    variant=''
                    href=''
                    onMouseEnter={onHowerProduct2}
                    onMouseLeave={onNotHowerProduct2}
                    >
                    Tuotteet2
                </Button>
                <Button
                    color='inherit'
                    size='small'
                    variant=''
                    href=''
                    onMouseEnter={onHowerProduct3}
                    onMouseLeave={onNotHowerProduct3}
                    >
                    Tuotteet3
                </Button>
                <Button
                    color='inherit'
                    size='small'
                    variant=''
                    href=''
                    onMouseEnter={onHowerProduct4}
                    onMouseLeave={onNotHowerProduct4}
                    >
                    Tuotteet4
                </Button>
                <Button
                    color='inherit'
                    size='small'
                    variant=''
                    href=''
                    onMouseEnter={onHowerProduct5}
                    onMouseLeave={onNotHowerProduct5}
                    >
                    Tuotteet5
                </Button>
                <Button
                    color='inherit'
                    size='small'
                    variant=''
                    href=''
                    onMouseEnter={onHowerProduct6}
                    onMouseLeave={onNotHowerProduct6}
                    >
                    Tuotteet6
                </Button>
                <Button
                    color='inherit'
                    size='small'
                    variant=''
                    href=''
                    onMouseEnter={onHowerProduct7}
                    onMouseLeave={onNotHowerProduct7}
                    >
                    Tuotteet7
                </Button>
          </Toolbar>  
        </Container>
      </AppBar>
        { dropDownVisibleProduct1 && 
            <Container>
                <p>Tuote1 päällä ollaan</p>
            </Container>
        }
        { dropDownVisibleProduct2 && 
            <Container>
                <p>Tuote2 päällä ollaan</p>
            </Container>
        }
        { dropDownVisibleProduct3 && 
            <Container>
                <p>Tuote3 päällä ollaan</p>
            </Container>
        }
        { dropDownVisibleProduct4 && 
            <Container>
                <p>Tuote4 päällä ollaan</p>
            </Container>
        }
        { dropDownVisibleProduct5 && 
            <Container>
                <p>Tuote5 päällä ollaan</p>
            </Container>
        }
        { dropDownVisibleProduct6 && 
            <Container>
                <p>Tuote6 päällä ollaan</p>
            </Container>
        }
        { dropDownVisibleProduct7 && 
            <Container>
                <p>Tuote7 päällä ollaan</p>
            </Container>
        }

    </Box>
  );
}
    
export {AppbarLower};