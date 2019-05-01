<template>
    <div class="cc-home">
        <main class="cc-registration-panel">
            <div v-if="authUser">
                <h2>Signed in as {{ authUser.email }}</h2>
                <button @click="signOut">Sign out</button>
            </div>
            <div v-else>
                <form @submit.prevent="register">
                    <title>Register</title>
                    <input type="email" v-model="email" placeholder="Email" />
                    <input
                        type="password"
                        v-model="password"
                        placeholder="Password"
                    />
                    <button>Register</button>
                </form>
                <form @submit.prevent="signIn">
                    <title>Register</title>
                    <input type="email" v-model="email" placeholder="Email" />
                    <input
                        type="password"
                        v-model="password"
                        placeholder="Password"
                    />
                    <button>Sign in</button>
                </form>
            </div>
        </main>
    </div>
</template>

<script>
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
        },
        signOut() {
            firebase.auth().signOut();
        },
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
