using System;
using System.Linq;

namespace SigninForm.Services
{
    public class GoogleSheetsMemberDataService : IMemberDataService
    {
        private readonly ISheetsServiceFactory _sheetsServiceFactory;
        private readonly Settings _settings;

        public GoogleSheetsMemberDataService(ISheetsServiceFactory sheetsServiceFactory, Settings settings)
        {
            _sheetsServiceFactory = sheetsServiceFactory;
            _settings = settings;
        }

        public bool GetIsMemberInGoodStanding(string emailAddress)
        {
            var trimmedEmail = emailAddress.Trim();

            var service = _sheetsServiceFactory.GetSheetsService(_settings.MemberDataGoogleSheetId);
            var request =
                service.Spreadsheets.Values.Get(_settings.MemberDataGoogleSheetId, _settings.MemberDataEmailRange);

            var response = request.Execute();
            var isInGoodStanding = response.Values?
                .Select(x => x[0] as string)
                .Any(x => string.Equals(x, trimmedEmail, StringComparison.OrdinalIgnoreCase));

            return isInGoodStanding ?? false;
        }
    }
}
