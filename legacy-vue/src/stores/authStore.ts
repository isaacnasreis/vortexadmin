import { defineStore } from "pinia";
import { auth } from "../firebase";
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  type User,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { ref } from "vue";
import { useRouter } from "vue-router";

export const useAuthStore = defineStore("auth", () => {
  const user = ref<User | null>(null);
  const router = useRouter();
  const loginFailure = ref(false);

  // Monitora mudanças na autenticação
  onAuthStateChanged(auth, (currentUser) => {
    user.value = currentUser;
  });

  // Login com email e senha
  const login = async (email: string, password: string) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      loginFailure.value = false;
      router.push("/home"); // Redireciona após login
    } catch (error) {
      loginFailure.value = true;
      alert("Erro ao fazer login. Verifique suas credenciais.");
    }
  };

  // Login com Google
  const loginWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      loginFailure.value = false;
      router.push("/home");
    } catch (error) {
      loginFailure.value = true;
      alert("Erro ao fazer login com Google.");
    }
  };

  // Logout
  const logout = async () => {
    try {
      await signOut(auth);
      user.value = null; // Remove o usuário da store
      router.push("/"); // Redireciona para a tela de login
    } catch (error) {
      alert("Erro ao sair da conta.");
    }
  };

  return { user, login, loginWithGoogle, logout, loginFailure };
});
