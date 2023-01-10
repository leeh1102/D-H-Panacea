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
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Styles from './login.js';
import axios from 'axios';
import { Icon } from '@mui/material';
import { Apple, Facebook, Google } from '@mui/icons-material';

export default function LogIn() {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [login, setLogin] = React.useState(false);

    // set configurations
    const config = {
        method: "post",
        url: "http://localhost:3000/login",  // TO BE UPDATED
        data: {
            email,
            password
        },
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // make the API call
        axios(config)
            .then((result) => {
                setLogin(true);
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
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5" fontWeight="600">
                    Log in to your account
                </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        autoComplete="current-password"
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={Styles.defaultButtonStyle}
                        onClick={(e) => handleSubmit(e)}
                    >
                        Log In
                    </Button>
                    <Typography
                        sx={Styles.partitionStyle}>
                        OR
                    </Typography>
                    <Button
                        variant="outlined"
                        fullWidth
                        sx={Styles.ssoButtonStyle}
                    >
                        <Google sx={{ mr: 1 }} /> Continue with Google
                    </Button>
                    <Button
                        variant="outlined"
                        fullWidth
                        sx={Styles.ssoButtonStyle}
                    >
                        <Facebook sx={{ mr: 1 }} /> Continue with Facebook
                    </Button>
                    <Button
                        variant="outlined"
                        fullWidth
                        sx={Styles.ssoButtonStyle}
                    >
                        <Apple sx={{ mr: 1 }} /> Continue with Apple
                    </Button>
                    <Grid container sx={{ mt: 1 }}>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            Don't have an account?
                            <Link href="#" variant="body2">
                                {" Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
}