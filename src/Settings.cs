using System.ComponentModel.DataAnnotations;

namespace SigninForm
{
    public class Settings
    {
        [Required]
        public string SignInLogGoogleSheetId { get; set; } = "Some Default Value";

        [Required]
        public string SignInLogRange { get; set; } = "SignInLog!A1:E1";
        
        [Required]
        public string MemberDataGoogleSheetId { get; set; }
        
        [Required]
        public string MemberDataEmailRange { get; set; } = "MIGS!S2:S";
    }
}