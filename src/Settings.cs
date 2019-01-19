using System.ComponentModel.DataAnnotations;

namespace SigninForm
{
    public class Settings
    {
        [Required]
        public string MemberDataGoodleSheetId { get; set; }
    }
}