import React from "react";
//import Components from "../components/Components";
import * as SignUpp from "../components/SignUpp";

function SignUp() {
    const [signIn, toggle] = React.useState(true);
    return (
        <SignUpp.Container>
            <SignUpp.SignUpContainer signinIn={signIn}>
                <SignUpp.Form>
                    <SignUpp.Title>Create Account</SignUpp.Title>
                    <SignUpp.Input type='text' placeholder='Name' />
                    <SignUpp.Input type='email' placeholder='Email' />
                    <SignUpp.Input type='password' placeholder='Password' />
                    <SignUpp.Button>Sign Up</SignUpp.Button>
                </SignUpp.Form>
            </SignUpp.SignUpContainer>

            <SignUpp.SignInContainer signinIn={signIn}>
                <SignUpp.Form>
                    <SignUpp.Title>Sign in</SignUpp.Title>
                    <SignUpp.Input type='email' placeholder='Email' />
                    <SignUpp.Input type='password' placeholder='Password' />
                    <SignUpp.Anchor href='#'>Forgot your password?</SignUpp.Anchor>
                    <SignUpp.Button>Sigin In</SignUpp.Button>
                </SignUpp.Form>
            </SignUpp.SignInContainer>



            <SignUpp.OverlayContainer signinIn={signIn}>
                <SignUpp.Overlay signinIn={signIn}>

                    <SignUpp.LeftOverlayPanel signinIn={signIn}>
                        <SignUpp.Title>Welcome Back!</SignUpp.Title>
                        <SignUpp.Paragraph>
                            To keep connected with us please login with your personal info
                        </SignUpp.Paragraph>
                        <SignUpp.GhostButton onClick={() => toggle(true)}>
                            Sign In
                        </SignUpp.GhostButton>
                    </SignUpp.LeftOverlayPanel>

                    <SignUpp.RightOverlayPanel signinIn={signIn}>
                        <SignUpp.Title>Hello, Friend!</SignUpp.Title>
                        <SignUpp.Paragraph>
                            Enter Your personal details and start journey with us
                        </SignUpp.Paragraph>
                        <SignUpp.GhostButton onClick={() => toggle(false)}>
                            Sigin Up
                        </SignUpp.GhostButton>
                    </SignUpp.RightOverlayPanel>

                </SignUpp.Overlay>
            </SignUpp.OverlayContainer>

        </SignUpp.Container>
    )
}

export default SignUp;