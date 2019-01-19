namespace SigninForm.Services
{
    public interface IMemberDataService
    {
        bool GetIsMemberInGoodStanding(string emailAddress);
    }
}