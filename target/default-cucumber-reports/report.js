$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/SignIn.feature");
formatter.feature({
  "name": "Kullaci Girisi",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@gmibankuserlogin"
    }
  ]
});
formatter.scenario({
  "name": "TC04_GMI da kullanici login sayfasindan gecerli kimlik bilgileriyle giris yapar",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@gmibankuserlogin"
    }
  ]
});
formatter.step({
  "name": "Kullanici login sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.LoginStepdefinitions.kullanici_login_sayfasina_gider()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "username textbox kutusuna gecerli username yazar",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.LoginStepdefinitions.username_textbox_kutusuna_gecerli_username_yazar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "password textbox kutusuna gecerli password yazar",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.LoginStepdefinitions.password_textbox_kutusuna_gecerli_password_yazar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "sign in butonuna tiklayarak giris yapar",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.LoginStepdefinitions.sign_in_butonuna_tiklayarak_giris_yapar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici kendi username ini login kisminda gorur",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.LoginStepdefinitions.kullanici_kendi_username_ini_login_kisminda_gorur()"
});
formatter.result({
  "status": "passed"
});
});