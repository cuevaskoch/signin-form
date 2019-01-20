using System.ComponentModel.DataAnnotations;

namespace SigninForm
{
    public class Settings
    {
        [Required]
        public string MemberDataGoogleSheetId { get; set; } = "1RxIxSG9W6n3-hrHbcxU0MKm0dnZFnkZqBYRborWsXOk";

        [Required]
        public string MemberDataEmailRange { get; set; } = "MIGS!S2:S";
    }
}