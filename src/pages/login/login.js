import React, {Fragment} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import LockIcon from '@material-ui/icons/Lock';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {CircularProgress} from "@material-ui/core";
import {withStyles} from "@material-ui/styles";


function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://systemmanager.io/">
                SystemManager
            </Link>{' '}
            {new Date().getFullYear()}
        </Typography>
    );
}

const styles = theme => ({
    root: {
        height: '100vh',
    },
    image: {
        // backgroundImage: 'url(https://source.unsplash.com/random)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        alignContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
    },
    loading: {
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.primary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
});

class Login extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: false
        };
    };

    SubmitForm() {
        this.setState({loading: true})
    }


    render() {
        const {classes} = this.props;
        return (
            <Grid container component="main" className={classes.root}>
                <CssBaseline/>
                <Grid item xs={12} sm={8} md={5} lg={3} component={Paper} elevation={8} square>
                    <div className={classes.paper}>
                        <Avatar className={classes.avatar}>
                            <LockIcon/>
                        </Avatar>
                        <Typography component="h1" variant="h4">SystemManager</Typography>


                        {this.state.loading ? (
                            <Fragment>
                                <Box mt={5}/>
                                <CircularProgress className={classes.loading} size={128}/>
                            </Fragment>
                        ) : (
                            <Fragment>
                                <Typography component="h1">Sign in to continue</Typography>

                                <form className={classes.form} noValidate>
                                    <TextField
                                        variant="standard"
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="email"
                                        label="Email Address"
                                        name="email"
                                        autoComplete="email"
                                        autoFocus
                                    />
                                    <TextField
                                        variant="standard"
                                        margin="normal"
                                        required
                                        fullWidth
                                        name="password"
                                        label="Password"
                                        type="password"
                                        id="password"
                                        autoComplete="current-password"
                                    />
                                    <FormControlLabel
                                        control={<Checkbox value="remember" color="primary"/>}
                                        label="Remember me"
                                    />
                                    <Button
                                        onClick={this.SubmitForm.bind(this)}
                                        fullWidth
                                        variant="contained"
                                        color="primary"
                                        className={classes.submit}
                                    >
                                        Sign In
                                    </Button>

                                    <Grid container>
                                        <Grid item xs>
                                            <Link href="#" color="secondary" variant="body2">
                                                Forgot password?
                                            </Link>
                                        </Grid>
                                    </Grid>
                                </form>
                            </Fragment>
                        )}
                        <Box mt={5}>
                            <Copyright/>
                        </Box>
                    </div>
                </Grid>
                <Grid item xs={false} sm={4} md={5} lg={9} className={classes.image}/>
            </Grid>
        );
    }
}

export default withStyles(styles)(Login)

