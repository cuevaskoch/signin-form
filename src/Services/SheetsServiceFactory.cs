using System;
using System.IO;
using System.Threading;
using Google.Apis.Auth.OAuth2;
using Google.Apis.Services;
using Google.Apis.Sheets.v4;
using Google.Apis.Util.Store;

namespace SigninForm.Services
{
    public class SheetsServiceFactory : ISheetsServiceFactory
    {
        private readonly Settings _settings;
        static string ApplicationName = "Sign In Form";
//        private static string[] Scopes = { SheetsService.Scope.Spreadsheets };

        public SheetsServiceFactory(Settings settings)
        {
            _settings = settings;
        }
        
        public SheetsService GetSheetsService(string sheetId)
        {
            
//            UserCredential credential;
//            using (var stream = new FileStream("credentials.json", FileMode.Open, FileAccess.Read))
//            {
//                // The file token.json stores the user's access and refresh tokens, and is created
//                // automatically when the authorization flow completes for the first time.
//                var credPath = "token.json";
//                credential = GoogleWebAuthorizationBroker.AuthorizeAsync(
//                    GoogleClientSecrets.Load(stream).Secrets,
//                    Scopes,
//                    "user",
//                    CancellationToken.None,
//                    new FileDataStore(credPath, true)).Result;
//                Console.WriteLine($"Credential file saved to: {credPath}");
//            }

            Console.WriteLine($"Api Key {_settings.GoogleSheetsApiKey}");
            var service = new SheetsService(new BaseClientService.Initializer
            {
                ApiKey = _settings.GoogleSheetsApiKey,
                ApplicationName = ApplicationName,
            });

            return service;
        }
    }
}