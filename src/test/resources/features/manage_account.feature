@manageaccount
Feature: Employee hesap olusturur ve yonetir
  Scenario Outline:TC13_manage account testi
    Given kullanici login sayfasina gider
    And kullanici texbox kutusuna gecerli username "<username>" girer
    And kullanici textbox kutusuna gecerli password "<password>" girer
  