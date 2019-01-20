using SigninForm.Models;

namespace SigninForm.Services
{
    public class GoogleSheetsSignInLogService : ISignInLogService
    {
        private readonly Settings _settings;

        public GoogleSheetsSignInLogService(Settings settings)
        {
            _settings = settings;
        }
        
        public void LogSignIn(SignInModel signInModel)
        {
            throw new System.NotImplementedException();
        }
    }
}