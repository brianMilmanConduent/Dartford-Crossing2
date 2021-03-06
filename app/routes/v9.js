const express = require('express');
const router = express.Router();

const verNum = 9;



//Vx routing starts here
router.post(`/v${verNum}/create-account/account-type`, function (req, res) {
  const accountType = req.session.data['account-type'];

  if (accountType === 'Personal') {
      res.redirect(`/v${verNum}/create-account/name`);
  } else {
      res.redirect(`/v${verNum}/create-account/name`);
  }
});



router.post(`/v${verNum}/create-account/name`, function (req, res) {
  const accountType = req.session.data['account-type'];

  if (accountType === 'Personal') {
      res.redirect(`/v${verNum}/create-account/addresslookup`);
  } else {
      res.redirect(`/v${verNum}/create-account/addresslookup`);
  }
});



router.post(`/v${verNum}/create-account/lrdsSelection`, function (req, res) {
  const lrdsSelect = req.session.data['lrdsSelect'];

  if (lrdsSelect === 'None of the above') {
      res.redirect(`/v${verNum}/create-account/otherAccountType`);
  } else {
      res.redirect(`/v${verNum}/create-account/lrdsDocUpload`);
  }
});

router.post(`/v${verNum}/create-account/lrdsPost`, function (req, res) {
  const lrdsUploadNow = req.session.data['lrdsUploadNow'];

  if (lrdsUploadNow === 'Post') {
      res.redirect(`/v${verNum}/create-account/lrdswarn`);
  } else if (lrdsUploadNow === 'Upload later') {
    res.redirect(`/v${verNum}/create-account/lrdswarn`);
} else {
      res.redirect(`/v${verNum}/create-account/lrdsDocUploadFirstDoc`);
  }
});



router.post(`/v${verNum}/create-account/businessPersonalVehicles`, function (req, res) {
  const accounttype = req.session.data['account-type'];

  if (accounttype === 'Personal') {
      res.redirect(`/v${verNum}/create-account/vehicle-registration`);
  } else {
      res.redirect(`/v${verNum}/create-account/upload-vehicles`);
  }
});


router.post(`/v${verNum}/create-account/vehicle-add`, function (req, res) {
  const vehicleUpload = req.session.data['vehicle-upload'];

  if (vehicleUpload === 'Yes') {
      res.redirect(`/v${verNum}/create-account/vehicle-registration`);
  } else if (vehicleUpload === 'No') {
    res.redirect(`/v${verNum}/create-account/number-of-vehicles`);
  } else {
      res.redirect(`/v${verNum}/manage-account/bulk-upload/bulk-upload-start`);
  }
});

router.post(`/v${verNum}/create-account/notification`, function (req, res) {
  const textcomms = req.session.data['comms-pref'];

  if (textcomms === 'mobile') {
      res.redirect(`/v${verNum}/create-account/mobile`);
  }  else {
      res.redirect(`/v${verNum}/create-account/vehicle-registration`);
  }
});

router.post(`/v${verNum}/create-account/businessNotification`, function (req, res) {
  const textcomms = req.session.data['comms-pref'];

  if (textcomms === 'mobile') {
      res.redirect(`/v${verNum}/create-account/mobile`);
  }  else {
      res.redirect(`/v${verNum}/create-account/upload-vehicles`);
  }
});





router.post(`/v${verNum}/create-account/vehicle-summary-add-another`, function (req, res) {
  const vehiclecheck = req.session.data['vehicle-check'];

  if (vehiclecheck === 'no') {
      res.redirect(`/v${verNum}/create-account/vehicle-registration`);
  } else {
      res.redirect(`/v${verNum}/create-account/vehicle-summary-add-another`);
  }
});

router.post(`/v${verNum}/create-account/moreVehiclesBusiness`, function (req, res) {
  const moreVehicles = req.session.data['more-vehicles'];

  if (moreVehicles === `No` ) {
    res.redirect(`/v${verNum}/create-account/number-of-vehicles`);
} else {
      res.redirect(`/v${verNum}/create-account/vehicle-summary-add-another`);
  }
});

router.post(`/v${verNum}/create-account/moreVehiclesPersonal`, function (req, res) {
  const moreVehicles = req.session.data['more-vehicles'];

  if (moreVehicles === `No`) {
      res.redirect(`/v${verNum}/create-account/check-answers`);
  } else {
      res.redirect(`/v${verNum}/create-account/vehicle-summary-add-another`);
  }
});



router.post(`/v${verNum}/landing-page`, function (req, res) {
  const editChoice = req.session.data[`landing`]
  if (editChoice === 'one-off-payment') {
    res.redirect(`/v${verNum}/one-off-payment/pay-crossing`)
  } else if (editChoice === 'create-account') {
    res.redirect(`/v${verNum}/create-account/create-start`)
  }
  else if (editChoice === 'resolve-pcn') {
    res.redirect(`/v${verNum}/landing`)
  }
});




router.post(`/v${verNum}/create-account/otherAccountTypeLRDScheck`, function (req, res) {
  const checkPostCode = req.session.data['address-postcode'];

  if (
    checkPostCode === 'DA11DY'
      || checkPostCode === 'da11dy'
      || checkPostCode === 'da1  1dy'
      || checkPostCode === 'da1 1dy'
      || checkPostCode === 'DA1  1DY'
      || checkPostCode === 'DA1 1DY'
      || checkPostCode === 'Da1 1dy'
  ) {
      res.redirect(`/v${verNum}/create-account/addressChooseLRDSinfo`);
  } else {
      res.redirect(`/v${verNum}/create-account/otherAccountType`);
  }
});

//Vx ends here










































// Add your routes here - above the module.exports line
// Create a section for the screens the routes will be for



// create-start //

router.post('/v01/create-account/step4-code', function (req, res) {
  const editChoice = req.session.data['step4-code']
//if user chooses mobile authenticator redirect to app
  if (editChoice === 'authenticator-app') {
    res.redirect('/v01/create-account/2fa-app')
    //if user chooses mobile phone redirect to mobile

  } else if (editChoice === 'mobile-phone') {
    res.redirect('/v01/create-account/2fa-mobile')
  }
});

router.get('/examples/template-data', function(req, res) {
    res.render('examples/template-data', { 'name' : 'Foo' });
});

//////////////////Landing page choices //////////////////////////////////////

// Landing page 01 //
router.post('/v01/landing', function (req, res) {
  const editChoice = req.session.data['landing']
  if (editChoice === 'one-off-payment') {
    res.redirect('/v01/one-off-payment/pay-crossing')
  } else if (editChoice === 'create-account') {
    res.redirect('/v01/create-account/create-account')
  }
  else if (editChoice === 'resolve-pcn') {
    res.redirect('/v01/resolve-pcn/payConfirm')
  }
});

// Landing page 02 //
router.post('/v02/landing', function (req, res) {
  const editChoice = req.session.data['start-choose']
  if (editChoice === 'one-off-payment') {
    res.redirect('/v02/one-off-payment/pay-crossing')
  } else if (editChoice === 'create-account') {
    res.redirect('/v02/create-account/create-start')
  }
  else if (editChoice === 'resolve-pcn') {
    res.redirect('/v02/resolve-pcn/payConfirm')
  }
});

// Landing page 03 //
router.post('/v03/landing', function (req, res) {
  const editChoice = req.session.data['start-choose']
  if (editChoice === 'one-off-payment') {
    res.redirect('/v03/one-off-payment/pay-crossing')
  } else if (editChoice === 'create-account') {
    res.redirect('/v03/create-account/create-start')
  }
  else if (editChoice === 'resolve-pcn') {
    res.redirect('/v03/resolve-pcn/payConfirm')
  }
});

// Landing page 04 //
router.post('/v04/landing', function (req, res) {
  const editChoice = req.session.data['start-choose']
  if (editChoice === 'one-off-payment') {
    res.redirect('/v04/one-off-payment/pay-crossing')
  } else if (editChoice === 'create-account') {
    res.redirect('/v04/create-account/create-start')
  }
  else if (editChoice === 'resolve-pcn') {
    //res.redirect('/v04/resolve-pcn/payConfirm')
    res.redirect('/v04/resolve-pcn/flow1')
  }
});

// Landing page 05 //
router.post('/v05/landing', function (req, res) {
  const editChoice = req.session.data['start-choose']
  if (editChoice === 'one-off-payment') {
    res.redirect('/v05/one-off-payment/pay-crossing')
  } else if (editChoice === 'create-account') {
    res.redirect('/v05/create-account/create-start')
  }
  else if (editChoice === 'resolve-pcn') {
    res.redirect('/v05/resolve-pcn/flow1')
  }
});


/////////////////////////create account v04///////////////////////////////

///is this your vehicle v04///
router.post('/awcheck', function (req, res) {
  var editChoice = req.session.data['vehicle-check']
  if (editChoice == "yes"){
    res.redirect('v05/create-account/email')
  } else if (editChoice === "no"){
    res.redirect('v05/create-account/vehicle-registration')
  }
});

//////Top up - payment1 v04///
router.post('/CheckPaymentOption', function (req, res) {
  var payoption = req.session.data['type-choose']
  if (payoption == "Prepay"){
    // Send user to Prepay page
    res.redirect('v05/create-account/payment2')
  } else  if (payoption == "PAYG"){
    // Send user to PAYG page
    res.redirect('v05/create-account/payment2b')
  }

});


///////Top up - auto pay or manual pay v04///////
router.post('/CheckPaymentmethod', function (req, res) {
  var topupoption = req.session.data['topup']
  if (topupoption == "auto"){
    res.redirect('v05/create-account/payment3a')
  } else  if (topupoption == "manual"){
    res.redirect('v05/create-account/payment3a')
  }
});


//////////////////////////Manage-account v05//////////////////////////////


/////////////////////////One off payment flow v05////////////////////////
router.post("/v05/one-off-payment/pay-crossing", function (req, res) {
  // res.redirect(`/one-off-payment/${req.params.version}/payment-options`);
  res.redirect(`/v05/one-off-payment/vehicle-info`);
});



router.post("/v05/one-off-payment/vehicle-info", function (req, res) {
  // res.redirect(`/one-off-payment/${req.params.version}/payment-options`);
  if (req.body['vehicle-owner']) {
    if (req.body['vehicle-owner'] === 'Yes') {
      res.redirect("payment-info-single");
    } else if (req.body['vehicle-owner'] === 'No') {
      res.redirect("/v05/one-off-payment/pay-crossing");
    }
  }
});
router.post("/v05/one-off-payment/payment-info-single", function (req, res) {
  // res.redirect(`/one-off-payment/${req.params.version}/payment-options`);
  res.redirect(`/v05/one-off-payment/payment-options`);
});

router.post("/v05/one-off-payment/payment-info-future", function (req, res) {
  // res.redirect(`/one-off-payment/${req.params.version}/payment-options`);
  res.redirect(`/v05/one-off-payment/payment-options`);
});

router.post("/v05/one-off-payment/payment-options", function (req, res) {
  // res.redirect(`/one-off-payment/${req.params.version}/payment-options`);
  res.redirect(`/v05/one-off-payment/confirm-card-payment`);
});

// router.get("/v05/one-off-payment/payment-info-single", function (req, res) {
//   const {
//     data
//   } = req.session;
//   res.render(`/v05/one-off-payment/payment-info-single`, data);
// });

// router.get("/v05/one-off-payment/payment-info-future", function (req, res) {
//   const {
//     data
//   } = req.session;
//   res.redirect(data, `/v05/one-off-payment/payment-info-future`);
// });


/////////////////////////Resolve pcn v05//////////////////////////////////

router.get("/v05/resolve-pcn/flow1", function (req, res) {
  res.redirect('/v05/resolve-pcn/landingRemod');
});

router.get("/v05/resolve-pcn/flow2", function (req, res) {
  res.redirect(`/v05/resolve-pcn/vehicleRemod`);
});

router.get("/v05/resolve-pcn/flow2Alt", function (req, res) {
  res.redirect(`/v05/resolve-pcn/vehicleRemodAlt`);
});

router.get("/v05/resolve-pcn/flow4", function (req, res) {
  res.redirect(`/v05/resolve-pcn/outstandingRemod`);
});

router.get("/v05/resolve-pcn/flow5b", function (req, res) {
  res.redirect(`/v05/resolve-pcn/pcn_details`);
});

router.get("/v05/resolve-pcn/flow5a", function (req, res) {
  res.redirect(`/v05/resolve-pcn/pcn_details_b`);
});

router.get("/v05/resolve-pcn/flow5details", function (req, res) {
  res.redirect(`/v05/resolve-pcn/pcnDetails`);
});

router.get("/v05/resolve-pcn/flow6", function (req, res) {
  res.redirect(`/v05/resolve-pcn//payDetails`);
});

router.get("/v05/resolve-pcn/flow6details", function (req, res) {
  res.redirect(`/v05/resolve-pcn/pcnDetailsPay`);
});

router.get("/v05/resolve-pcn/flow7", function (req, res) {
  res.redirect(`/v05/resolve-pcn//confirmPay`);
});

router.get("/v05/resolve-pcn/flow8", function (req, res) {
  res.redirect(`/v05/resolve-pcn/payConfirm`);
});

router.get("/v05/resolve-pcn/flow9", function (req, res) {
  res.redirect(`/v05/resolve-pcn/challengePCNremod`);
});

router.get("/v05/resolve-pcn/flow10", function (req, res) {
  res.redirect(`/v05/resolve-pcn/pcnChallengeReasons`);
});

router.get("/v05/resolve-pcn/flow11", function (req, res) {
  res.redirect(`/v05/resolve-pcn/supportingEvidence`);
});

router.get("/v05/resolve-pcn/flow13", function (req, res) {
  res.redirect(`/v05/resolve-pcn/challengeSummary`);
});

router.get("/v05/resolve-pcn/flow14", function (req, res) {
  res.redirect(`/v05/resolve-pcn/challengePCNchange`);
});

router.get("/v05/resolve-pcn/flow15", function (req, res) {
  res.redirect(`/v05/resolve-pcn/pcnChallengeReasonsChange`);
});

router.get("/v05/resolve-pcn/flow16", function (req, res) {
  res.redirect(`/v05/resolve-pcn/supportingEvidenceChange`);
});

router.get("/v05/resolve-pcn/flow17", function (req, res) {
  res.redirect(`/v05/resolve-pcn/challengeConfirm`);
});

router.get("/information/charges-fines", function (req, res) {
  res.render(`/v05/information/charges-fines`);
});

/////////////////////////create account v05///////////////////////////////

///is this your vehicle v04///
router.post('/awcheck', function (req, res) {
  var editChoice = req.session.data['vehicle-check']
  if (editChoice == "yes"){
    res.redirect('v04/create-account/email')
  } else if (editChoice === "no"){
    res.redirect('v04/create-account/vehicle-registration')
  }
});

//////Top up - payment1 v04///
router.post('/CheckPaymentOption', function (req, res) {
  var payoption = req.session.data['type-choose']
  if (payoption == "Prepay"){
    // Send user to Prepay page
    res.redirect('v04/create-account/payment2')
  } else  if (payoption == "PAYG"){
    // Send user to PAYG page
    res.redirect('v04/create-account/payment2b')
  }

});


///////Top up - auto pay or manual pay v04///////
router.post('/CheckPaymentmethod', function (req, res) {
  var topupoption = req.session.data['topup']
  if (topupoption == "auto"){
    res.redirect('v04/create-account/check-answers-auto')
  } else  if (topupoption == "manual"){
    res.redirect('v04/create-account/check-answers-manual')
  }
});


//////////////////////////Manage-account v04//////////////////////////////


/////////////////////////One off payment flow v04////////////////////////

/////////////////////////one off payment flow////////////////////////
// one off payment
router.post("/v04/one-off-payment/pay-crossing", function (req, res) {

  res.redirect("/v04/one-off-payment/vehicle-info");

});

/////////////////////////resolve pcn////////////////////////
// Resolve PCN
router.get("/v04/resolve-pcn/flow1", function (req, res) {
  res.redirect('/v04/resolve-pcn/landingRemod');
});

router.get("/v04/resolve-pcn/flow2", function (req, res) {
  res.redirect(`/v04/resolve-pcn/vehicleRemod`);
});

router.get("/v04/resolve-pcn/flow2Alt", function (req, res) {
  res.redirect(`/v04/resolve-pcn/vehicleRemodAlt`);
});

router.get("/v04/resolve-pcn/flow4", function (req, res) {
  res.redirect(`/v04/resolve-pcn/outstandingRemod`);
});

router.get("/v04/resolve-pcn/flow5b", function (req, res) {
  res.redirect(`/v04/resolve-pcn/pcn_details`);
});

router.get("/v04/resolve-pcn/flow5a", function (req, res) {
  res.redirect(`/v04/resolve-pcn/pcn_details_b`);
});
/////////////////////////Resolve pcn v04//////////////////////////////////

router.get("/v04/resolve-pcn/flow5details", function (req, res) {
  res.redirect(`/v04/resolve-pcn//pcnDetails`);
});

router.get("/v04/resolve-pcn/flow6", function (req, res) {
  res.redirect(`/v04/resolve-pcn//payDetails`);
});

router.get("/v04/resolve-pcn/flow6details", function (req, res) {
  res.redirect(`/v04/resolve-pcn/pcnDetailsPay`);
});

router.get("/v04/resolve-pcn/flow7", function (req, res) {
  res.redirect(`/v04/resolve-pcn//confirmPay`);
});

router.get("/v04/resolve-pcn/flow8", function (req, res) {
  res.redirect(`/v04/resolve-pcn/payConfirm`);
});

router.get("/v04/resolve-pcn/flow9", function (req, res) {
  res.redirect(`/v04/resolve-pcn/challengePCNremod`);
});

router.get("/v04/resolve-pcn/flow10", function (req, res) {
  res.redirect(`/v04/resolve-pcn/pcnChallengeReasons`);
});

router.get("/v04/resolve-pcn/flow11", function (req, res) {
  res.redirect(`/v04/resolve-pcn/supportingEvidence`);
});

router.get("/v04/resolve-pcn/flow13", function (req, res) {
  res.redirect(`/v04/resolve-pcn/challengeSummary`);
});

router.get("/v04/resolve-pcn/flow14", function (req, res) {
  res.redirect(`/v04/resolve-pcn/challengePCNchange`);
});

router.get("/v04/resolve-pcn/flow15", function (req, res) {
  res.redirect(`/v04/resolve-pcn/pcnChallengeReasonsChange`);
});

router.get("/v04/resolve-pcn/flow16", function (req, res) {
  res.redirect(`/v04/resolve-pcn/supportingEvidenceChange`);
});

router.get("/v04/resolve-pcn/flow17", function (req, res) {
  res.redirect(`/v04/resolve-pcn/challengeConfirm`);
});

router.get("/information/charges-fines", function (req, res) {
  res.render(`/v04/information/charges-fines`);
});






module.exports = router