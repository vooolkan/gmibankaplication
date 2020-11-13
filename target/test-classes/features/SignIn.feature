@gmibankuserloginparameter
Feature: Kullaci Girisi
  Scenario: TC04_GMI da kullanici login sayfasindan gecerli kimlik bilgileriyle giris yapar
    Given Kullanici login sayfasina gider
    And username textbox kutusuna gecerli username yazar
    And password textbox kutusuna gecerli password yazar
    And sign in butonuna tiklayarak giris yapar
    Then kullanici kendi username ini login kisminda gorur