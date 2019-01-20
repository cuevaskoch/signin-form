using System.Collections.Generic;
using Google.Apis.Sheets.v4;
using Google.Apis.Sheets.v4.Data;
using SigninForm.Extensions;
using SigninForm.Models;

namespace SigninForm.Services
{
    public class GoogleSheetsSignInLogService : ISignInLogService
    {
        private readonly ISheetsServiceFactory _sheetsServiceFactory;
        private readonly Settings _settings;

        public GoogleSheetsSignInLogService(ISheetsServiceFactory sheetsServiceFactory, Settings settings)
        {
            _sheetsServiceFactory = sheetsServiceFactory;
            _settings = settings;
        }
        
        public void LogSignIn(SignInModel signInModel)
        {
            var service = _sheetsServiceFactory.GetSheetsService(_settings.SignInLogGoogleSheetId);

            var valuesToAppend = new ValueRange
            {
                Values = new List<IList<object>>
                {
                    signInModel.GetSpreadsheetValues(),
                }
            };

            var request = service.Spreadsheets.Values.Append(
                valuesToAppend,
                _settings.SignInLogGoogleSheetId,
                _settings.SignInLogRange);
            request.ValueInputOption =
                SpreadsheetsResource.ValuesResource.AppendRequest.ValueInputOptionEnum.USERENTERED;

            request.Execute();
        }
    }
}