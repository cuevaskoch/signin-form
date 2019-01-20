using System.ComponentModel.DataAnnotations;

namespace SigninForm
{
    public class Settings
    {
        [Required]
        public string SignInLogGoogleSheetId { get; set; } = "1BiKFLZVv1D4vNSeorpkkMwzZysL5L-33OVC5c4HZrJw";

        public string SignInLogRange { get; set; } = "SignInLog!A1:E1";
        
        [Required]
        public string MemberDataGoogleSheetId { get; set; } = "1RxIxSG9W6n3-hrHbcxU0MKm0dnZFnkZqBYRborWsXOk";
        
        [Required]
        public string MemberDataEmailRange { get; set; } = "MIGS!S2:S";
    }
}