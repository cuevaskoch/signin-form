namespace SigninForm.Services
{
    public interface ISignInLogService
    {
        void LogSignIn(Models.SignInModel signInModel);
    }
}