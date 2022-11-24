import react from 'react' ;
import { Card, Paper, TextField, Typography, Button } from '@mui/material';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useForm } from 'react-hook-form';
import { auth } from '../../helpers/firebaseConfig';
import { RegisterFormData } from '../../helpers/interfaces';

const RegisterPage = () => {

    const {register, handleSubmit} = useForm<RegisterFormData>();

    const submitHandler = (data:RegisterFormData) => {
        if (data.password===data.password2) {
            createUserWithEmailAndPassword(auth, data.email, data.password)
            .then(()=>console.log("Success"))
            .catch((err) => console.error(err.message));
        } else {
            alert ("Passwords are different!")
        }
    }

    return (
        <Card component={Paper} sx={{display:"block", mx:"auto", maxWidth: "35%", my:"1rem" }}>
            <Typography variant="h2" align="center" sx={{fontSize:"2rem"}}
            >Register new account</Typography>
            <form style={{margin:"auto", marginTop:".5rem", marginBottom:".5rem", display:"flex", flexDirection:"column"}}
                onSubmit={handleSubmit(submitHandler)}>
                <TextField variant="outlined" label="email" type="email" 
                sx={{display:"block", mx:"auto", my:".3rem"}} 
                {...register("email", {required:true})}
                />
                <TextField variant="outlined" label="password" type="password" 
                sx={{display:"block", mx:"auto", my:".3rem"}} 
                {...register("password", {required:true})}
                />
                <TextField variant="outlined" label="password" type="password" 
                sx={{display:"block", mx:"auto", my:".3rem"}} 
                {...register("password2", {required:true})}
                />
                <Button variant="contained" type="submit" 
                sx={{display:"block", mx:"auto", my:".3rem", bgcolor:"#FC766AFF"}}   
                >Register</Button>

            </form>

        </Card>
    )
}

export default RegisterPage;

// 1. Instalacja react-hook-form
// 2. Import i wywołanie useForm
// 3. JSX: 
//  - <Card> component={Paper} (zaimportuj), sx: display block, mx:auto, maxWidth 35%, my1rem
//  - Typography variant h2, align center, sx fontSize 2rem, textContent Register new account
//  - form (HTMLowy) onSubmit zrobiony jak poprzednio, w atrybucie style margin auto, marginTop .5rem marginBottom .5rem, display:block
// W form 
// TextField z mui variant outlined, label email, type email, sx: display:block, my .3rem, zarejestruj input za pomocą register z useForm
// TextField password i password2 
// Button (MUI) variant contained, type submit, sx display: block, mx auto, my .3rem, bgcolor: #FC766AAF, TC:Register

// 4. W helpers plik interfaces.ts, interface RegisterFormData, w którym otypujesz wszystkie pola z forma. Zaimportuj i przypisz do wywołania useForm i do parametru funkcji signUserUp
// 5. Stwórz funkcję signUserUp (ta funkcja będzie wchodziła w handleSubmit w onSubmit forma)
// W funkcji:
// Stwórz if i spr czy hasła sie zgadzają, Wszystko w tej funkcji będzie osadzone w środku if
// - jeśli hasła sie zgadzają wywołaj funkcję createUserWithEmailAndPassword (firebase/auth) Funkcja przyjmuje 3 argumenty: obiekt referencyjny auth, email z formularza i hasło z form
// do createUser.. przyczep then w którym console.log(sukce) oraz catch z console.err
