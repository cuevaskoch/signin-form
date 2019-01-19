using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SigninForm.Models;
using SigninForm.Services;

namespace SigninForm.Controllers
{
    [Route("api/sign-in")]
    public class SignInController : Controller
    {
        private readonly IMemberDataService _memberDataService;
        private readonly ISignInLogService _signInLogService;

        public SignInController(
            IMemberDataService memberDataService,
            ISignInLogService signInLogService)
        {
            _memberDataService = memberDataService;
            _signInLogService = signInLogService;
        }

        [HttpPost]
        public ActionResult<SignInResponse> SignIn(SignInModel signInModel)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _signInLogService.LogSignIn(signInModel);

            var emailAddress = signInModel.EmailAddress;
            var isInGoodStanding = _memberDataService
                .GetIsMemberInGoodStanding(emailAddress);

            var response = new SignInResponse
            {
                EmailAddress = emailAddress,
                IsInGoodStanding = isInGoodStanding,
            };

            return Ok(response);
        }
    }
}