using System;
using System.ComponentModel.DataAnnotations;

namespace SigninForm.Models
{
    public class SignInModel
    {
        [Required]
        public string FirstName { get; set; }
        
        [Required]
        public string LastName { get; set; }
        
        [Required, EmailAddress]
        public string EmailAddress { get; set; }
        
        [Required]
        public string PhoneNumber { get; set; }
        
        [Required]
        public DateTimeOffset Timestamp { get; set; }
    }
}