using Google.Apis.Sheets.v4;

namespace SigninForm.Services
{
    public interface ISheetsServiceFactory
    {
        SheetsService GetSheetsService(string sheetId);
    }
}