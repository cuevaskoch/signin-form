using System.Collections.Generic;
using Google.Apis.Sheets.v4.Data;
using SigninForm.Models;

namespace SigninForm.Extensions
{
    public static class SignInModelExtensions
    {
        public static List<object> GetSpreadsheetValues(this SignInModel signInModel) =>
            new List<object>
            {
                signInModel.FirstName,
                signInModel.LastName,
                signInModel.EmailAddress,
                signInModel.PhoneNumber,
                signInModel.Timestamp.ToString(),
            };
    }
}