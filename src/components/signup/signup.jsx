import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Styles from './signup.js';
import axios from 'axios';
import { LocalizationProvider, MobileDatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Select, SelectChangeEvent } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';


export default function SignUp() {
    // TODO: USER TYPE?
    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [secondaryEmail, setSecondaryEmail] = React.useState('');
    const [bod, setBod] = React.useState('');
    const [phoneNum, setPhoneNum] = React.useState('');
    const [address, setAddress] = React.useState('');
    const [phn, setPhn] = React.useState('');
    const [gender, setGender] = React.useState('');
    const [signup, setSignup] = React.useState(false);

    const handleChange = (event: SelectChangeEvent) => {
        setGender(event.target.value);
    };

    // set configurations
    const config = {
        method: "post",
        url: "http://localhost:3000/signup",
        data: {
            firstName,
            lastName,
            email,
            password
        },
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // make the API call
        axios(config)
            .then((result) => {
                alert('You have successfully signed up!');
                setSignup(true);
            })
            .catch((error) => {
                error = new Error();
            });
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={Styles.iconStyle}>
                    <AccountCircleOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="given-name"
                                name="firstName"
                                required
                                fullWidth
                                id="firstName"
                                value={firstName}
                                label="First Name"
                                onChange={(e) => setFirstName(e.target.value)}
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                fullWidth
                                id="lastName"
                                label="Last Name"
                                value={lastName}
                                name="lastName"
                                onChange={(e) => setLastName(e.target.value)}
                                autoComplete="family-name"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                autoComplete="email"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                autoComplete="new-password"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                name="secondaryEmail"
                                label="Secondary Email"
                                id="secondaryEmail"
                                value={secondaryEmail}
                                onChange={(e) => setSecondaryEmail(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <MobileDatePicker
                                    label="Date of Birth"
                                    inputFormat='MM/DD/YYYY'
                                    value={bod}
                                    onChange={(e) => setBod(e.target.value)}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                            </LocalizationProvider>
                        </Grid>
                        <Grid item xs={6}>
                            <Select
                                id="select-gender"
                                value={gender}
                                label="Gender"
                                onChange={handleChange}
                                fullWidth
                            >
                                <MenuItem value="Male">Male</MenuItem>
                                <MenuItem value="Female">Female</MenuItem>
                                <MenuItem value="Decline">Decline to answer</MenuItem>
                            </Select>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={<Checkbox value="allowExtraEmails" color="primary" />}
                                label="I want to receive inspiration, marketing promotions and updates via email."
                            />
                        </Grid>
                    </Grid>
                    <Button
                        sx={Styles.defaultButtonStyle}
                        type="submit"
                        fullWidth
                        variant="contained"
                        onClick={(e) => handleSubmit(e)}
                    >
                        Sign Up
                    </Button>
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Link href="#" variant="body2">
                                Already have an account? Sign in
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
}