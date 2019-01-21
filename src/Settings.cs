using System.ComponentModel.DataAnnotations;

namespace SigninForm
{
    public class Settings
    {
        [Required]
        public string GoogleSheetsApiKey { get; set; }
        
        [Required]
        public string SignInLogGoogleSheetId { get; set; }

        [Required]
        public string SignInLogRange { get; set; } = "SignInLog!A1:E1";
        
        [Required]
        public string MemberDataGoogleSheetId { get; set; }
        
        [Required]
        public string MemberDataEmailRange { get; set; } = "MIGS!S2:S";
    }
}