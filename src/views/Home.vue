<template>
    <div class="cc-home">
        <main class="cc-home__registration-panel">
            <section class="cc-home__registration-form">
                <h1>Sign in to CommonCar</h1>
                <div>or use your email account</div>
                <q-form @submit="onSubmit">
                    <q-input
                        filled
                        v-model="email"
                        label="Email"
                        type="email"
                        lazy-rules
                        :rules="[
                            val =>
                                (val && val.length > 0) ||
                                'Please type something',
                        ]"
                    ></q-input>
                </q-form>
            </section>
            <aside class="cc-home_registration-"></aside>

            <!-- <div class="cc-home__sign-up-message">
                <div>Welcome Back!</div>
            </div>
            <div class="cc-home__sign-in-message">
                <div>Hello Friend!</div>
            </div>-->
        </main>
    </div>
</template>

<script>
import { QForm, QInput } from 'quasar';

import firebase from 'firebase/app';
import 'firebase/auth';

export default {
    data() {
        return {
            email: '',
            password: '',
            authUser: null,
        };
    },

    methods: {
        onSubmit() {
            console.log('🚀');
        },
        register() {
            firebase
                .auth()
                .createUserWithEmailAndPassword(this.email, this.password)
                .catch(error => alert('☠️' + error.message));
        },
        signIn() {
            firebase
                .auth()
                .signInWithEmailAndPassword(this.email, this.password)
                .catch(error => alert('☠️' + error.message));
            this.$router.push({ path: 'dashboard' });
        },
        signOut() {
            firebase.auth().signOut();
        },
    },

    components: {
        QForm,
        QInput,
    },

    created() {
        firebase.auth().onAuthStateChanged(user => {
            this.authUser = user;
        });
    },
};
</script>

<style lang="scss">
.cc-home {
    align-items: center;
    background-color: #fbfbfb;
    display: flex;
    height: 100vh;
    justify-content: center;
    width: 100vw;
}
.cc-registration-panel {
    background-color: white;
    border-radius: 17px;
    box-shadow: 0px 7px 20px 3px rgba(0, 0, 0, 0.2),
        0px 11px 18px 0px rgba(0, 0, 0, 0.12);
    height: 497px;
    width: 788px;
}
</style>
