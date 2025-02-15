import * as AuthApi from "../api/auth.ts";

export const signin = async (model) => {
  window.store.set({ isLoading: true });
  try {
    await AuthApi.signin(model);
    window.router.go("/messenger");
  } catch (responseError) {
    const error = responseError.json();
    console.log(error);
  } finally {
    window.store.set({ isLoading: false });
  }
};

export const signup = async (model) => {
  window.store.set({ isLoading: true });
  try {
    await AuthApi.signup(model);
    window.router.go("/messenger");
  } catch (responseError) {
    const error = responseError.json();
    console.log(error);
  } finally {
    window.store.set({ isLoading: false });
  }
};

export const logout = async () => {
  window.store.set({ isLoading: true });
  try {
    await AuthApi.logout();
    window.router.go("/");
  } catch (responseError) {
    const error = responseError.json();
    console.log(error);
  } finally {
    window.store.set({ isLoading: false });
  }
};
