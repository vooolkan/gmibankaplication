@accountmanage

Feature: Employee hesap olusturur ve yonetir
  Scenario Outline:TC13_manage account testi
    Given Kullanici login sayfasina gider
    And username textbox kutusuna gecerli username "<username>" girer
    And password textbox kutusuna gecerli password "<password>" girer
    And sign in butonuna tiklayarak giris yapar
    Examples:
      | username | password |
      |memur |cucumber01.|

  @accountcreate
  Scenario:Employee customer account olusturur
    Given Employee My operations a tiklar
    And employee Manage Accounts tiklar
    And employee Create a new Account a tiklar
    And employee Description text box a "buraya hesap aciklamasi yazilmali" bilgisini girer bos birakamaz
    And employee Balance text box'a dolar miktarini sadece rakam girer.
    And employee Account Type secimi yapabilir
    And employee Account Status Type secimi yapabilmelidir
    And Employee kutusundan bir calisan secebilmelidir
    Then kullanici sign in butonuna tiklayarak Manage Account sayfasina geri doner