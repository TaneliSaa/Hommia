import { useState } from 'react';
import { Box, Button, Container, TextField } from "@mui/material";

const Register = () => {
    
    //State muuttujat
    const [name,setName] = useState("");
    const [lastName,setLastName] = useState("");
    const [address,setAddress] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [confirmPassword,setConfirmPassword] = useState("");




    

const handleSubmit = () => {

    console.log(
    "Rekisteröinti console: ", "\n" ,
    "Käyttäjän nimi: " ,  name , "\n" ,
    "Käyttäjän sukunimi: " , lastName , "\n" ,
    "Käyttäjän osoite: " , address , "\n" ,
    "Käyttäjän sähköposti: " , email , "\n" ,
    "Käyttäjän salasana: " , password , "\n" ,
    "Käyttäjän salasana uudelleen: " , confirmPassword
    );
}


    return (

        <Container maxWidth="sm">
            <Box
                sx={{
                    marginTop: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <h1>Rekisteröidy</h1>
                    <TextField
                        name="firstName"
                        margin="normal"
                        variant="outlined"
                        label="Etunimi"
                        fullWidth
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        sx={{ marginBottom: 2 }}
                    />
                    <TextField
                        name="lastName"
                        margin="normal"
                        variant="outlined"
                        label="Sukunimi"
                        fullWidth
                        required
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        sx={{ marginBottom: 2 }}
                    />
                    <TextField
                        name="address"
                        margin="normal"
                        variant="outlined"
                        label="Osoite"
                        fullWidth
                        required
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        sx={{ marginBottom: 2 }}
                    />
                    <TextField
                        name="email"
                        margin="normal"
                        variant="outlined"
                        label="Sähköposti"
                        fullWidth
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        sx={{ marginBottom: 2 }}
                    />
                    <TextField
                        name="password"
                        margin="normal"
                        variant="outlined"
                        label="Salasana"
                        type="password"
                        fullWidth
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        sx={{ marginBottom: 2 }}
                    />
                    <TextField
                        name="confirmPassword"
                        margin="normal"
                        variant="outlined"
                        label="Salasana uudelleen"
                        type="password"
                        fullWidth
                        required
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        sx={{ marginBottom: 2 }}
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                        required
                        sx={{ marginTop: 2 }}
                        onClick={() => {
                            handleSubmit();
                            setName("");
                            setLastName("");
                            setAddress("");
                            setEmail("");
                            setPassword("");
                            setConfirmPassword("");
                        }}
                    >
                        Rekisteröidy
                    </Button>
            </Box>
        </Container>
    );
};

export { Register };
